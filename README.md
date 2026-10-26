# Alifio — Digital Asset Marketplace & Seller Monitoring App

Aplikasi web modern untuk menjual produk barang digital bernama **Alifio**, dirancang dengan visual yang presisi mengikuti gambar referensi: latar belakang langit biru alami berawan (*pure blue sky & clouds*), ramah pengguna di ponsel (**mobile-friendly**), dan dilengkapi dashboard monitoring di laptop untuk memantau barang dagangan serta mutasi hasil penjualan secara real-time.

Aplikasi ini juga dilengkapi skrip backend **Google Apps Script** (`code.gs` dan `setup.gs`) untuk dihubungkan langsung ke **Google Spreadsheet**.

---

## 🚀 Fitur Baru & Pembaruan Terkini (Sesuai Permintaan)

1. **Upload QRIS Baru Langsung dari HP / Laptop**:
   - Di menu **Settings**, tersedia dropzone dan tombol **"Pilih Foto QRIS dari HP / Komputer"** (`input type="file"`).
   - Pengguna/Seller dapat memilih file gambar barcode QRIS langsung dari galeri atau penyimpanan lokal.
   - Gambar otomatis dikonversi dan disimpan ke memori aplikasi (`localStorage`) serta langsung terhubung ke popup pembayaran saat pembeli checkout!
   - Tersedia tombol *Reset ke Default* jika ingin mengembalikan foto QRIS semula.

2. **Background Hero Sesuai Gambar Referensi (Langit Biru & Awan Alami)**:
   - Bagian atas Hero menggunakan latar belakang langit biru cerah dengan gumpalan awan putih lembut (`assets/hero_sky.jpg`).
   - Teks judul utama berwana **putih bersih (*pure white*)** dengan bayangan lembut (*soft text shadow*) untuk kontras yang sempurna:
     `"Find [badge HD, search, star] Your Design Inspiration"`.
   - Bilah pencarian putih dengan tombol biru *"Book a service"*.
   - Kartu kanan *"See how it's done"* dengan tombol kamera/video dan panah diagonal `↗`.
   - Transisi ke bagian *Popular items* di bawahnya berbentuk permukaan melengkung putih (*curved white surface*) dengan radius 40px yang elegan.

3. **Logo Toko Bisa Diubah Bebas**:
   - Di menu **Settings**, Seller/Admin dapat:
     - **Upload Logo Baru**: Mengunggah file logo kustom (`.png`, `.svg`, `.jpg`).
     - **Ubah Teks Nama Brand**: Menyesuaikan nama toko dari "Alifio" menjadi nama brand lain yang diinginkan.
   - Logo di Navbar atas (desktop & mobile) dan di Footer otomatis berubah seketika.

4. **"Lihat Cara Kerja" Memunculkan Video Interaktif**:
   - Mengklik kartu *"See how it's done"* di bagian hero kini membuka **Video Walkthrough Modal**.
   - Menyajikan video interaktif dengan animasi pergantian adegan langkah 1 (Temukan Aset), langkah 2 (Bayar QRIS Instan), dan langkah 3 (Unduh & Mulai Berkreasi) lengkap dengan tombol *Putar/Jeda*, *Ulang*, dan navigasi adegan.
   - Tersedia opsi di Settings bagi Seller yang ingin memasukkan URL video kustom sendiri (seperti tautan YouTube Embed atau link MP4).

5. **Halaman Khusus Cari Produk & Filter Lengkap ("Lihat Semua Desain")**:
   - Mengklik tombol **"View all Design"** di section Popular Items atau mengklik menu **"Search"** di navbar akan membuka **Halaman Khusus Cari Produk**:
     - Kolom pencarian responsif dengan pencarian instan nama, kategori, dan deskripsi.
     - *Active Filter Chips* yang bisa dihapus satu per satu dengan tanda silang `×`.
     - Sidebar filter multi-kategori (*All Design, 3D Icons, 3D Mockup, Graphic/Visual, Mockup, Templates, Fonts*).
     - Filter lisensi (*Semua, Premium, Gratis*).
     - Filter cepat: *Hanya Promo Diskon* dan *Hanya Item Populer*.
     - Pengurutan (*Sort by: Terpopuler, Harga Rendah ke Tinggi, Harga Tinggi ke Rendah, Terbaru*).

6. **Section Cara Kerja Alifio (3 Langkah) Gambarnya Bisa Diubah**:
   - Di menu **Settings**, terdapat bagian khusus **"Kustomisasi Gambar & Teks Section Cara Kerja (3 Langkah)"**:
     - **Langkah 01 (Discover)**: Upload gambar custom, ubah judul & deskripsi.
     - **Langkah 02 (Purchase)**: Upload gambar custom, ubah judul & deskripsi.
     - **Langkah 03 (Download)**: Upload gambar custom, ubah judul & deskripsi.
   - Tampilan 3 kartu di section *"How It Works"* pada halaman utama langsung diperbarui sesuai gambar dan teks yang diunggah.

---

## 🛠️ Cara Menjalankan Aplikasi

1. Buka file [`index.html`](file:///c:/Users/Admin/.gemini/antigravity-ide/Project/Alifio/index.html) langsung menggunakan browser favorit Anda (Google Chrome, Microsoft Edge, dll).
2. Untuk mencoba fitur Seller:
   - Klik tombol **Login / Sign Up** di kanan atas > pilih tombol cepat **"Sebagai Seller/Admin"**.
   - Buka menu **Settings** untuk mengunggah foto QRIS baru, mengubah logo, atau mengganti gambar section cara kerja!
3. Untuk mencoba halaman pencarian:
   - Klik tombol **"View all Design"** di bawah hero atau klik menu **Search** di navigasi atas.

---

## 📊 Integrasi Google Spreadsheet (`setup.gs` & `code.gs`)

1. Buka spreadsheet baru di [sheets.new](https://sheets.new).
2. Di menu atas, klik **Extensions (Ekstensi)** > **Apps Script**.
3. Salin isi [`setup.gs`](file:///c:/Users/Admin/.gemini/antigravity-ide/Project/Alifio/setup.gs) dan [`code.gs`](file:///c:/Users/Admin/.gemini/antigravity-ide/Project/Alifio/code.gs).
4. Jalankan fungsi `setupAlifioSpreadsheet` untuk membuat 4 sheet otomatis.
5. Deploy sebagai **Web App** (Who has access: **Anyone**), salin Web App URL-nya ke menu **Settings** Alifio.
