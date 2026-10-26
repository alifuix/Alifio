/**
 * ====================================================================
 * ALIFIO - Google Apps Script Backend API (code.gs)
 * ====================================================================
 * Petunjuk Deploy:
 * 1. Klik menu "Deploy" > "New deployment"
 * 2. Pilih type "Web app"
 * 3. Description: "Alifio API v1.0"
 * 4. Execute as: "Me" (Email Anda)
 * 5. Who has access: "Anyone" (Siapa saja, agar web frontend bisa akses)
 * 6. Klik Deploy, salin "Web app URL" dan tempel di Pengaturan Web App Alifio!
 * ====================================================================
 */

function doGet(e) {
  const params = e ? e.parameter : {};
  const action = params.action || 'ping';
  
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let result = {};
    
    switch (action) {
      case 'ping':
        result = { status: 'success', message: 'Alifio API Connected Successfully', timestamp: new Date() };
        break;
        
      case 'getProducts':
        result = { status: 'success', data: getSheetDataAsJson(ss, 'Products') };
        break;
        
      case 'getTransactions':
        result = { status: 'success', data: getSheetDataAsJson(ss, 'Transactions') };
        break;
        
      case 'getSettings':
        result = { status: 'success', data: getSettingsAsMap(ss) };
        break;
        
      default:
        result = { status: 'error', message: 'Action tidak dikenal: ' + action };
    }
    
    return createJsonResponse(result);
  } catch (error) {
    return createJsonResponse({ status: 'error', message: error.toString() });
  }
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let payload = {};
    
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (err) {
        payload = e.parameter;
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    }
    
    const action = payload.action || 'ping';
    let result = {};
    
    switch (action) {
      case 'addProduct':
        result = handleAddProduct(ss, payload.product || payload);
        break;
        
      case 'updateProduct':
        result = handleUpdateProduct(ss, payload.product || payload);
        break;
        
      case 'deleteProduct':
        result = handleDeleteProduct(ss, payload.productId || payload.id);
        break;
        
      case 'addTransaction':
        result = handleAddTransaction(ss, payload.transaction || payload);
        break;
        
      case 'saveSettings':
        result = handleSaveSettings(ss, payload.settings || payload);
        break;
        
      default:
        result = { status: 'error', message: 'Action POST tidak dikenal: ' + action };
    }
    
    return createJsonResponse(result);
  } catch (error) {
    return createJsonResponse({ status: 'error', message: error.toString() });
  }
}

// ====================================================================
// HELPER FUNCTIONS
// ====================================================================

function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheetDataAsJson(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];
  
  const headers = values[0];
  const rows = values.slice(1);
  
  return rows.map(row => {
    const item = {};
    headers.forEach((header, index) => {
      // Map standard column names to camelCase keys
      const key = cleanHeaderKey(header);
      item[key] = row[index];
    });
    return item;
  });
}

function cleanHeaderKey(header) {
  const map = {
    'ID Produk': 'id',
    'Nama Produk': 'title',
    'Kategori': 'category',
    'Harga Normal (Rp)': 'originalPrice',
    'Harga Diskon (Rp)': 'price',
    'Diskon (%)': 'discountPercent',
    'Lisensi': 'license',
    'Status': 'status',
    'Popular (Featured)': 'isPopular',
    'URL Gambar': 'image',
    'Deskripsi': 'description',
    'Link Download/File': 'fileUrl',
    'ID Transaksi': 'id',
    'Waktu & Tanggal': 'timestamp',
    'Nama Pelanggan': 'customerName',
    'Email / WA': 'customerContact',
    'Nominal (Rp)': 'amount',
    'Metode Bayar': 'paymentMethod',
    'Status Pembayaran': 'paymentStatus',
    'Catatan / Bukti': 'notes'
  };
  return map[header] || header.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
}

function getSettingsAsMap(ss) {
  const sheet = ss.getSheetByName('Settings');
  if (!sheet) return {};
  
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return {};
  
  const settings = {};
  for (let i = 1; i < values.length; i++) {
    const key = values[i][0];
    const val = values[i][1];
    if (key) settings[key] = val;
  }
  return settings;
}

function handleAddProduct(ss, prod) {
  const sheet = ss.getSheetByName('Products');
  if (!sheet) throw new Error('Sheet Products tidak ditemukan');
  
  const newId = prod.id || 'PROD-' + String(new Date().getTime()).slice(-6);
  const row = [
    newId,
    prod.title || 'Produk Baru',
    prod.category || 'General',
    Number(prod.originalPrice) || Number(prod.price) || 0,
    Number(prod.price) || 0,
    Number(prod.discountPercent) || 0,
    prod.license || 'Premium',
    prod.status || 'Aktif',
    prod.isPopular ? 'TRUE' : 'FALSE',
    prod.image || 'assets/patricia_west.jpg',
    prod.description || '',
    prod.fileUrl || ''
  ];
  
  sheet.appendRow(row);
  return { status: 'success', message: 'Produk berhasil ditambahkan', id: newId };
}

function handleUpdateProduct(ss, prod) {
  const sheet = ss.getSheetByName('Products');
  if (!sheet) throw new Error('Sheet Products tidak ditemukan');
  
  const values = sheet.getDataRange().getValues();
  const idToUpdate = prod.id;
  let rowIndex = -1;
  
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]) === String(idToUpdate)) {
      rowIndex = i + 1;
      break;
    }
  }
  
  if (rowIndex === -1) {
    return handleAddProduct(ss, prod);
  }
  
  const row = [
    idToUpdate,
    prod.title,
    prod.category,
    Number(prod.originalPrice),
    Number(prod.price),
    Number(prod.discountPercent),
    prod.license,
    prod.status || 'Aktif',
    prod.isPopular ? 'TRUE' : 'FALSE',
    prod.image,
    prod.description,
    prod.fileUrl
  ];
  
  sheet.getRange(rowIndex, 1, 1, row.length).setValues([row]);
  return { status: 'success', message: 'Produk berhasil diperbarui' };
}

function handleDeleteProduct(ss, productId) {
  const sheet = ss.getSheetByName('Products');
  if (!sheet) throw new Error('Sheet Products tidak ditemukan');
  
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]) === String(productId)) {
      sheet.deleteRow(i + 1);
      return { status: 'success', message: 'Produk berhasil dihapus' };
    }
  }
  return { status: 'error', message: 'Produk tidak ditemukan' };
}

function handleAddTransaction(ss, trx) {
  const sheet = ss.getSheetByName('Transactions');
  if (!sheet) throw new Error('Sheet Transactions tidak ditemukan');
  
  const newId = trx.id || 'TRX-' + Utilities.formatDate(new Date(), 'GMT+7', 'yyyyMMdd-HHmmss');
  const timestamp = trx.timestamp || Utilities.formatDate(new Date(), 'GMT+7', 'dd/MM/yyyy HH:mm:ss');
  
  const row = [
    newId,
    timestamp,
    trx.customerName || 'Pelanggan Guest',
    trx.customerContact || '-',
    trx.productId || '-',
    trx.productTitle || trx.title || '-',
    Number(trx.amount) || 0,
    trx.paymentMethod || 'QRIS',
    trx.paymentStatus || 'Berhasil',
    trx.notes || 'Transaksi Web'
  ];
  
  sheet.appendRow(row);

  // Kirim email notifikasi & invoice otomatis ke customer jika kontak berupa email
  let emailSent = false;
  const targetEmail = trx.customerEmail || (trx.customerContact && trx.customerContact.indexOf('@') !== -1 ? trx.customerContact.trim() : '');
  if (targetEmail) {
    try {
      sendInvoiceEmail(targetEmail, trx, newId, timestamp);
      emailSent = true;
    } catch (mailErr) {
      Logger.log('Gagal mengirim email invoice: ' + mailErr.toString());
    }
  }

  return { status: 'success', message: 'Transaksi berhasil dicatat' + (emailSent ? ' & invoice terkirim ke email!' : ''), id: newId, emailSent: emailSent };
}

function sendInvoiceEmail(targetEmail, trx, invoiceId, timestamp) {
  const amountFormatted = 'Rp ' + Number(trx.amount || 0).toLocaleString('id-ID');
  const productTitle = trx.productTitle || trx.title || 'Aset Digital Alifio';
  const downloadUrl = trx.downloadUrl || trx.fileUrl || 'https://drive.google.com';
  const customerName = trx.customerName || 'Pelanggan Alifio';
  
  const subject = '🧾 [INVOICE & AKSES PRODUK] Pembelian ' + productTitle + ' (' + invoiceId + ')';
  
  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">ALIFIO</h1>
        <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Toko Aset Desain & Grafis Digital Resmi</p>
      </div>

      <!-- Content -->
      <div style="padding: 28px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #E2E8F0; padding-bottom: 18px; margin-bottom: 20px;">
          <div>
            <span style="font-size: 12px; color: #64748B; text-transform: uppercase; font-weight: 700;">Nomor Invoice</span>
            <div style="font-size: 16px; font-weight: 800; color: #0F172A; font-family: monospace;">${invoiceId}</div>
          </div>
          <div style="text-align: right;">
            <span style="display: inline-block; background-color: #DCFCE7; color: #16A34A; font-weight: 800; font-size: 11px; padding: 4px 10px; border-radius: 20px;">LUNAS (AI VERIFIED)</span>
          </div>
        </div>

        <p style="font-size: 14px; color: #334155; line-height: 1.6; margin-top: 0;">
          Halo <strong>${customerName}</strong>,<br>
          Terima kasih atas pembayaran Anda! Pembayaran Anda telah <strong>berhasil diverifikasi</strong>. Berikut rincian faktur pembelian dan link download file aset Anda:
        </p>

        <!-- Table -->
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px;">
          <thead>
            <tr style="background-color: #F8FAFC; border-bottom: 1px solid #CBD5E1;">
              <th style="text-align: left; padding: 10px; color: #475569;">Item Produk</th>
              <th style="text-align: right; padding: 10px; color: #475569;">Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 12px 10px; font-weight: 600; color: #1E293B;">
                ${productTitle}<br>
                <span style="font-size: 11px; color: #64748B; font-weight: normal;">Metode: ${trx.paymentMethod || 'QRIS'} &bull; Status: Lunas</span>
              </td>
              <td style="padding: 12px 10px; text-align: right; font-weight: 700; color: #0F172A;">
                ${amountFormatted}
              </td>
            </tr>
            <tr style="background-color: #F8FAFC;">
              <td style="padding: 12px 10px; font-weight: 800; color: #0F172A;">TOTAL PEMBAYARAN</td>
              <td style="padding: 12px 10px; text-align: right; font-weight: 800; font-size: 16px; color: #2563EB;">
                ${amountFormatted}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Download CTA -->
        <div style="background-color: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 20px; text-align: center; margin: 24px 0;">
          <h3 style="margin: 0 0 8px; color: #1E3A8A; font-size: 15px;">Aset Digital Siap Digunakan</h3>
          <p style="margin: 0 0 16px; font-size: 12px; color: #3B82F6;">Klik tombol di bawah ini untuk mengakses dan mengunduh file aset original Anda:</p>
          <a href="${downloadUrl}" target="_blank" style="display: inline-block; background-color: #2563EB; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 6px; box-shadow: 0 2px 6px rgba(37,99,235,0.3);">
            📥 Unduh File Aset Sekarang
          </a>
        </div>

        <p style="font-size: 12px; color: #94A3B8; text-align: center; margin: 24px 0 0;">
          Waktu Transaksi: ${timestamp} &bull; Jika mengalami kendala unduhan, hubungi Admin Alifio.
        </p>
      </div>

      <!-- Footer -->
      <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px; text-align: center; font-size: 11px; color: #94A3B8;">
        &copy; ${new Date().getFullYear()} Alifio Digital Asset Store. Hak Cipta Dilindungi.
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: targetEmail,
    subject: subject,
    htmlBody: htmlBody
  });
}

function handleSaveSettings(ss, settingsMap) {
  const sheet = ss.getSheetByName('Settings');
  if (!sheet) throw new Error('Sheet Settings tidak ditemukan');
  
  const values = sheet.getDataRange().getValues();
  const keys = Object.keys(settingsMap);
  
  keys.forEach(k => {
    let found = false;
    for (let i = 1; i < values.length; i++) {
      if (values[i][0] === k) {
        sheet.getRange(i + 1, 2).setValue(settingsMap[k]);
        found = true;
        break;
      }
    }
    if (!found) {
      sheet.appendRow([k, settingsMap[k], 'Ditambahkan via Web']);
    }
  });
  
  return { status: 'success', message: 'Pengaturan berhasil disimpan' };
}
