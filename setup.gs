/**
 * ====================================================================
 * ALIFIO - Google Spreadsheet Setup Script (setup.gs)
 * ====================================================================
 * Petunjuk Penggunaan:
 * 1. Buka Google Spreadsheet baru (https://sheets.new)
 * 2. Klik menu "Extensions" (Ekstensi) > "Apps Script"
 * 3. Hapus kode default, paste file ini (setup.gs) dan file code.gs
 * 4. Pilih fungsi "setupAlifioSpreadsheet" di dropdown toolbar atas
 * 5. Klik tombol "Run" (Jalankan) dan berikan izin otorisasi
 * 6. Spreadsheet akan otomatis terisi sheets, header cantik, dan data awal!
 * ====================================================================
 */

function setupAlifioSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Setup Sheet: Products (Katalog Barang)
  setupProductsSheet(ss);
  
  // 2. Setup Sheet: Transactions (Mutasi Penjualan)
  setupTransactionsSheet(ss);
  
  // 3. Setup Sheet: Settings (Pengaturan QRIS & Toko)
  setupSettingsSheet(ss);
  
  // 4. Setup Sheet: Users (Data Pengguna / Pelanggan)
  setupUsersSheet(ss);
  
  // Hapus Sheet1 default jika ada
  const defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('Lembar1');
  if (defaultSheet && ss.getSheets().length > 1) {
    try { ss.deleteSheet(defaultSheet); } catch (e) {}
  }
  
  SpreadsheetApp.getUi().alert('🎉 Berhasil!', 'Spreadsheet Alifio berhasil diinisialisasi dengan tabel Products, Transactions, Settings, dan Users!', SpreadsheetApp.getUi().ButtonSet.OK);
}

function setupProductsSheet(ss) {
  let sheet = ss.getSheetByName('Products');
  if (!sheet) {
    sheet = ss.insertSheet('Products');
  } else {
    sheet.clear();
  }
  
  const headers = [
    'ID Produk', 'Nama Produk', 'Kategori', 'Harga Normal (Rp)', 
    'Harga Diskon (Rp)', 'Diskon (%)', 'Lisensi', 'Status', 
    'Popular (Featured)', 'URL Gambar', 'Deskripsi', 'Link Download/File'
  ];
  
  sheet.appendRow(headers);
  
  // Format Header
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#1E293B');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  headerRange.setFontSize(10);
  
  // Sample Data
  const sampleProducts = [
    [
      'PROD-001', 'Patricia West - 3D Character Suite', '3D Icons', 25000, 
      10000, 60, 'Premium', 'Aktif', 'TRUE', 
      'assets/patricia_west.jpg', 
      'Koleksi aset karakter profesional 3D berkualitas tinggi cocok untuk presentasi, web dashboard, dan landing page.',
      'https://drive.google.com/drive/folders/alifio-sample-01'
    ],
    [
      'PROD-002', 'Modern SaaS UI Kit & Dashboard', 'Templates', 50000, 
      35000, 30, 'Premium', 'Aktif', 'TRUE', 
      'assets/popular_2.jpg', 
      'Komponen dashboard web & mobile siap pakai dengan sistem warna pastel, widget glassmorphic, dan grafik interaktif.',
      'https://drive.google.com/drive/folders/alifio-sample-02'
    ],
    [
      'PROD-003', 'Glossy 3D Essential Icons Pack', '3D Icons', 15000, 
      10000, 33, 'Free', 'Aktif', 'TRUE', 
      'assets/popular_1.jpg', 
      '24+ ikon 3D glossy dengan pencahayaan studio lembut untuk kebutuhan UI/UX designer.',
      'https://drive.google.com/drive/folders/alifio-sample-03'
    ],
    [
      'PROD-004', 'Corporate Identity Mockup Pack', 'Mockup', 40000, 
      20000, 50, 'Premium', 'Aktif', 'FALSE', 
      'assets/patricia_west.jpg', 
      'Mockup branding stationary & gadget resolusi tinggi 4K.',
      'https://drive.google.com/drive/folders/alifio-sample-04'
    ],
    [
      'PROD-005', 'Creative Visual Branding Elements', 'Graphic/Visual', 30000, 
      15000, 50, 'Free', 'Aktif', 'FALSE', 
      'assets/patricia_west.jpg', 
      'Elemen visual abstrak gradien untuk ilustrasi banner dan social media.',
      'https://drive.google.com/drive/folders/alifio-sample-05'
    ],
    [
      'PROD-006', 'Modern Typography Display Fonts', 'Fonts', 35000, 
      25000, 28, 'Premium', 'Aktif', 'FALSE', 
      'assets/patricia_west.jpg', 
      'Font display sans-serif modern dengan dukungan multilingual komersial.',
      'https://drive.google.com/drive/folders/alifio-sample-06'
    ]
  ];
  
  sheet.getRange(2, 1, sampleProducts.length, headers.length).setValues(sampleProducts);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
  sheet.setColumnWidth(11, 280); // Deskripsi
}

function setupTransactionsSheet(ss) {
  let sheet = ss.getSheetByName('Transactions');
  if (!sheet) {
    sheet = ss.insertSheet('Transactions');
  } else {
    sheet.clear();
  }
  
  const headers = [
    'ID Transaksi', 'Waktu & Tanggal', 'Nama Pelanggan', 'Email / WA', 
    'ID Produk', 'Nama Produk', 'Nominal (Rp)', 'Metode Bayar', 
    'Status Pembayaran', 'Catatan / Bukti'
  ];
  
  sheet.appendRow(headers);
  
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#0F766E'); // Emerald Dark
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  headerRange.setFontSize(10);
  
  // Sample Transactions (Mutasi)
  const now = new Date();
  const sampleTransactions = [
    [
      'TRX-20261024-001', new Date(now.getTime() - 3600000 * 2).toLocaleString('id-ID'), 
      'Budi Santoso', '081234567890', 'PROD-001', 'Patricia West - 3D Character Suite', 
      10000, 'QRIS', 'Berhasil', 'Auto-Verified'
    ],
    [
      'TRX-20261024-002', new Date(now.getTime() - 3600000 * 5).toLocaleString('id-ID'), 
      'Siti Rahma', 'siti@example.com', 'PROD-002', 'Modern SaaS UI Kit & Dashboard', 
      35000, 'QRIS', 'Berhasil', 'Auto-Verified'
    ],
    [
      'TRX-20261024-003', new Date(now.getTime() - 3600000 * 12).toLocaleString('id-ID'), 
      'Andi Pratama', '085712345678', 'PROD-003', 'Glossy 3D Essential Icons Pack', 
      10000, 'WhatsApp', 'Berhasil', 'Manual Chat'
    ],
    [
      'TRX-20261023-004', new Date(now.getTime() - 3600000 * 26).toLocaleString('id-ID'), 
      'Dewi Lestari', 'dewi.design@gmail.com', 'PROD-001', 'Patricia West - 3D Character Suite', 
      10000, 'Tokopedia', 'Berhasil', 'Order ID #TKP-8821'
    ],
    [
      'TRX-20261022-005', new Date(now.getTime() - 3600000 * 48).toLocaleString('id-ID'), 
      'Farhan Malik', '08991234567', 'PROD-004', 'Corporate Identity Mockup Pack', 
      20000, 'Bank BCA', 'Berhasil', 'Transfer Ref #66291'
    ]
  ];
  
  sheet.getRange(2, 1, sampleTransactions.length, headers.length).setValues(sampleTransactions);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function setupSettingsSheet(ss) {
  let sheet = ss.getSheetByName('Settings');
  if (!sheet) {
    sheet = ss.insertSheet('Settings');
  } else {
    sheet.clear();
  }
  
  const headers = ['Kunci Pengaturan', 'Nilai (Value)', 'Keterangan'];
  sheet.appendRow(headers);
  
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#3B82F6'); // Blue
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  const settingsData = [
    ['store_name', 'Alifio Digital Asset Store', 'Nama Toko Online'],
    ['store_tagline', 'Everything your design needs', 'Slogan Toko'],
    ['qris_image_url', 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304ABCD', 'URL Foto / Gambar QRIS'],
    ['qris_merchant_name', 'ALIFIO OFFICIAL', 'Nama Merchant QRIS'],
    ['whatsapp_number', '6281234567890', 'Nomor WhatsApp untuk pesanan alternatif'],
    ['tokopedia_url', 'https://tokopedia.com/alifio-official', 'Link Toko Tokopedia'],
    ['shopee_url', 'https://shopee.co.id/alifio-store', 'Link Toko Shopee'],
    ['bank_account_info', 'BCA: 8830123456 a.n ALIFIO DIGITAL', 'Informasi Transfer Bank'],
    ['featured_testimonial_quote', 'Finally, a simple way to find help for get good asset.', 'Kutipan Testimonial di Bagian Popular'],
    ['featured_testimonial_author', 'Martin, Bogor, Indonesia', 'Penulis Testimonial']
  ];
  
  sheet.getRange(2, 1, settingsData.length, headers.length).setValues(settingsData);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
  sheet.setColumnWidth(2, 350);
}

function setupUsersSheet(ss) {
  let sheet = ss.getSheetByName('Users');
  if (!sheet) {
    sheet = ss.insertSheet('Users');
  } else {
    sheet.clear();
  }
  
  const headers = ['User ID', 'Nama Lengkap', 'Email', 'Role', 'Status', 'Tanggal Daftar'];
  sheet.appendRow(headers);
  
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#6366F1'); // Indigo
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  const sampleUsers = [
    ['USR-001', 'Admin Alifio', 'admin@alifio.com', 'seller', 'Aktif', new Date().toLocaleDateString('id-ID')],
    ['USR-002', 'Budi Santoso', 'budi@example.com', 'customer', 'Aktif', new Date().toLocaleDateString('id-ID')],
    ['USR-003', 'Patricia West', 'patricia@designer.com', 'seller', 'Aktif', new Date().toLocaleDateString('id-ID')]
  ];
  
  sheet.getRange(2, 1, sampleUsers.length, headers.length).setValues(sampleUsers);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}
