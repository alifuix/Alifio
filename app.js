/**
 * ====================================================================
 * ALIFIO - Core Application Engine & State Controller (app.js)
 * ====================================================================
 */

// --- INITIAL STATE & DATA ---
const DEFAULT_PRODUCTS = [
  {
    id: 'PROD-001',
    title: 'Patricia West - 3D Character Suite',
    category: '3D Icons',
    originalPrice: 25000,
    price: 10000,
    discountPercent: 60,
    license: 'Premium',
    status: 'Aktif',
    isPopular: true,
    image: 'assets/patricia_west.jpg',
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304PROD001',
    author: 'Patricia West',
    description: 'Koleksi karakter 3D berkualitas tinggi yang dapat disesuaikan untuk kebutuhan mockup presentasi, avatar web, dan aset visual marketing.',
    fileTypes: 'BLEND, OBJ, PNG, FIG',
    downloads: 1420,
    rating: 4.9,
    fileUrl: 'https://drive.google.com/drive/folders/alifio-sample-01'
  },
  {
    id: 'PROD-002',
    title: 'Modern SaaS UI Kit & Dashboard',
    category: 'Templates',
    originalPrice: 50000,
    price: 35000,
    discountPercent: 30,
    license: 'Premium',
    status: 'Aktif',
    isPopular: true,
    image: 'assets/popular_2.jpg',
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304PROD002',
    author: 'Alifio Studio',
    description: 'Komponen UI kit dashboard modern dengan gaya pastel neumorphism halus, lengkap dengan charts responsif, widget analitik, dan token desain terstruktur.',
    fileTypes: 'FIGMA, HTML/CSS',
    downloads: 980,
    rating: 4.8,
    fileUrl: 'https://drive.google.com/drive/folders/alifio-sample-02'
  },
  {
    id: 'PROD-003',
    title: 'Glossy 3D Essential Icons Pack',
    category: '3D Icons',
    originalPrice: 15000,
    price: 10000,
    discountPercent: 33,
    license: 'Free',
    status: 'Aktif',
    isPopular: true,
    image: 'assets/popular_1.jpg',
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304PROD003',
    author: 'Studio Craft',
    description: '24+ ikon 3D render berkualitas tinggi dengan studio lighting lembut, sudut isometrik yang konsisten untuk aplikasi mobile & web.',
    fileTypes: 'PNG (3000x3000), BLEND',
    downloads: 2450,
    rating: 5.0,
    fileUrl: 'https://drive.google.com/drive/folders/alifio-sample-03'
  },
  {
    id: 'PROD-004',
    title: 'Corporate Stationery Branding Mockup',
    category: 'Mockup',
    originalPrice: 40000,
    price: 20000,
    discountPercent: 50,
    license: 'Premium',
    status: 'Aktif',
    isPopular: false,
    image: 'assets/patricia_west.jpg',
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304PROD004',
    author: 'Studio Craft',
    description: 'Set mockup kartu nama, amplop, letterhead, dan gadget resolusi 4K dengan smart object Photoshop yang mudah diedit.',
    fileTypes: 'PSD, FIG',
    downloads: 630,
    rating: 4.7,
    fileUrl: 'https://drive.google.com/drive/folders/alifio-sample-04'
  },
  {
    id: 'PROD-005',
    title: 'Creative Visual 3D Branding Elements',
    category: 'Graphic/Visual',
    originalPrice: 30000,
    price: 15000,
    discountPercent: 50,
    license: 'Free',
    status: 'Aktif',
    isPopular: false,
    image: 'assets/patricia_west.jpg',
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304PROD005',
    author: 'Creative Lab',
    description: 'Elemen grafis visual 3D gradasi warna cerah untuk background hero website, thumbnail konten, dan banner promosi.',
    fileTypes: 'PNG, SVG, AI',
    downloads: 1120,
    rating: 4.8,
    fileUrl: 'https://drive.google.com/drive/folders/alifio-sample-05'
  },
  {
    id: 'PROD-006',
    title: 'Modern Typography Display Fonts',
    category: 'Fonts',
    originalPrice: 35000,
    price: 25000,
    discountPercent: 28,
    license: 'Premium',
    status: 'Aktif',
    isPopular: false,
    image: 'assets/patricia_west.jpg',
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304PROD006',
    author: 'TypeFoundry',
    description: 'Font display bernuansa modern minimalis dengan berbagai ketebalan (Light to Black), mencakup simbol mata uang dan glyph internasional.',
    fileTypes: 'OTF, TTF, WOFF2',
    downloads: 870,
    rating: 4.9,
    fileUrl: 'https://drive.google.com/drive/folders/alifio-sample-06'
  }
];

const DEFAULT_TRANSACTIONS = [
  {
    id: 'TRX-20261024-001',
    timestamp: '24/10/2026 08:30:15',
    customerName: 'Budi Santoso',
    customerContact: '081234567890',
    productId: 'PROD-001',
    productTitle: 'Patricia West - 3D Character Suite',
    amount: 10000,
    paymentMethod: 'QRIS',
    paymentStatus: 'Berhasil',
    notes: 'Auto-Verified'
  },
  {
    id: 'TRX-20261024-002',
    timestamp: '24/10/2026 07:15:40',
    customerName: 'Siti Rahma',
    customerContact: 'siti@example.com',
    productId: 'PROD-002',
    productTitle: 'Modern SaaS UI Kit & Dashboard',
    amount: 35000,
    paymentMethod: 'QRIS',
    paymentStatus: 'Berhasil',
    notes: 'Auto-Verified'
  },
  {
    id: 'TRX-20261023-003',
    timestamp: '23/10/2026 21:05:12',
    customerName: 'Andi Pratama',
    customerContact: '085712345678',
    productId: 'PROD-003',
    productTitle: 'Glossy 3D Essential Icons Pack',
    amount: 10000,
    paymentMethod: 'WhatsApp',
    paymentStatus: 'Berhasil',
    notes: 'Manual Order'
  },
  {
    id: 'TRX-20261023-004',
    timestamp: '23/10/2026 14:45:00',
    customerName: 'Dewi Lestari',
    customerContact: 'dewi.design@gmail.com',
    productId: 'PROD-001',
    productTitle: 'Patricia West - 3D Character Suite',
    amount: 10000,
    paymentMethod: 'Tokopedia',
    paymentStatus: 'Berhasil',
    notes: 'Order #TKP-8821'
  },
  {
    id: 'TRX-20261022-005',
    timestamp: '22/10/2026 11:20:30',
    customerName: 'Farhan Malik',
    customerContact: '08991234567',
    productId: 'PROD-004',
    productTitle: 'Corporate Stationery Branding Mockup',
    amount: 20000,
    paymentMethod: 'Bank BCA',
    paymentStatus: 'Berhasil',
    notes: 'Ref #66291'
  }
];

const DEFAULT_SETTINGS = {
  storeName: 'Alifio Digital Asset Store',
  tagline: 'Everything your design needs',
  logoImageUrl: 'assets/logo.svg',
  logoText: 'Alifio',
  qrisImageUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021226670016ID.CO.QRIS.WWW011893600523000000000002150000000000000005204581253033605802ID5912ALIFIO+STORE6007JAKARTA61051234062070703A016304ABCD',
  qrisMerchantName: 'ALIFIO OFFICIAL',
  testimonialQuote: 'Finally, a simple way to find help for get good asset.',
  testimonialAuthor: 'Martin, Bogor, Indonesia',
  popularBadge1: '3D Icons',
  popularBadge2: 'UI Assets',
  spreadsheetUrl: '',
  // Dynamic platforms (replaces static whatsapp/tokopedia/shopee/bank)
  platforms: [
    { id: 'p1', name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', color: '#16A34A', value: '6281234567890', type: 'whatsapp' },
    { id: 'p2', name: 'Tokopedia', icon: 'fa-solid fa-bag-shopping', color: '#059669', value: 'https://tokopedia.com/alifio-official', type: 'url' },
    { id: 'p3', name: 'Shopee', icon: 'fa-solid fa-basket-shopping', color: '#EA580C', value: 'https://shopee.co.id/alifio-store', type: 'url' },
    { id: 'p4', name: 'Transfer Bank', icon: 'fa-solid fa-building-columns', color: '#2563EB', value: 'BCA: 8830123456 a.n ALIFIO DIGITAL', type: 'bank' }
  ],
  // Section Cara Kerja (Customizable 3 Steps)
  step1: {
    title: 'Discover your next asset',
    desc: 'Find high-quality digital assets tailored to what your project needs.',
    badge: 'Best Quality',
    image: 'assets/steps.jpg',
    crop: 'left center',
    mediaType: 'image', // 'image' or 'video'
    videoSrc: ''
  },
  step2: {
    title: 'Purchase in a Few Clicks',
    desc: 'Choose your favorite products, pay easily via QRIS, and get access to the digital products you\'ve purchased.',
    badge: 'QRIS Instant',
    image: 'assets/steps.jpg',
    crop: 'center',
    mediaType: 'image',
    videoSrc: ''
  },
  step3: {
    title: 'Download & Start Creating',
    desc: 'Download the available files and turn your ideas into reality.',
    badge: '100% Quality Guaranteed',
    image: 'assets/steps.jpg',
    crop: 'right center',
    mediaType: 'image',
    videoSrc: ''
  },
  // Video Walkthrough (hero widget)
  videoUrl: '',
  videoTitle: 'Cara Kerja Alifio — Panduan Lengkap',
  // Seller approval: list of approved emails
  approvedSellerEmails: ['admin@alifio.com'],
  // Seller requests: list of { email, name, requestedAt }
  sellerRequests: []
};

// --- BILINGUAL I18N DICTIONARY ---
const I18N = {
  id: {
    nav_home: 'Home',
    nav_search: 'Cari',
    nav_dashboard: 'Dashboard',
    nav_analytics: 'Analitik',
    nav_settings: 'Pengaturan',
    nav_login: 'Masuk / Daftar',
    hero_title_prefix: 'Temukan',
    hero_title_suffix: 'Inspirasi Desainmu',
    hero_search_placeholder: 'Layanan atau aset apa yang kamu butuhkan?',
    hero_btn_search: 'Cari Produk',
    hero_widget_title: "Lihat cara kerjanya",
    featured_badge: 'DISCOVER',
    featured_title: 'Item Populer',
    featured_subtitle: 'Semua yang dibutuhkan desainmu.',
    btn_view_all: 'Lihat Semua Desain',
    filter_title: 'Filter',
    filter_account_subject: 'Kategori Produk',
    filter_reset: 'Reset',
    filter_license: 'Lisensi',
    filter_all: 'Semua Desain',
    filter_premium: 'Premium',
    filter_free: 'Gratis',
    catalog_title: 'Semua Produk',
    catalog_sort_popular: 'Terpopuler',
    catalog_sort_low: 'Harga Terendah',
    catalog_sort_high: 'Harga Tertinggi',
    catalog_sort_newest: 'Terbaru',
    card_starting_price: 'Harga Mulai',
    card_buy_btn: 'Pilih Ini',
    steps_badge: 'LANGKAH MUDAH',
    steps_title: 'Cara Kerja Alifio',
    steps_subtitle: 'Langkah praktis dari kebutuhan desain hingga solusi terpercaya.',
    footer_tagline: 'Platform jual beli aset digital modern, mudah digunakan di HP dan dipantau di laptop.',
    dashboard_title: 'Monitoring Barang Dagangan',
    dashboard_subtitle: 'Kelola produk, atur diskon, dan pantau performa tokomu.',
    btn_add_product: '+ Tambah Produk Baru',
    stat_total_sales: 'Total Omset',
    stat_total_orders: 'Pesanan Berhasil',
    stat_active_products: 'Produk Aktif',
    stat_avg_order: 'Rata-rata Order',
    analytics_title: 'Mutasi Penjualan & Keuangan',
    analytics_subtitle: 'Cek riwayat transaksi mutasi masuk secara real-time dan analisis grafik omset.',
    btn_export_csv: 'Export Mutasi CSV',
    btn_sync_sheet: 'Sinkron Spreadsheet',
    modal_login_title: 'Masuk ke Alifio',
    modal_signup_title: 'Buat Akun Baru',
    tab_login: 'Masuk',
    tab_signup: 'Daftar',
    tab_account: 'Akun Saya',
    role_customer: 'Customer',
    role_seller: 'Seller (Penjual)',
    btn_become_seller: 'Buka Toko / Jadi Seller',
    btn_switch_customer: 'Kembali ke Mode Customer',
    btn_logout: 'Keluar (Logout)',
    qris_title: 'Pembayaran QRIS Instan',
    qris_scan_hint: 'Scan menggunakan BCA Mobile, GoPay, OVO, DANA, ShopeePay, atau Livin',
    btn_confirm_paid: 'Saya Sudah Membayar',
    alt_payment_title: 'Atau Bayar Lewat Platform Lain:'
  },
  en: {
    nav_home: 'Home',
    nav_search: 'Search',
    nav_dashboard: 'Dashboard',
    nav_analytics: 'Analytics',
    nav_settings: 'Settings',
    nav_login: 'Login / Sign Up',
    hero_title_prefix: 'Find',
    hero_title_suffix: 'Your Design Inspiration',
    hero_search_placeholder: 'What service do you need?',
    hero_btn_search: 'Book a service',
    hero_widget_title: "See how it's done",
    featured_badge: 'DISCOVER',
    featured_title: 'Popular items',
    featured_subtitle: 'Everything your design needs.',
    btn_view_all: 'View all Design',
    filter_title: 'Filters',
    filter_account_subject: 'Account subject',
    filter_reset: 'Reset',
    filter_license: 'License',
    filter_all: 'All Design',
    filter_premium: 'Premium',
    filter_free: 'Free',
    catalog_title: 'All Product',
    catalog_sort_popular: 'Popular',
    catalog_sort_low: 'Price: Low to High',
    catalog_sort_high: 'Price: High to Low',
    catalog_sort_newest: 'Newest',
    card_starting_price: 'Starting Price',
    card_buy_btn: 'Insert this',
    steps_badge: 'SIMPLE STEPS',
    steps_title: 'How It Works',
    steps_subtitle: 'A clean path from task to trusted help.',
    footer_tagline: 'Modern digital asset marketplace built to sell and monitor products seamlessly.',
    dashboard_title: 'Product & Sales Monitoring',
    dashboard_subtitle: 'Manage inventory, create discounts, and track performance.',
    btn_add_product: '+ Add New Product',
    stat_total_sales: 'Total Revenue',
    stat_total_orders: 'Successful Orders',
    stat_active_products: 'Active Products',
    stat_avg_order: 'Avg. Order Value',
    analytics_title: 'Sales Mutations & Analytics',
    analytics_subtitle: 'Real-time sales ledger tracking and revenue trend analysis.',
    btn_export_csv: 'Export CSV Mutation',
    btn_sync_sheet: 'Sync Spreadsheet',
    modal_login_title: 'Sign In to Alifio',
    modal_signup_title: 'Create an Account',
    tab_login: 'Sign In',
    tab_signup: 'Sign Up',
    tab_account: 'My Account',
    role_customer: 'Customer',
    role_seller: 'Seller',
    btn_become_seller: 'Open Store / Become Seller',
    btn_switch_customer: 'Switch to Customer View',
    btn_logout: 'Logout',
    qris_title: 'Instant QRIS Payment',
    qris_scan_hint: 'Scan with BCA Mobile, GoPay, OVO, DANA, ShopeePay, or Livin',
    btn_confirm_paid: 'I Have Paid',
    alt_payment_title: 'Or Pay via Other Platforms:'
  }
};

// --- APP STATE CONTROLLER ---
class AlifioApp {
  constructor() {
    this.currentLang = localStorage.getItem('alifio_lang') || 'id';

    // Default entry is ALWAYS Customer mode for visitors
    const storedUser = localStorage.getItem('alifio_user');
    let user = null;
    if (storedUser) {
      try {
        user = JSON.parse(storedUser);
      } catch (e) {
        user = null;
      }
    }

    // Check URL parameters: e.g. ?role=seller vs ?role=customer or default
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode') || urlParams.get('role');

    if (modeParam === 'customer') {
      user = {
        id: 'USR-CUST',
        name: 'Customer',
        email: 'customer@alifio.com',
        role: 'customer'
      };
      localStorage.setItem('alifio_user', JSON.stringify(user));
    } else if (modeParam === 'seller' && user && (user.email === 'admin@alifio.com' || (this.settings && this.settings.approvedSellerEmails && this.settings.approvedSellerEmails.includes(user.email)))) {
      user.role = 'seller';
      localStorage.setItem('alifio_user', JSON.stringify(user));
    } else if (!user) {
      // Default initial view: Always enters as Customer
      user = {
        id: 'USR-CUST',
        name: 'Customer',
        email: 'customer@alifio.com',
        role: 'customer'
      };
      localStorage.setItem('alifio_user', JSON.stringify(user));
    }

    this.currentUser = user;
    this.products = JSON.parse(localStorage.getItem('alifio_products')) || DEFAULT_PRODUCTS;
    // Ensure every product has its own unique QRIS barcode
    this.products.forEach(p => {
      if (!p.qrisImage) {
        p.qrisImage = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ALIFIO-PAY-PROD-${encodeURIComponent(p.id)}-${encodeURIComponent(p.title)}`;
      }
    });
    this.transactions = JSON.parse(localStorage.getItem('alifio_transactions')) || DEFAULT_TRANSACTIONS;
    
    // Merge default settings with stored settings
    const storedSettings = JSON.parse(localStorage.getItem('alifio_settings')) || {};
    this.settings = Object.assign({}, DEFAULT_SETTINGS, storedSettings);
    if (!this.settings.step1) this.settings.step1 = Object.assign({}, DEFAULT_SETTINGS.step1);
    if (!this.settings.step2) this.settings.step2 = Object.assign({}, DEFAULT_SETTINGS.step2);
    if (!this.settings.step3) this.settings.step3 = Object.assign({}, DEFAULT_SETTINGS.step3);
    if (!this.settings.platforms) this.settings.platforms = JSON.parse(JSON.stringify(DEFAULT_SETTINGS.platforms));
    if (!this.settings.approvedSellerEmails) this.settings.approvedSellerEmails = [...DEFAULT_SETTINGS.approvedSellerEmails];
    if (!this.settings.sellerRequests) this.settings.sellerRequests = [];
    // Step mediaType backfill
    ['step1','step2','step3'].forEach(k => { if (!this.settings[k].mediaType) this.settings[k].mediaType = 'image'; });
    // Current step media types state (for Settings UI toggles)
    this.stepMediaTypes = {
      1: this.settings.step1.mediaType || 'image',
      2: this.settings.step2.mediaType || 'image',
      3: this.settings.step3.mediaType || 'image'
    };

    this.bookmarks = JSON.parse(localStorage.getItem('alifio_bookmarks')) || [];
    
    // Filter State for Dedicated Search Page
    this.selectedCategories = ['All'];
    this.selectedLicense = 'all'; // 'all', 'Premium', 'Free'
    this.onlyDiscount = false;
    this.onlyPopular = false;
    this.sortBy = 'popular';
    this.searchQuery = '';
    this.activeView = 'home'; // 'home', 'search', 'dashboard', 'analytics', 'settings'
    this.pendingCheckoutProduct = null;
    
    // Video Player State
    this.videoCurrentScene = 0;
    this.videoIsPlaying = false;
    this.videoInterval = null;
    
    this.init();
  }

  init() {
    this.saveState();
    this.bindEvents();
    this.applyLanguage();
    this.updateUserUI();
    this.renderLogo();
    this.renderPopularItems();
    this.renderSteps();
    this.renderCatalog();
    this.renderDashboardTable();
    this.renderMutasiTable();
    this.updateStatsCards();
    this.renderAnalyticsChart();
    this.populateSettingsForm();
  }

  saveState() {
    localStorage.setItem('alifio_lang', this.currentLang);
    localStorage.setItem('alifio_products', JSON.stringify(this.products));
    localStorage.setItem('alifio_transactions', JSON.stringify(this.transactions));
    localStorage.setItem('alifio_settings', JSON.stringify(this.settings));
    localStorage.setItem('alifio_bookmarks', JSON.stringify(this.bookmarks));
    if (this.currentUser) {
      localStorage.setItem('alifio_user', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('alifio_user');
    }
  }

  t(key) {
    const dict = I18N[this.currentLang] || I18N.id;
    return dict[key] || key;
  }

  // --- LOGO CUSTOMIZATION RENDERER ---
  renderLogo() {
    const brandText = this.settings.logoText || 'Alifio';
    const logoImg = this.settings.logoImageUrl || 'assets/logo.svg';

    const brandLogoImg = document.getElementById('brandLogoImg');
    const brandLogoText = document.getElementById('brandLogoText');
    const footerLogoImg = document.getElementById('footerLogoImg');
    const footerLogoText = document.getElementById('footerLogoText');

    if (brandLogoImg) brandLogoImg.src = logoImg;
    if (brandLogoText) brandLogoText.textContent = brandText;
    if (footerLogoImg) footerLogoImg.src = logoImg;
    if (footerLogoText) footerLogoText.textContent = brandText;
  }

  // --- STEPS (HOW IT WORKS) DYNAMIC RENDERER ---
  renderSteps() {
    const container = document.getElementById('stepsCardsContainer');
    if (!container) return;

    const s1 = this.settings.step1 || DEFAULT_SETTINGS.step1;
    const s2 = this.settings.step2 || DEFAULT_SETTINGS.step2;
    const s3 = this.settings.step3 || DEFAULT_SETTINGS.step3;

    const renderMedia = (s, idx) => {
      if (s.mediaType === 'video' && s.videoSrc) {
        return `<video src="${s.videoSrc}" autoplay loop muted playsinline class="step-img" style="object-position:center; width:100%; height:100%; object-fit:cover;"></video>`;
      }
      return `<img src="${s.image}" alt="${s.title}" class="step-img" style="object-position: ${s.crop || 'center'};" />`;
    };

    container.innerHTML = `
      <!-- Step 01 -->
      <div class="step-card">
        <div>
          <div class="step-num-pill">01</div>
          <h3 class="step-card-title">${s1.title}</h3>
          <p class="step-card-desc">${s1.desc}</p>
        </div>
        <div class="step-card-visual">
          ${renderMedia(s1, 1)}
          <span class="step-sub-badge"><i class="fa-solid fa-gem" style="color: #10B981; margin-right: 4px;"></i>${s1.badge}</span>
        </div>
      </div>

      <!-- Step 02 -->
      <div class="step-card">
        <div>
          <div class="step-num-pill">02</div>
          <h3 class="step-card-title">${s2.title}</h3>
          <p class="step-card-desc">${s2.desc}</p>
        </div>
        <div class="step-card-visual">
          ${renderMedia(s2, 2)}
          <span class="step-sub-badge"><i class="fa-solid fa-qrcode" style="color: #2563EB; margin-right: 4px;"></i>${s2.badge}</span>
        </div>
      </div>

      <!-- Step 03 -->
      <div class="step-card">
        <div>
          <div class="step-num-pill">03</div>
          <h3 class="step-card-title">${s3.title}</h3>
          <p class="step-card-desc">${s3.desc}</p>
        </div>
        <div class="step-card-visual">
          ${renderMedia(s3, 3)}
          <span class="step-sub-badge"><i class="fa-solid fa-shield-halved" style="color: #F59E0B; margin-right: 4px;"></i>${s3.badge}</span>
        </div>
      </div>
    `;
  }

  // --- LANGUAGE SWITCHER ---
  setLanguage(lang) {
    this.currentLang = lang;
    this.saveState();
    this.applyLanguage();
    this.renderCatalog();
    this.renderPopularItems();
    this.renderDashboardTable();
    this.renderMutasiTable();
    this.updateStatsCards();
    this.showToast(lang === 'id' ? 'Bahasa berhasil diubah ke Indonesia' : 'Language changed to English');
  }

  applyLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = this.t(key);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });
  }

  // --- VIEW ROUTING (INCLUDES DEDICATED SEARCH PAGE) ---
  switchView(viewName) {
    this.activeView = viewName;
    
    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.view === viewName);
    });

    const drawer = document.getElementById('mobileMenuDrawer');
    if (drawer) drawer.classList.remove('active');

    // Section visibility
    const homeSections = document.getElementById('homeViewSections');
    const searchDedicatedView = document.getElementById('searchDedicatedView');
    const dashboardView = document.getElementById('dashboardView');
    const analyticsView = document.getElementById('analyticsView');
    const settingsView = document.getElementById('settingsView');

    if (viewName === 'home') {
      homeSections.style.display = 'block';
      searchDedicatedView.classList.remove('active');
      dashboardView.classList.remove('active');
      analyticsView.classList.remove('active');
      settingsView.classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'search') {
      // DEDICATED SEARCH & CATALOG PAGE
      homeSections.style.display = 'none';
      searchDedicatedView.classList.add('active');
      dashboardView.classList.remove('active');
      analyticsView.classList.remove('active');
      settingsView.classList.remove('active');

      this.renderDedicatedCatalog();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Focus search input
      setTimeout(() => {
        const dInput = document.getElementById('dedicatedSearchInput');
        if (dInput) dInput.focus();
      }, 100);
    } else if (viewName === 'dashboard') {
      if (!this.currentUser || this.currentUser.role !== 'seller') {
        this.openAuthModal('seller_required');
        return;
      }
      homeSections.style.display = 'none';
      searchDedicatedView.classList.remove('active');
      dashboardView.classList.add('active');
      analyticsView.classList.remove('active');
      settingsView.classList.remove('active');
      this.renderDashboardTable();
      this.updateStatsCards();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'analytics') {
      if (!this.currentUser || this.currentUser.role !== 'seller') {
        this.openAuthModal('seller_required');
        return;
      }
      homeSections.style.display = 'none';
      searchDedicatedView.classList.remove('active');
      dashboardView.classList.remove('active');
      analyticsView.classList.add('active');
      settingsView.classList.remove('active');
      this.renderMutasiTable();
      this.renderAnalyticsChart();
      this.updateStatsCards();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'settings') {
      if (!this.currentUser || this.currentUser.role !== 'seller') {
        this.openAuthModal('seller_required', true);
        return;
      }
      homeSections.style.display = 'none';
      searchDedicatedView.classList.remove('active');
      dashboardView.classList.remove('active');
      analyticsView.classList.remove('active');
      settingsView.classList.add('active');
      this.populateSettingsForm();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- HERO SEARCH EXECUTION ---
  executeHeroSearch() {
    const input = document.getElementById('heroSearchInput');
    const query = input ? input.value.trim() : '';
    this.searchQuery = query;

    const dInput = document.getElementById('dedicatedSearchInput');
    if (dInput) dInput.value = query;

    this.switchView('search');
  }

  // --- POPULAR ITEMS RENDERING (HOME) ---
  renderPopularItems() {
    const popularContainer = document.getElementById('popularItemsGrid');
    if (!popularContainer) return;

    const popularProducts = this.products.filter(p => p.isPopular);
    const card1 = popularProducts[0] || this.products[0];
    const card2 = popularProducts[1] || this.products[1];

    popularContainer.innerHTML = `
      <div class="popular-card" onclick="app.openProductDetail('${card1.id}')">
        <img src="${card1.image}" alt="${card1.title}" class="popular-card-img" />
        <div class="popular-card-badge">
          <span>${this.settings.popularBadge1 || card1.category}</span>
          <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem;"></i>
        </div>
        <div class="popular-arrow-btn">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div class="popular-card" onclick="app.openProductDetail('${card2.id}')">
        <img src="${card2.image}" alt="${card2.title}" class="popular-card-img" />
        <div class="popular-card-badge">
          <span>${this.settings.popularBadge2 || card2.category}</span>
          <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem;"></i>
        </div>
        <div class="popular-arrow-btn">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="quote-icon">“</div>
        <p class="testimonial-quote">"${this.settings.testimonialQuote}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${(this.settings.testimonialAuthor || 'M').charAt(0)}</div>
          <div>
            <div class="author-name">${(this.settings.testimonialAuthor || '').split(',')[0]}</div>
            <div class="author-location">${(this.settings.testimonialAuthor || '').split(',').slice(1).join(',')}</div>
          </div>
        </div>
      </div>
    `;
  }

  // --- DEDICATED SEARCH CATALOG RENDERING & FILTERING ---
  renderCatalog() {
    this.renderDedicatedCatalog();
  }

  renderDedicatedCatalog() {
    const grid = document.getElementById('dedicatedProductsGrid');
    const countEl = document.getElementById('dedicatedResultCount');
    const chipsContainer = document.getElementById('searchActiveChips');
    if (!grid) return;

    let filtered = [...this.products];

    // Search query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    }

    // Categories
    if (!this.selectedCategories.includes('All')) {
      filtered = filtered.filter(p => this.selectedCategories.includes(p.category));
    }

    // License
    if (this.selectedLicense !== 'all') {
      filtered = filtered.filter(p => p.license.toLowerCase() === this.selectedLicense.toLowerCase());
    }

    // Discount Only
    if (this.onlyDiscount) {
      filtered = filtered.filter(p => p.discountPercent && p.discountPercent > 0);
    }

    // Popular Only
    if (this.onlyPopular) {
      filtered = filtered.filter(p => p.isPopular);
    }

    // Sorting
    if (this.sortBy === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'newest') {
      filtered.sort((a, b) => b.id.localeCompare(a.id));
    } else {
      filtered.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
    }

    if (countEl) {
      countEl.textContent = `${filtered.length} Produk Ditemukan`;
    }

    // Render Active Chips
    if (chipsContainer) {
      let chipsHtml = [];
      if (this.searchQuery) {
        chipsHtml.push(`<span class="filter-chip">Pencarian: "${this.searchQuery}" <span class="filter-chip-remove" onclick="app.clearSearchQuery()">&times;</span></span>`);
      }
      this.selectedCategories.forEach(cat => {
        if (cat !== 'All') {
          chipsHtml.push(`<span class="filter-chip">Kategori: ${cat} <span class="filter-chip-remove" onclick="app.toggleCategoryFilter('${cat}')">&times;</span></span>`);
        }
      });
      if (this.selectedLicense !== 'all') {
        chipsHtml.push(`<span class="filter-chip">Lisensi: ${this.selectedLicense} <span class="filter-chip-remove" onclick="app.setLicenseFilter('all')">&times;</span></span>`);
      }
      if (this.onlyDiscount) {
        chipsHtml.push(`<span class="filter-chip">Hanya Promo Diskon <span class="filter-chip-remove" onclick="app.toggleDiscountOnly(false)">&times;</span></span>`);
      }
      if (this.onlyPopular) {
        chipsHtml.push(`<span class="filter-chip">Hanya Populer <span class="filter-chip-remove" onclick="app.togglePopularOnly(false)">&times;</span></span>`);
      }

      chipsContainer.innerHTML = chipsHtml.length > 0 ? chipsHtml.join('') : '<span style="font-size: 0.8rem; color: #94A3B8;">Filter aktif: Semua Produk</span>';
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="catalog-empty-state" style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background: #F8FAFC; border-radius: 16px; border: 1px dashed #CBD5E1;">
          <div class="empty-state-icon" style="font-size: 2.5rem; color: #94A3B8; margin-bottom: 12px;"><i class="fa-solid fa-box-open"></i></div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 6px;">Tidak ada produk yang cocok</h3>
          <p style="font-size: 0.9rem; color: #64748B; margin-bottom: 20px;">Coba gunakan kata kunci lain atau bersihkan filter.</p>
          <button class="btn-primary-action" onclick="app.resetDedicatedFilters()">Reset Semua Filter</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(prod => {
      const isBookmarked = this.bookmarks.includes(prod.id);
      const formattedPrice = this.formatCurrency(prod.price);
      const formattedOriginal = prod.originalPrice && prod.originalPrice > prod.price ? this.formatCurrency(prod.originalPrice) : null;
      
      return `
        <div class="product-card" data-id="${prod.id}">
          <div class="product-image-container" onclick="app.openProductDetail('${prod.id}')">
            <img src="${prod.image}" alt="${prod.title}" class="product-image" loading="lazy" />
            ${prod.discountPercent ? `<span class="product-discount-pill">-${prod.discountPercent}%</span>` : ''}
            <span class="product-license-pill">${prod.license}</span>
          </div>
          <div class="product-card-body">
            <div class="product-header-row">
              <h4 class="product-title" onclick="app.openProductDetail('${prod.id}')">${prod.title}</h4>
              <span class="product-category-tag">${prod.category}</span>
            </div>
            <div class="product-creator-sub">By ${prod.author || 'Alifio Creator'}</div>
            
            <div class="product-price-section">
              <span class="price-label">${this.t('card_starting_price')}</span>
              <div class="price-amount-group">
                ${formattedOriginal ? `<span class="price-original">${formattedOriginal}</span>` : ''}
                <span class="price-amount">${formattedPrice}</span>
              </div>
            </div>

            <div class="product-card-actions">
              <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" onclick="app.toggleBookmark('${prod.id}', event)" title="Simpan ke Wishlist">
                <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
              </button>
              <button class="btn-buy-card" onclick="app.initiateCheckout('${prod.id}')">
                <span>${this.t('card_buy_btn')}</span>
                <i class="fa-solid fa-arrow-right" style="font-size: 0.75rem;"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  handleDedicatedSearchInput(val) {
    this.searchQuery = val;
    this.renderDedicatedCatalog();
  }

  clearSearchQuery() {
    this.searchQuery = '';
    const dInput = document.getElementById('dedicatedSearchInput');
    if (dInput) dInput.value = '';
    const heroInput = document.getElementById('heroSearchInput');
    if (heroInput) heroInput.value = '';
    this.renderDedicatedCatalog();
  }

  toggleCategoryFilter(category) {
    if (category === 'All') {
      this.selectedCategories = ['All'];
    } else {
      const allIndex = this.selectedCategories.indexOf('All');
      if (allIndex > -1) this.selectedCategories.splice(allIndex, 1);

      const index = this.selectedCategories.indexOf(category);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
        if (this.selectedCategories.length === 0) this.selectedCategories = ['All'];
      } else {
        this.selectedCategories.push(category);
      }
    }

    // Sync Checkboxes
    document.querySelectorAll('.filter-checkbox-item input[type="checkbox"]').forEach(cb => {
      if (cb.value) {
        cb.checked = this.selectedCategories.includes(cb.value);
      }
    });

    this.renderDedicatedCatalog();
  }

  resetCategoryFilters() {
    this.selectedCategories = ['All'];
    document.querySelectorAll('.filter-checkbox-item input[type="checkbox"]').forEach(cb => {
      if (cb.value) {
        cb.checked = cb.value === 'All';
      }
    });
    this.renderDedicatedCatalog();
  }

  setLicenseFilter(license) {
    this.selectedLicense = license;
    document.querySelectorAll('.license-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.license === license);
    });
    this.renderDedicatedCatalog();
  }

  toggleDiscountOnly(checked) {
    this.onlyDiscount = checked;
    const cb = document.getElementById('filterOnlyDiscount');
    if (cb) cb.checked = checked;
    this.renderDedicatedCatalog();
  }

  togglePopularOnly(checked) {
    this.onlyPopular = checked;
    const cb = document.getElementById('filterOnlyPopular');
    if (cb) cb.checked = checked;
    this.renderDedicatedCatalog();
  }

  setSortBy(sortVal) {
    this.sortBy = sortVal;
    const sortSelect = document.getElementById('dedicatedSortSelect');
    if (sortSelect) sortSelect.value = sortVal;

    const labelMap = {
      popular: 'Terpopuler',
      low: 'Harga: Rendah ke Tinggi',
      high: 'Harga: Tinggi ke Rendah',
      newest: 'Terbaru'
    };
    const labelEl = document.getElementById('sortDropdownSelectedLabel');
    if (labelEl) labelEl.textContent = labelMap[sortVal] || 'Terpopuler';

    document.querySelectorAll('#sortDropdownMenu .dropdown-item').forEach(item => {
      if (item.getAttribute('data-sort') === sortVal) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    this.renderDedicatedCatalog();
  }

  toggleSortDropdown(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('sortDropdownMenu');
    const btn = document.getElementById('sortDropdownBtn');
    if (!menu || !btn) return;
    const isShowing = menu.classList.contains('show');
    if (isShowing) {
      menu.classList.remove('show');
      btn.classList.remove('active');
    } else {
      menu.classList.add('show');
      btn.classList.add('active');
    }
  }

  selectSortOption(sortKey, sortLabel) {
    const menu = document.getElementById('sortDropdownMenu');
    const btn = document.getElementById('sortDropdownBtn');
    if (menu) menu.classList.remove('show');
    if (btn) btn.classList.remove('active');
    this.setSortBy(sortKey);
  }


  resetDedicatedFilters() {
    this.searchQuery = '';
    this.selectedCategories = ['All'];
    this.selectedLicense = 'all';
    this.onlyDiscount = false;
    this.onlyPopular = false;
    this.sortBy = 'popular';

    const dInput = document.getElementById('dedicatedSearchInput');
    if (dInput) dInput.value = '';
    const heroInput = document.getElementById('heroSearchInput');
    if (heroInput) heroInput.value = '';

    const cbDisc = document.getElementById('filterOnlyDiscount');
    if (cbDisc) cbDisc.checked = false;
    const cbPop = document.getElementById('filterOnlyPopular');
    if (cbPop) cbPop.checked = false;

    this.resetCategoryFilters();
    this.setLicenseFilter('all');
    this.setSortBy('popular');

    this.showToast('Semua filter berhasil direset');
  }

  toggleBookmark(productId, event) {
    if (event) event.stopPropagation();
    const index = this.bookmarks.indexOf(productId);
    if (index > -1) {
      this.bookmarks.splice(index, 1);
      this.showToast('Dihapus dari wishlist');
    } else {
      this.bookmarks.push(productId);
      this.showToast('Disimpan ke wishlist!');
    }
    this.saveState();
    this.renderDedicatedCatalog();
  }

  // --- VIDEO PLAYER MODAL ("SEE HOW IT'S DONE") ---
  openVideoModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) return;

    const titleEl = document.getElementById('videoModalTitle');
    if (titleEl) {
      titleEl.innerHTML = `<i class="fa-solid fa-circle-play" style="color: #38BDF8; margin-right: 8px;"></i> ${this.settings.videoTitle || 'Cara Kerja Alifio — Panduan Lengkap'}`;
    }

    const wrapper = document.getElementById('videoPlayerWrapper');
    // Prefer uploaded blob/data-url video over URL setting
    const videoSrc = this.settings.videoUploadedBlob || this.settings.videoUrl;
    if (videoSrc) {
      if (typeof videoSrc === 'string' && (videoSrc.includes('youtube') || videoSrc.includes('youtu.be'))) {
        wrapper.innerHTML = `<iframe src="${videoSrc}" style="width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else {
        wrapper.innerHTML = `<video src="${videoSrc}" controls autoplay style="width: 100%; height: 100%; object-fit: contain;"></video>`;
      }
    } else {
      // Interactive Animated Video Scenes
      wrapper.innerHTML = `
        <div class="video-interactive-stage" id="videoStage">
          <div class="video-scene-badge" id="videoSceneBadge">SCENE 1: DISCOVER ASSETS</div>
          <div id="videoSceneVisual" style="font-size: 3.5rem; margin-bottom: 16px; color: #38BDF8;"><i class="fa-solid fa-shapes"></i></div>
          <h2 class="video-scene-title" id="videoSceneTitle">1. Temukan Aset Pilihanmu</h2>
          <p class="video-scene-desc" id="videoSceneDesc">Jelajahi ratusan paket 3D Icons, UI Kit, dan Font berkualitas studio dengan pencarian instan dan filter kategori.</p>
        </div>`;
      this.videoCurrentScene = 0;
      this.updateVideoSceneUI();
      this.startVideoPlayback();
    }

    modal.classList.add('active');
  }

  closeVideoModal() {
    this.pauseVideoPlayback();
    const modal = document.getElementById('videoModal');
    if (modal) modal.classList.remove('active');
  }

  toggleVideoPlayback() {
    if (this.videoIsPlaying) {
      this.pauseVideoPlayback();
    } else {
      this.startVideoPlayback();
    }
  }

  startVideoPlayback() {
    this.videoIsPlaying = true;
    const btn = document.getElementById('videoPlayPauseBtn');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-pause"></i> Jeda Video`;

    clearInterval(this.videoInterval);
    this.videoInterval = setInterval(() => {
      this.videoCurrentScene = (this.videoCurrentScene + 1) % 3;
      this.updateVideoSceneUI();
    }, 3500);
  }

  pauseVideoPlayback() {
    this.videoIsPlaying = false;
    clearInterval(this.videoInterval);
    const btn = document.getElementById('videoPlayPauseBtn');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> Putar Video`;
  }

  restartVideo() {
    this.videoCurrentScene = 0;
    this.updateVideoSceneUI();
    this.startVideoPlayback();
  }

  jumpToVideoScene(idx) {
    this.videoCurrentScene = idx;
    this.updateVideoSceneUI();
  }

  updateVideoSceneUI() {
    const scenes = [
      {
        badge: 'LANGKAH 1: TEMUKAN ASET DESAIN',
        icon: '<i class="fa-solid fa-shapes"></i>',
        title: '1. Temukan Aset Pilihanmu',
        desc: 'Jelajahi ratusan paket 3D Icons, UI Kit, Mockup, dan Font berkualitas studio dengan pencarian instan dan filter kategori.'
      },
      {
        badge: 'LANGKAH 2: PEMBAYARAN QRIS INSTAN',
        icon: '<i class="fa-solid fa-qrcode"></i>',
        title: '2. Bayar Mudah dalam Hitungan Detik',
        desc: 'Cukup scan barcode QRIS menggunakan BCA Mobile, GoPay, OVO, DANA, ShopeePay, atau aplikasi bank apa pun.'
      },
      {
        badge: 'LANGKAH 3: UNDUH & MULAI BERKARYA',
        icon: '<i class="fa-solid fa-cloud-arrow-down"></i>',
        title: '3. Unduh File Sumber & Mulai Berkreasi',
        desc: 'Dapatkan akses langsung ke file original (.blend, .fig, .svg, .psd) beresolusi tinggi tanpa menunggu verifikasi manual.'
      }
    ];

    const current = scenes[this.videoCurrentScene];
    const badgeEl = document.getElementById('videoSceneBadge');
    const visualEl = document.getElementById('videoSceneVisual');
    const titleEl = document.getElementById('videoSceneTitle');
    const descEl = document.getElementById('videoSceneDesc');

    if (badgeEl) badgeEl.textContent = current.badge;
    if (visualEl) visualEl.innerHTML = current.icon;
    if (titleEl) titleEl.textContent = current.title;
    if (descEl) descEl.textContent = current.desc;

    document.querySelectorAll('#videoScenePillIndicators button').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === this.videoCurrentScene);
    });
  }

  // --- PRODUCT DETAIL MODAL ---
  openProductDetail(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;

    const modal = document.getElementById('productDetailModal');
    const container = document.getElementById('productDetailContent');
    if (!modal || !container) return;

    const formattedPrice = this.formatCurrency(prod.price);
    const formattedOriginal = prod.originalPrice && prod.originalPrice > prod.price ? this.formatCurrency(prod.originalPrice) : null;

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
        <div style="width: 100%; height: 260px; border-radius: var(--radius-lg); overflow: hidden; background-color: #F1F5F9; position: relative;">
          <img src="${prod.image}" alt="${prod.title}" style="width: 100%; height: 100%; object-fit: cover;" />
          ${prod.discountPercent ? `<span class="product-discount-pill" style="font-size: 0.85rem; padding: 4px 10px;">DISKON ${prod.discountPercent}%</span>` : ''}
          <span class="product-license-pill" style="font-size: 0.8rem; padding: 4px 10px;">${prod.license}</span>
        </div>

        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 0.825rem; font-weight: 800; color: var(--color-primary); background-color: var(--color-primary-light); padding: 4px 12px; border-radius: var(--radius-pill);">${prod.category}</span>
            <span style="font-size: 0.85rem; color: #64748B;"><i class="fa-solid fa-star" style="color: #F59E0B; margin-right: 4px;"></i>${prod.rating || 5.0} (${prod.downloads || 100}+ downloads)</span>
          </div>

          <h2 style="font-size: 1.45rem; font-weight: 800; margin-bottom: 6px; line-height: 1.3;">${prod.title}</h2>
          <div style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 16px;">Oleh <strong>${prod.author || 'Alifio Studio'}</strong></div>

          <p style="font-size: 0.95rem; color: #475569; line-height: 1.6; margin-bottom: 20px;">${prod.description}</p>

          <div style="background-color: #F8FAFC; border: 1px solid var(--color-card-border); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85rem;">
            <div><span style="color: #64748B;">Format File:</span> <strong>${prod.fileTypes || 'Standard'}</strong></div>
            <div><span style="color: #64748B;">Lisensi:</span> <strong>Komersial & Personal</strong></div>
            <div><span style="color: #64748B;">Status:</span> <strong style="color: var(--color-success);">${prod.status || 'Tersedia'}</strong></div>
            <div><span style="color: #64748B;">Akses:</span> <strong>Instan Download</strong></div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid var(--color-card-border);">
            <div>
              <div style="font-size: 0.775rem; color: #64748B;">Harga Total:</div>
              <div style="display: flex; align-items: baseline; gap: 8px;">
                ${formattedOriginal ? `<span style="font-size: 0.9rem; color: #94A3B8; text-decoration: line-through;">${formattedOriginal}</span>` : ''}
                <span style="font-size: 1.55rem; font-weight: 900; color: var(--color-text-main);">${formattedPrice}</span>
              </div>
            </div>
            <button class="btn-primary-action" onclick="app.initiateCheckout('${prod.id}')" style="padding: 12px 30px; font-size: 0.95rem;">
              <i class="fa-solid fa-bolt"></i>
              <span>${this.currentLang === 'id' ? 'Beli Sekarang (QRIS)' : 'Buy Now (QRIS)'}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
  }

  // --- CHECKOUT & QRIS FLOW ---
  initiateCheckout(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;

    this.pendingCheckoutProduct = prod;

    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));

    const modal = document.getElementById('checkoutModal');
    const titleEl = document.getElementById('checkoutProductTitle');
    const priceEl = document.getElementById('checkoutProductPrice');
    const qrisImg = document.getElementById('checkoutQrisImage');
    const merchantEl = document.getElementById('checkoutMerchantName');
    const qrisLabel = document.getElementById('checkoutQrisTitleLabel');
    
    if (titleEl) titleEl.textContent = prod.title;
    if (priceEl) priceEl.textContent = this.formatCurrency(prod.price);
    
    // Gunakan barcode QRIS khusus dari masing-masing produk!
    const productQris = prod.qrisImage || prod.qrisBarcode || this.settings.qrisImageUrl;
    if (qrisImg) qrisImg.src = productQris;
    if (qrisLabel) qrisLabel.textContent = `Barcode QRIS Khusus: ${prod.title}`;
    if (merchantEl) merchantEl.textContent = this.settings.qrisMerchantName;

    const nameInput = document.getElementById('checkoutCustomerName');
    const contactInput = document.getElementById('checkoutCustomerContact');
    if (this.currentUser) {
      if (nameInput) nameInput.value = this.currentUser.name || '';
      if (contactInput) contactInput.value = this.currentUser.email || '';
    } else {
      if (nameInput) nameInput.value = 'Budi Santoso';
      if (contactInput) contactInput.value = 'customer@alifio.com';
    }

    const btnConfirmText = document.getElementById('btnConfirmPaidText');
    if (btnConfirmText) btnConfirmText.textContent = 'Saya Sudah Membayar (Konfirmasi)';

    // Build alt payment buttons from dynamic platforms
    const altPaymentContainer = document.getElementById('dynamicAltPaymentList');
    if (altPaymentContainer) {
      const platforms = this.settings.platforms || [];
      let btnsHtml = '';
      platforms.forEach(p => {
        if (!p.value) return;
        if (p.type === 'bank') {
          btnsHtml += `<div style="font-size: 0.75rem; color: #64748B; background: #F1F5F9; padding: 8px 12px; border-radius: 6px; margin-bottom: 6px;">
            <i class="${p.icon}" style="color:${p.color}; margin-right: 4px;"></i>
            <span>${this.escapeHtml(p.value)}</span>
          </div>`;
        } else if (p.type === 'whatsapp') {
          const waMsg = encodeURIComponent(`Halo, saya ingin beli produk: ${prod.title} (${this.formatCurrency(prod.price)})`);
          btnsHtml += `<a href="https://wa.me/${p.value.replace(/\D/g,'')}?text=${waMsg}" target="_blank" class="btn-alt-payment">
            <span><i class="${p.icon}" style="color:${p.color}; margin-right: 8px;"></i>${this.escapeHtml(p.name)}</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
          </a>`;
        } else {
          btnsHtml += `<a href="${this.escapeHtml(p.value)}" target="_blank" class="btn-alt-payment">
            <span><i class="${p.icon}" style="color:${p.color}; margin-right: 8px;"></i>${this.escapeHtml(p.name)}</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
          </a>`;
        }
      });
      altPaymentContainer.innerHTML = btnsHtml;
    }

    modal.classList.add('active');
  }

  confirmPayment() {
    if (!this.pendingCheckoutProduct) return;

    const nameInput = document.getElementById('checkoutCustomerName');
    const contactInput = document.getElementById('checkoutCustomerContact');

    const customerName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : (this.currentUser ? this.currentUser.name : 'Pelanggan Guest');
    const customerContact = contactInput && contactInput.value.trim() ? contactInput.value.trim() : 'customer@alifio.com';
    const customerEmail = customerContact.includes('@') ? customerContact.trim() : (this.currentUser ? this.currentUser.email : 'customer@alifio.com');

    const now = new Date();
    const trxId = 'TRX-' + now.getFullYear() + String(now.getMonth()+1).padStart(2,'0') + String(now.getDate()).padStart(2,'0') + '-' + String(now.getTime()).slice(-4);
    const timestampStr = now.toLocaleDateString('id-ID') + ' ' + now.toLocaleTimeString('id-ID');

    const newTrx = {
      id: trxId,
      timestamp: timestampStr,
      customerName: customerName,
      customerContact: customerContact,
      customerEmail: customerEmail,
      productId: this.pendingCheckoutProduct.id,
      productTitle: this.pendingCheckoutProduct.title,
      amount: this.pendingCheckoutProduct.price,
      paymentMethod: 'QRIS',
      paymentStatus: 'Berhasil (Lunas)',
      notes: `Lunas via QRIS Produk: ${this.pendingCheckoutProduct.title}`
    };

    this.transactions.unshift(newTrx);
    this.pendingCheckoutProduct.downloads = (this.pendingCheckoutProduct.downloads || 0) + 1;
    this.lastConfirmedTrx = newTrx;

    this.saveState();
    this.renderMutasiTable();
    this.updateStatsCards();
    this.renderAnalyticsChart();

    const downloadUrl = this.pendingCheckoutProduct.fileUrl || 'https://drive.google.com';
    const prodTitle = this.pendingCheckoutProduct.title;

    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));

    const successModal = document.getElementById('paymentSuccessModal');
    const linkEl = document.getElementById('successDownloadLink');
    const trxCodeEl = document.getElementById('successTrxCode');
    const successNameEl = document.getElementById('successProductName');
    const customerEmailEl = document.getElementById('successCustomerEmailText');

    if (trxCodeEl) trxCodeEl.textContent = trxId;
    if (successNameEl) successNameEl.textContent = prodTitle;
    if (customerEmailEl) customerEmailEl.textContent = customerEmail;
    if (linkEl) {
      linkEl.href = downloadUrl;
      linkEl.onclick = () => {
        this.showToast('File aset mulai diunduh!');
      };
    }

    if (successModal) successModal.classList.add('active');

    // Email Notification Alert & Toast
    this.showToast(`📧 Notifikasi & Invoice resmi otomatis terkirim ke: ${customerEmail}!`);

    // Sync to backend Google Apps Script if URL provided
    if (this.settings.spreadsheetUrl) {
      this.syncTransactionToSpreadsheet(newTrx);
    }
  }

  // --- OFFICIAL INVOICE MODAL & NOTIFICATION ---
  openInvoiceModal(trxId = null) {
    const trx = trxId ? this.transactions.find(t => t.id === trxId) : (this.lastConfirmedTrx || this.transactions[0]);
    if (!trx) return;

    const prod = this.products.find(p => p.id === trx.productId) || { license: 'Commercial Premium', fileUrl: 'https://drive.google.com' };

    const modal = document.getElementById('invoiceModal');
    if (!modal) return;

    const idEl = document.getElementById('invModalId');
    const dateEl = document.getElementById('invModalDate');
    const nameEl = document.getElementById('invModalCustomerName');
    const contactEl = document.getElementById('invModalCustomerContact');
    const methodEl = document.getElementById('invModalPaymentMethod');
    const titleEl = document.getElementById('invModalProductTitle');
    const licEl = document.getElementById('invModalProductLicense');
    const priceEl = document.getElementById('invModalProductPrice');
    const totalEl = document.getElementById('invModalTotal');
    const dlEl = document.getElementById('invModalDownloadLink');

    if (idEl) idEl.textContent = trx.id;
    if (dateEl) dateEl.textContent = trx.timestamp;
    if (nameEl) nameEl.textContent = trx.customerName;
    if (contactEl) contactEl.textContent = trx.customerContact;
    if (methodEl) methodEl.textContent = (trx.paymentMethod || 'QRIS') + ' (AI Verified)';
    if (titleEl) titleEl.textContent = trx.productTitle;
    if (licEl) licEl.textContent = prod.license || 'Commercial';
    if (priceEl) priceEl.textContent = this.formatCurrency(trx.amount);
    if (totalEl) totalEl.textContent = this.formatCurrency(trx.amount);
    if (dlEl) dlEl.href = prod.fileUrl || 'https://drive.google.com';

    modal.classList.add('active');
  }

  resendInvoiceEmailNotification() {
    const trx = this.lastConfirmedTrx || this.transactions[0];
    const email = trx ? (trx.customerEmail || trx.customerContact) : 'customer@alifio.com';
    this.showToast(`📧 Salinan invoice & link unduhan berhasil dikirimkan ke ${email}!`);
  }

  // --- SELLER DASHBOARD PRODUCT MANAGEMENT ---
  openAddProductModal(editProductId = null) {
    const modal = document.getElementById('productFormModal');
    const form = document.getElementById('productManagementForm');
    const modalTitle = document.getElementById('productFormModalTitle');
    if (!modal || !form) return;

    form.reset();

    const qrisInput = document.getElementById('formProductQris');
    const qrisPreview = document.getElementById('formProductQrisPreview');
    const qrisPreviewContainer = document.getElementById('formProductQrisPreviewContainer');
    const qrisFileInput = document.getElementById('formProductQrisFile');
    if (qrisFileInput) qrisFileInput.value = '';

    const imgInput = document.getElementById('formProductImage');
    const imgPreview = document.getElementById('formProductImagePreview');
    const imgPreviewContainer = document.getElementById('formProductImagePreviewContainer');
    const imgFileInfo = document.getElementById('formProductImageFileInfo');
    const imgFileInput = document.getElementById('formProductImageFile');
    if (imgFileInput) imgFileInput.value = '';

    if (editProductId) {
      const prod = this.products.find(p => p.id === editProductId);
      if (prod) {
        if (modalTitle) modalTitle.textContent = 'Edit Produk';
        document.getElementById('formProductId').value = prod.id;
        document.getElementById('formProductTitle').value = prod.title;
        document.getElementById('formProductCategory').value = prod.category;
        document.getElementById('formOriginalPrice').value = prod.originalPrice || prod.price;
        document.getElementById('formDiscountPrice').value = prod.price;
        document.getElementById('formProductLicense').value = prod.license;
        document.getElementById('formProductDesc').value = prod.description;
        document.getElementById('formProductFileUrl').value = prod.fileUrl || '';
        document.getElementById('formProductPopular').checked = Boolean(prod.isPopular);

        // Load Thumbnail Gambar Produk
        const thumbVal = prod.image || 'assets/patricia_west.jpg';
        if (imgInput) imgInput.value = thumbVal;
        if (imgPreview) imgPreview.src = thumbVal;
        if (imgPreviewContainer) imgPreviewContainer.style.display = 'flex';
        if (imgFileInfo) imgFileInfo.textContent = 'Thumbnail produk tersimpan';

        // Load Barcode QRIS Khusus Produk
        if (qrisInput) qrisInput.value = prod.qrisImage || prod.qrisBarcode || '';
        if (qrisPreview && qrisInput && qrisInput.value) {
          qrisPreview.src = qrisInput.value;
          if (qrisPreviewContainer) qrisPreviewContainer.style.display = 'flex';
        } else if (qrisPreviewContainer) {
          qrisPreviewContainer.style.display = 'none';
        }
      }
    } else {
      if (modalTitle) modalTitle.textContent = 'Tambah Produk Baru';
      document.getElementById('formProductId').value = '';
      
      // Default Preset Thumbnail
      const defaultImg = 'assets/patricia_west.jpg';
      if (imgInput) imgInput.value = defaultImg;
      if (imgPreview) imgPreview.src = defaultImg;
      if (imgPreviewContainer) imgPreviewContainer.style.display = 'flex';
      if (imgFileInfo) imgFileInfo.textContent = 'Preset bawaan: Patricia West';

      if (qrisInput) qrisInput.value = '';
      if (qrisPreviewContainer) qrisPreviewContainer.style.display = 'none';
    }

    modal.classList.add('active');
  }

  handleProductImageUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran file gambar thumbnail maksimal 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgInput = document.getElementById('formProductImage');
      const imgPreview = document.getElementById('formProductImagePreview');
      const imgPreviewContainer = document.getElementById('formProductImagePreviewContainer');
      const imgFileInfo = document.getElementById('formProductImageFileInfo');

      const dataUrl = event.target.result;
      if (imgInput) imgInput.value = dataUrl;
      if (imgPreview) imgPreview.src = dataUrl;
      if (imgPreviewContainer) imgPreviewContainer.style.display = 'flex';
      if (imgFileInfo) {
        const sizeKb = (file.size / 1024).toFixed(1);
        imgFileInfo.textContent = `${file.name} (${sizeKb} KB)`;
      }

      this.showToast('✅ Gambar thumbnail produk berhasil diunggah!');
    };
    reader.readAsDataURL(file);
  }

  handleProductImageUrlInput(val) {
    const imgPreview = document.getElementById('formProductImagePreview');
    const imgPreviewContainer = document.getElementById('formProductImagePreviewContainer');
    const imgFileInfo = document.getElementById('formProductImageFileInfo');

    const cleanVal = (val || '').trim();
    if (cleanVal) {
      if (imgPreview) imgPreview.src = cleanVal;
      if (imgPreviewContainer) imgPreviewContainer.style.display = 'flex';
      if (imgFileInfo) imgFileInfo.textContent = cleanVal.startsWith('data:') ? 'File upload lokal' : 'Tautan gambar eksternal';
    } else {
      if (imgPreviewContainer) imgPreviewContainer.style.display = 'none';
    }
  }

  setProductImagePreset(presetPath) {
    const imgInput = document.getElementById('formProductImage');
    const imgPreview = document.getElementById('formProductImagePreview');
    const imgPreviewContainer = document.getElementById('formProductImagePreviewContainer');
    const imgFileInfo = document.getElementById('formProductImageFileInfo');
    const imgFileInput = document.getElementById('formProductImageFile');

    if (imgFileInput) imgFileInput.value = '';
    if (imgInput) imgInput.value = presetPath;
    if (imgPreview) imgPreview.src = presetPath;
    if (imgPreviewContainer) imgPreviewContainer.style.display = 'flex';
    if (imgFileInfo) imgFileInfo.textContent = `Preset: ${presetPath}`;

    this.showToast('Preset thumbnail dipilih!');
  }

  removeProductImageUpload() {
    const imgInput = document.getElementById('formProductImage');
    const imgFileInput = document.getElementById('formProductImageFile');
    const imgPreview = document.getElementById('formProductImagePreview');
    const imgPreviewContainer = document.getElementById('formProductImagePreviewContainer');

    if (imgFileInput) imgFileInput.value = '';
    if (imgInput) imgInput.value = '';
    if (imgPreview) imgPreview.src = '';
    if (imgPreviewContainer) imgPreviewContainer.style.display = 'none';

    this.showToast('Thumbnail dihapus. Silakan unggah gambar atau pilih preset.');
  }

  handleProductQrisUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const qrisInput = document.getElementById('formProductQris');
      const qrisPreview = document.getElementById('formProductQrisPreview');
      const qrisPreviewContainer = document.getElementById('formProductQrisPreviewContainer');

      if (qrisInput) qrisInput.value = event.target.result;
      if (qrisPreview) qrisPreview.src = event.target.result;
      if (qrisPreviewContainer) qrisPreviewContainer.style.display = 'flex';

      this.showToast('✅ File barcode QRIS produk berhasil diunggah!');
    };
    reader.readAsDataURL(file);
  }

  saveProductFromForm() {
    const id = document.getElementById('formProductId').value;
    const title = document.getElementById('formProductTitle').value.trim();
    const category = document.getElementById('formProductCategory').value;
    const originalPrice = Number(document.getElementById('formOriginalPrice').value) || 0;
    const price = Number(document.getElementById('formDiscountPrice').value) || originalPrice;
    const license = document.getElementById('formProductLicense').value;
    const image = document.getElementById('formProductImage').value.trim() || 'assets/patricia_west.jpg';
    const qrisImage = document.getElementById('formProductQris') ? document.getElementById('formProductQris').value.trim() : '';
    const description = document.getElementById('formProductDesc').value.trim();
    const fileUrl = document.getElementById('formProductFileUrl').value.trim() || 'https://drive.google.com';
    const isPopular = document.getElementById('formProductPopular').checked;

    if (!title || price <= 0) {
      alert('Silakan isi Nama Produk dan Harga dengan benar!');
      return;
    }

    // Validasi Wajib Barcode QRIS Produk
    if (!qrisImage) {
      alert('⚠️ WAJIB: Setiap produk wajib memiliki file/URL barcode QRIS untuk pembayaran pembeli!');
      return;
    }

    let discountPercent = 0;
    if (originalPrice > price) {
      discountPercent = Math.round(((originalPrice - price) / originalPrice) * 100);
    }

    if (id) {
      const prod = this.products.find(p => p.id === id);
      if (prod) {
        prod.title = title;
        prod.category = category;
        prod.originalPrice = originalPrice;
        prod.price = price;
        prod.discountPercent = discountPercent;
        prod.license = license;
        prod.image = image;
        prod.qrisImage = qrisImage;
        prod.description = description;
        prod.fileUrl = fileUrl;
        prod.isPopular = isPopular;
      }
      this.showToast('Produk & barcode QRIS berhasil diperbarui!');
    } else {
      const newId = 'PROD-' + String(new Date().getTime()).slice(-4);
      const newProd = {
        id: newId,
        title,
        category,
        originalPrice: originalPrice || price,
        price,
        discountPercent,
        license,
        status: 'Aktif',
        isPopular,
        image,
        qrisImage,
        author: this.currentUser ? this.currentUser.name : 'Alifio Official',
        description,
        fileTypes: 'ZIP, ASSETS',
        downloads: 0,
        rating: 5.0,
        fileUrl
      };
      this.products.unshift(newProd);
      this.showToast('Produk baru & barcode QRIS berhasil ditambahkan!');
    }

    this.saveState();
    this.renderPopularItems();
    this.renderDedicatedCatalog();
    this.renderDashboardTable();
    this.updateStatsCards();

    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));

    if (this.settings.spreadsheetUrl) {
      this.syncProductToSpreadsheet(id ? this.products.find(p => p.id === id) : this.products[0]);
    }
  }

  deleteProduct(productId) {
    if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      return;
    }
    this.products = this.products.filter(p => p.id !== productId);
    this.saveState();
    this.renderPopularItems();
    this.renderDedicatedCatalog();
    this.renderDashboardTable();
    this.updateStatsCards();
    this.showToast('Produk telah dihapus');
  }

  togglePopularStatus(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;
    prod.isPopular = !prod.isPopular;
    this.saveState();
    this.renderPopularItems();
    this.renderDashboardTable();
    this.showToast(prod.isPopular ? 'Ditambahkan ke Item Populer!' : 'Dihapus dari Item Populer');
  }

  renderDashboardTable() {
    const tbody = document.getElementById('dashboardProductsTbody');
    if (!tbody) return;

    tbody.innerHTML = this.products.map(prod => {
      const formattedPrice = this.formatCurrency(prod.price);
      const isDiscounted = prod.originalPrice && prod.originalPrice > prod.price;

      return `
        <tr>
          <td>
            <div class="product-cell">
              <img src="${prod.image}" alt="${prod.title}" class="product-thumb-mini" />
              <div>
                <strong style="color: var(--color-text-main);">${prod.title}</strong>
                <div style="font-size: 0.775rem; color: #94A3B8;">ID: ${prod.id} • ${prod.license}</div>
              </div>
            </div>
          </td>
          <td><span class="badge-status badge-status-featured">${prod.category}</span></td>
          <td>
            <div>
              <strong>${formattedPrice}</strong>
              ${isDiscounted ? `<div style="font-size: 0.75rem; color: var(--color-danger); font-weight: 700;">-${prod.discountPercent}% (was ${this.formatCurrency(prod.originalPrice)})</div>` : ''}
            </div>
          </td>
          <td>
            <button class="badge-status ${prod.isPopular ? 'badge-status-active' : ''}" style="cursor: pointer; border: 1px solid var(--color-card-border);" onclick="app.togglePopularStatus('${prod.id}')">
              ${prod.isPopular ? '★ Popular (ON)' : '☆ Normal (OFF)'}
            </button>
          </td>
          <td><strong>${prod.downloads || 0}</strong> terjual</td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon-action" onclick="app.openAddProductModal('${prod.id}')" title="Edit Produk">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon-action btn-icon-danger" onclick="app.deleteProduct('${prod.id}')" title="Hapus Produk">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // --- ANALYTICS MUTASI ---
  renderMutasiTable(filterQuery = '') {
    const tbody = document.getElementById('analyticsMutasiTbody');
    if (!tbody) return;

    let list = [...this.transactions];

    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      list = list.filter(t => 
        t.id.toLowerCase().includes(q) || 
        t.customerName.toLowerCase().includes(q) || 
        t.productTitle.toLowerCase().includes(q)
      );
    }

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: #94A3B8;">Belum ada mutasi penjualan tercatat.</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(t => {
      const isQRIS = t.paymentMethod === 'QRIS';
      return `
        <tr>
          <td><strong style="color: var(--color-primary); font-family: monospace;">${t.id}</strong></td>
          <td style="font-size: 0.8rem; color: #64748B;">${t.timestamp}</td>
          <td><strong>${t.productTitle}</strong></td>
          <td>
            <div>${t.customerName}</div>
            <div style="font-size: 0.75rem; color: #94A3B8;">${t.customerContact}</div>
          </td>
          <td>
            <span class="badge-status ${isQRIS ? 'badge-status-active' : 'badge-status-featured'}">
              ${t.paymentMethod}
            </span>
          </td>
          <td><strong style="color: #0F766E;">+${this.formatCurrency(t.amount)}</strong></td>
          <td>
            <div style="display: flex; align-items: center; gap: 6px;">
              ${(t.aiVerified || (t.paymentStatus && t.paymentStatus.includes('AI'))) ? 
                `<span class="badge-ai-verified"><i class="fa-solid fa-robot"></i> AI Verified</span>` : 
                `<span class="badge-status badge-status-active"><i class="fa-solid fa-check" style="margin-right: 4px;"></i>${t.paymentStatus || 'Lunas'}</span>`}
              <button type="button" class="btn-auth-pill" onclick="app.openInvoiceModal('${t.id}')" style="font-size: 0.7rem; padding: 3px 8px; border-radius: 4px;" title="Buka Invoice & Faktur">
                <i class="fa-solid fa-receipt"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  updateStatsCards() {
    const totalOmset = this.transactions.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
    const totalOrders = this.transactions.length;
    const activeProducts = this.products.length;
    const avgOrder = totalOrders > 0 ? Math.round(totalOmset / totalOrders) : 0;

    const elOmset = document.getElementById('statTotalOmset');
    const elOrders = document.getElementById('statTotalOrders');
    const elProducts = document.getElementById('statActiveProducts');
    const elAvg = document.getElementById('statAvgOrder');

    if (elOmset) elOmset.textContent = this.formatCurrency(totalOmset);
    if (elOrders) elOrders.textContent = totalOrders.toString();
    if (elProducts) elProducts.textContent = activeProducts.toString();
    if (elAvg) elAvg.textContent = this.formatCurrency(avgOrder);
  }

  renderAnalyticsChart() {
    const canvas = document.getElementById('analyticsChartCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement.clientWidth || 800;
    canvas.height = 240;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const values = [25000, 45000, 30000, 65000, 80000, 110000, 95000];
    const maxValue = Math.max(...values, 120000);

    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const stepX = chartWidth / (days.length - 1);

    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();

      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px Plus Jakarta Sans, sans-serif';
      const labelVal = Math.round(maxValue - (maxValue / 4) * i);
      ctx.fillText('Rp ' + (labelVal / 1000) + 'k', 5, y + 3);
    }

    const points = values.map((val, idx) => {
      const x = padding + idx * stepX;
      const y = padding + chartHeight - (val / maxValue) * chartHeight;
      return { x, y };
    });

    const grad = ctx.createLinearGradient(0, padding, 0, padding + chartHeight);
    grad.addColorStop(0, 'rgba(37, 99, 235, 0.35)');
    grad.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, padding + chartHeight);
    ctx.lineTo(points[0].x, padding + chartHeight);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 3;
    ctx.stroke();

    points.forEach((p, idx) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#2563EB';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#64748B';
      ctx.font = '11px Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(days[idx], p.x, canvas.height - 15);
    });
  }

  exportMutasiCSV() {
    if (this.transactions.length === 0) {
      alert('Belum ada transaksi untuk diekspor!');
      return;
    }

    const headers = ['ID Transaksi', 'Waktu', 'Produk', 'Pelanggan', 'Kontak', 'Metode Bayar', 'Nominal', 'Status'];
    const rows = this.transactions.map(t => [
      t.id,
      `"${t.timestamp}"`,
      `"${t.productTitle}"`,
      `"${t.customerName}"`,
      `"${t.customerContact}"`,
      `"${t.paymentMethod}"`,
      t.amount,
      `"${t.paymentStatus}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Mutasi_Penjualan_Alifio_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast('File CSV berhasil diunduh!');
  }

  // --- AUTH & ROLES ---
  openAuthModal(initialTab = 'login', force = false) {
    const modal = document.getElementById('authModal');
    if (!modal) return;

    if (this.currentUser && !force && initialTab !== 'seller_login' && initialTab !== 'seller_required') {
      this.openAccountModal();
      return;
    }

    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));

    this.switchAuthTab('login');
    if (initialTab === 'seller_login' || initialTab === 'seller_required') {
      this.selectAuthRole('seller');
      if (initialTab === 'seller_required') {
        this.showToast('🔒 Halaman ini khusus Seller/Admin. Silakan login sebagai Seller.');
      }
    } else if (initialTab === 'signup') {
      this.switchAuthTab('signup');
    } else {
      this.selectAuthRole('customer');
    }

    modal.classList.add('active');
  }

  switchAuthTab(tab) {
    const tabLoginBtn = document.getElementById('tabLoginBtn');
    const tabSignupBtn = document.getElementById('tabSignupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (tab === 'login') {
      if (tabLoginBtn) tabLoginBtn.classList.add('active');
      if (tabSignupBtn) tabSignupBtn.classList.remove('active');
      if (loginForm) loginForm.style.display = 'block';
      if (signupForm) signupForm.style.display = 'none';
    } else {
      if (tabLoginBtn) tabLoginBtn.classList.remove('active');
      if (tabSignupBtn) tabSignupBtn.classList.add('active');
      if (loginForm) loginForm.style.display = 'none';
      if (signupForm) signupForm.style.display = 'block';
    }
  }

  // --- SELLER AUTH REQUIREMENT & ROLE TOGGLE ---
  selectAuthRole(role) {
    const roleInput = document.getElementById('loginRoleMode');
    const btnCust = document.getElementById('btnRoleCustomer');
    const btnSell = document.getElementById('btnRoleSeller');
    const notice = document.getElementById('authSellerNotice');
    const submitBtnText = document.getElementById('loginSubmitBtnText');
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');

    if (roleInput) roleInput.value = role;

    if (role === 'seller') {
      if (btnCust) {
        btnCust.style.backgroundColor = '#FFFFFF';
        btnCust.style.borderColor = '#CBD5E1';
        btnCust.style.color = '#475569';
      }
      if (btnSell) {
        btnSell.style.backgroundColor = '#EFF6FF';
        btnSell.style.borderColor = 'var(--color-primary)';
        btnSell.style.color = 'var(--color-primary)';
      }
      if (notice) notice.style.display = 'block';
      if (submitBtnText) submitBtnText.textContent = 'Masuk sebagai Seller';
      if (emailInput) {
        emailInput.value = 'admin@alifio.com';
      }
      if (passInput) {
        passInput.value = '';
        passInput.placeholder = 'Password Akun Seller Anda';
        passInput.focus();
      }
      this.showToast('🔒 Mode Seller: Masukkan email dan password akun Seller yang telah disetujui Admin.');
    } else {
      if (btnCust) {
        btnCust.style.backgroundColor = '#EFF6FF';
        btnCust.style.borderColor = 'var(--color-primary)';
        btnCust.style.color = 'var(--color-primary)';
      }
      if (btnSell) {
        btnSell.style.backgroundColor = '#FFFFFF';
        btnSell.style.borderColor = '#CBD5E1';
        btnSell.style.color = '#475569';
      }
      if (notice) notice.style.display = 'none';
      if (submitBtnText) submitBtnText.textContent = 'Masuk Sekarang';
      if (emailInput && emailInput.value === 'admin@alifio.com') {
        emailInput.value = 'customer@alifio.com';
      }
      if (passInput) {
        passInput.value = '123456';
        passInput.placeholder = '••••••••';
      }
    }
  }

  submitLoginForm() {
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    const roleModeInput = document.getElementById('loginRoleMode');

    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const pass = passInput ? passInput.value.trim() : '';
    const roleMode = roleModeInput ? roleModeInput.value : 'customer';

    if (!email) {
      this.showToast('⚠️ Silakan masukkan email Anda.');
      return;
    }
    if (!pass) {
      this.showToast('⚠️ Silakan masukkan password Anda.');
      return;
    }

    if (roleMode === 'seller') {
      const approvedList = (this.settings.approvedSellerEmails || ['admin@alifio.com']).map(e => e.toLowerCase());
      if (!approvedList.includes(email)) {
        alert(`❌ Akses Seller Ditolak!\n\nEmail "${email}" belum disetujui (diapprove) oleh Admin sebagai Seller.\n\nHarap hubungi Admin atau masuk sebagai Customer terlebih dahulu, lalu ajukan permohonan Seller di menu Akun.`);
        return;
      }
      // Approved seller access granted
      this.handleLogin(email, email.split('@')[0], 'seller');
      this.showToast(`🎉 Login Seller Berhasil! Selamat datang di Toko Anda.`);
      this.switchView('dashboard');
      return;
    }

    // Customer login
    this.handleLogin(email, email.split('@')[0], 'customer');
  }

  submitSignupForm() {
    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passInput = document.getElementById('regPassword');

    const name = nameInput ? nameInput.value.trim() : 'Customer Baru';
    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const pass = passInput ? passInput.value.trim() : '';

    if (!email) {
      this.showToast('⚠️ Masukkan email untuk mendaftar.');
      return;
    }

    this.handleLogin(email, name, 'customer');
    this.showToast(`🎉 Pendaftaran berhasil! Selamat datang, ${name}.`);
  }

  handleLogin(email, name, role = 'customer') {
    this.currentUser = {
      id: 'USR-' + String(new Date().getTime()).slice(-4),
      name: name || (email.split('@')[0]),
      email: email,
      role: role
    };

    this.saveState();
    this.updateUserUI();
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));

    this.showToast(`Selamat datang, ${this.currentUser.name}!`);
  }

  upgradeToSeller() {
    if (!this.currentUser) {
      this.showToast('Login terlebih dahulu.');
      return;
    }
    // Check if admin (always allowed)
    if (this.currentUser.email === 'admin@alifio.com') {
      this.currentUser.role = 'seller';
      this.saveState();
      this.updateUserUI();
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      this.showToast('🎉 Mode Seller aktif!');
      this.switchView('dashboard');
      return;
    }
    // Check approved list
    const approvedList = this.settings.approvedSellerEmails || [];
    if (approvedList.includes(this.currentUser.email)) {
      this.currentUser.role = 'seller';
      this.saveState();
      this.updateUserUI();
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      this.showToast('🎉 Akun kamu sudah disetujui Admin! Mode Seller aktif.');
      this.switchView('dashboard');
    } else {
      this.requestBecomeSeller();
    }
  }

  requestBecomeSeller() {
    if (!this.currentUser) return;
    const existing = (this.settings.sellerRequests || []).find(r => r.email === this.currentUser.email);
    if (existing) {
      this.showToast('⏳ Permintaan sudah terkirim. Tunggu persetujuan Admin.');
      return;
    }
    if (!this.settings.sellerRequests) this.settings.sellerRequests = [];
    this.settings.sellerRequests.push({
      email: this.currentUser.email,
      name: this.currentUser.name,
      requestedAt: new Date().toLocaleString('id-ID')
    });
    this.saveState();
    this.showToast('✅ Permintaan jadi Seller terkirim! Tunggu persetujuan Admin.');
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }

  switchToCustomer() {
    if (!this.currentUser) return;
    this.currentUser.role = 'customer';
    this.saveState();
    this.updateUserUI();
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    this.showToast('Beralih ke mode Customer');
    this.switchView('home');
  }

  logout() {
    this.currentUser = null;
    this.saveState();
    this.updateUserUI();
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    this.showToast('Anda berhasil keluar');
    this.switchView('home');
  }

  openAccountModal() {
    const modal = document.getElementById('accountModal');
    if (!modal) return;

    const nameEl = document.getElementById('accountName');
    const emailEl = document.getElementById('accountEmail');
    const roleBadge = document.getElementById('accountRoleBadge');
    const sellerActionBtn = document.getElementById('accountSellerActionBtn');
    const bannerTitle = document.getElementById('accountSellerBannerTitle');
    const bannerDesc = document.getElementById('accountSellerBannerDesc');
    const banner = document.getElementById('accountSellerBanner');

    if (this.currentUser) {
      if (nameEl) nameEl.textContent = this.currentUser.name;
      if (emailEl) emailEl.textContent = this.currentUser.email;
      if (roleBadge) {
        roleBadge.textContent = this.currentUser.role.toUpperCase();
        roleBadge.className = `user-role-badge ${this.currentUser.role === 'seller' ? 'badge-seller' : 'badge-customer'}`;
      }

      if (sellerActionBtn && banner) {
        if (this.currentUser.role === 'seller') {
          // Already seller
          if (bannerTitle) bannerTitle.textContent = 'Mode Seller Aktif';
          if (bannerDesc) bannerDesc.textContent = 'Kamu sudah dalam mode Seller. Akses Dashboard, Analitik, dan Settings tersedia.';
          sellerActionBtn.innerHTML = '<i class="fa-solid fa-arrow-right-arrow-left"></i> Kembali ke Mode Customer';
          sellerActionBtn.onclick = () => this.switchToCustomer();
        } else {
          // Check if request already sent
          const requested = (this.settings.sellerRequests || []).find(r => r.email === this.currentUser.email);
          const approved = (this.settings.approvedSellerEmails || []).includes(this.currentUser.email);
          if (approved) {
            if (bannerTitle) bannerTitle.textContent = 'Disetujui Admin — Aktifkan Seller';
            if (bannerDesc) bannerDesc.textContent = 'Admin telah menyetujui akunmu. Klik untuk aktifkan mode Seller.';
            sellerActionBtn.innerHTML = '<i class="fa-solid fa-store"></i> Aktifkan Mode Seller';
            sellerActionBtn.onclick = () => this.upgradeToSeller();
          } else if (requested) {
            if (bannerTitle) bannerTitle.textContent = 'Permintaan Terkirim';
            if (bannerDesc) bannerDesc.textContent = `Permintaan dikirim ${requested.requestedAt}. Tunggu persetujuan Admin.`;
            sellerActionBtn.innerHTML = '<i class="fa-solid fa-clock"></i> Menunggu Persetujuan...';
            sellerActionBtn.disabled = true;
            sellerActionBtn.style.opacity = '0.6';
          } else {
            if (bannerTitle) bannerTitle.textContent = 'Jadi Seller (Jual Produk)';
            if (bannerDesc) bannerDesc.textContent = 'Ingin berjualan di Alifio? Kirim permintaan ke Admin untuk mendapatkan akses Seller.';
            sellerActionBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Minta Jadi Seller';
            sellerActionBtn.disabled = false;
            sellerActionBtn.style.opacity = '1';
            sellerActionBtn.onclick = () => this.requestBecomeSeller();
          }
        }
      }

      const ownerPrompt = document.getElementById('accountOwnerLoginPrompt');
      if (ownerPrompt) {
        ownerPrompt.style.display = this.currentUser.role === 'seller' ? 'none' : 'block';
      }
    }

    modal.classList.add('active');
  }

  updateUserUI() {
    const authBtnContainer = document.getElementById('navbarAuthContainer');
    if (!authBtnContainer) return;

    if (this.currentUser) {
      const isSeller = this.currentUser.role === 'seller';
      authBtnContainer.innerHTML = `
        <div class="btn-user-profile" onclick="app.openAccountModal()">
          <div class="user-avatar-mini">${this.currentUser.name.charAt(0).toUpperCase()}</div>
          <span style="font-size: 0.85rem; font-weight: 700;">${this.currentUser.name}</span>
          <span class="user-role-badge ${isSeller ? 'badge-seller' : 'badge-customer'}">${isSeller ? 'Seller' : 'Customer'}</span>
        </div>
      `;
      // Show/hide seller-only nav items
      document.querySelectorAll('.nav-link-seller-only').forEach(el => {
        el.classList.toggle('visible', isSeller);
      });
      document.querySelectorAll('.mobile-nav-seller-only').forEach(el => {
        el.style.display = isSeller ? 'block' : 'none';
      });
    } else {
      authBtnContainer.innerHTML = `
        <button class="btn-auth-pill" onclick="app.openAuthModal('login')">
          <i class="fa-solid fa-user-circle"></i>
          <span>${this.t('nav_login')}</span>
        </button>
      `;
      // Hide seller-only nav items
      document.querySelectorAll('.nav-link-seller-only').forEach(el => el.classList.remove('visible'));
      document.querySelectorAll('.mobile-nav-seller-only').forEach(el => el.style.display = 'none');
    }
  }

  // --- UPLOAD HANDLERS (QRIS, LOGO, STEPS) ---
  handleQrisFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      this.settings.qrisImageUrl = dataUrl;
      const previewImg = document.getElementById('qrisPreviewImg');
      if (previewImg) previewImg.src = dataUrl;
      const inputUrl = document.getElementById('settingQrisImage');
      if (inputUrl) inputUrl.value = dataUrl;
      this.saveState();
      this.showToast('Foto QRIS baru berhasil diunggah!');
    };
    reader.readAsDataURL(file);
  }

  // --- HERO VIDEO UPLOAD ---
  handleHeroVideoUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    this.settings.videoUploadedBlob = url;
    this.settings.videoUrl = ''; // Clear URL field when file uploaded
    const urlInput = document.getElementById('settingVideoUrl');
    if (urlInput) urlInput.value = '';
    this.showHeroVideoPreview(url);
    this.saveState();
    this.showToast(`🎥 Video "${file.name}" berhasil diunggah!`);
  }

  showHeroVideoPreview(src) {
    const previewBox = document.getElementById('heroVideoCurrentPreview');
    const videoEl = document.getElementById('heroVideoPreviewEl');
    if (previewBox && videoEl) {
      videoEl.src = src;
      previewBox.style.display = 'block';
    }
  }

  clearHeroVideo() {
    this.settings.videoUploadedBlob = '';
    this.settings.videoUrl = '';
    const urlInput = document.getElementById('settingVideoUrl');
    if (urlInput) urlInput.value = '';
    const previewBox = document.getElementById('heroVideoCurrentPreview');
    if (previewBox) previewBox.style.display = 'none';
    this.saveState();
    this.showToast('Video dihapus. Akan tampil video animasi demo.');
  }

  // --- STEP MEDIA TYPE TOGGLE (IMAGE / VIDEO) ---
  setStepMediaType(stepNum, type) {
    this.stepMediaTypes[stepNum] = type;
    const key = 'step' + stepNum;
    if (!this.settings[key]) this.settings[key] = Object.assign({}, DEFAULT_SETTINGS[key]);
    this.settings[key].mediaType = type;

    // Update toggle buttons
    const imgBtn = document.getElementById(`step${stepNum}TypeImg`);
    const vidBtn = document.getElementById(`step${stepNum}TypeVid`);
    if (imgBtn) imgBtn.classList.toggle('active', type === 'image');
    if (vidBtn) vidBtn.classList.toggle('active', type === 'video');

    // Update upload area label
    const label = document.getElementById(`step${stepNum}UploadLabel`);
    if (label) label.textContent = type === 'video' ? 'Klik untuk pilih file video' : 'Klik untuk pilih file gambar';
  }

  triggerStepUpload(stepNum) {
    const type = this.stepMediaTypes[stepNum] || 'image';
    if (type === 'video') {
      document.getElementById(`step${stepNum}VideoInput`).click();
    } else {
      document.getElementById(`step${stepNum}FileInput`).click();
    }
  }

  handleStepVideoUpload(stepNum, event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const key = 'step' + stepNum;
    if (!this.settings[key]) this.settings[key] = Object.assign({}, DEFAULT_SETTINGS[key]);
    this.settings[key].videoSrc = url;
    this.settings[key].mediaType = 'video';

    // Update preview thumbnail
    const previewDiv = document.getElementById(`step${stepNum}MediaPreview`);
    if (previewDiv) {
      previewDiv.innerHTML = `<video src="${url}" muted loop autoplay playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
    }
    this.saveState();
    this.renderSteps();
    this.showToast(`🎥 Video Langkah 0${stepNum} berhasil diunggah!`);
  }

  resetQrisToDefault() {
    this.settings.qrisImageUrl = DEFAULT_SETTINGS.qrisImageUrl;
    const previewImg = document.getElementById('qrisPreviewImg');
    if (previewImg) previewImg.src = this.settings.qrisImageUrl;
    const inputUrl = document.getElementById('settingQrisImage');
    if (inputUrl) inputUrl.value = this.settings.qrisImageUrl;

    this.saveState();
    this.showToast('Foto QRIS direset ke default');
  }

  handleLogoFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      this.settings.logoImageUrl = dataUrl;
      const previewImg = document.getElementById('logoPreviewImg');
      if (previewImg) previewImg.src = dataUrl;

      this.saveState();
      this.renderLogo();
      this.showToast('Logo toko berhasil diubah!');
    };
    reader.readAsDataURL(file);
  }

  resetLogoToDefault() {
    this.settings.logoImageUrl = DEFAULT_SETTINGS.logoImageUrl;
    this.settings.logoText = DEFAULT_SETTINGS.logoText;
    const previewImg = document.getElementById('logoPreviewImg');
    if (previewImg) previewImg.src = this.settings.logoImageUrl;
    const textInput = document.getElementById('settingLogoText');
    if (textInput) textInput.value = this.settings.logoText;

    this.saveState();
    this.renderLogo();
    this.showToast('Logo toko direset ke default');
  }

  handleStepFileUpload(stepNum, event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const key = 'step' + stepNum;
      if (!this.settings[key]) this.settings[key] = Object.assign({}, DEFAULT_SETTINGS[key]);
      this.settings[key].image = dataUrl;
      this.settings[key].crop = 'center';

      const previewImg = document.getElementById(`step${stepNum}PreviewImg`);
      if (previewImg) previewImg.src = dataUrl;

      this.saveState();
      this.renderSteps();
      this.showToast(`Gambar Langkah 0${stepNum} berhasil diubah!`);
    };
    reader.readAsDataURL(file);
  }

  // --- SETTINGS FORM POPULATION & SAVE ---
  populateSettingsForm() {
    const form = document.getElementById('settingsForm');
    if (!form) return;

    // QRIS
    document.getElementById('settingQrisImage').value = this.settings.qrisImageUrl || '';
    document.getElementById('settingMerchantName').value = this.settings.qrisMerchantName || '';
    const qrisPreview = document.getElementById('qrisPreviewImg');
    if (qrisPreview) qrisPreview.src = this.settings.qrisImageUrl;

    // Logo
    document.getElementById('settingLogoText').value = this.settings.logoText || 'Alifio';
    const logoPreview = document.getElementById('logoPreviewImg');
    if (logoPreview) logoPreview.src = this.settings.logoImageUrl || 'assets/logo.svg';

    // Steps
    const s1 = this.settings.step1 || DEFAULT_SETTINGS.step1;
    const s2 = this.settings.step2 || DEFAULT_SETTINGS.step2;
    const s3 = this.settings.step3 || DEFAULT_SETTINGS.step3;

    document.getElementById('settingStep1Title').value = s1.title;
    document.getElementById('settingStep1Desc').value = s1.desc;
    document.getElementById('settingStep2Title').value = s2.title;
    document.getElementById('settingStep2Desc').value = s2.desc;
    document.getElementById('settingStep3Title').value = s3.title;
    document.getElementById('settingStep3Desc').value = s3.desc;

    // Update step media preview thumbnails
    [1, 2, 3].forEach(n => {
      const sk = 'step' + n;
      const s = this.settings[sk];
      const previewDiv = document.getElementById(`step${n}MediaPreview`);
      if (previewDiv && s) {
        if (s.mediaType === 'video' && s.videoSrc) {
          previewDiv.innerHTML = `<video src="${s.videoSrc}" muted loop autoplay playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
        } else {
          previewDiv.innerHTML = `<img id="step${n}PreviewImg" src="${s.image}" alt="Step ${n}" style="width:100%;height:100%;object-fit:cover;" />`;
        }
      }
      // Sync toggle buttons
      const mtype = s && s.mediaType === 'video' ? 'video' : 'image';
      this.setStepMediaType(n, mtype);
    });

    // Video (hero widget)
    document.getElementById('settingVideoUrl').value = this.settings.videoUrl || '';
    document.getElementById('settingVideoTitle').value = this.settings.videoTitle || '';
    if (this.settings.videoUploadedBlob) this.showHeroVideoPreview(this.settings.videoUploadedBlob);

    // Dynamic platforms
    this.renderDynamicPlatforms();

    // Seller approval list
    this.renderSellerApprovalList();

    // Spreadsheet
    document.getElementById('settingSpreadsheetUrl').value = this.settings.spreadsheetUrl || '';
  }

  saveSettingsFromForm() {
    // QRIS
    this.settings.qrisImageUrl = document.getElementById('settingQrisImage').value.trim() || DEFAULT_SETTINGS.qrisImageUrl;
    this.settings.qrisMerchantName = document.getElementById('settingMerchantName').value.trim() || 'ALIFIO OFFICIAL';

    // Logo
    this.settings.logoText = document.getElementById('settingLogoText').value.trim() || 'Alifio';

    // Steps titles & descs (media already saved on upload)
    ['step1','step2','step3'].forEach((key, i) => {
      const n = i + 1;
      if (!this.settings[key]) this.settings[key] = Object.assign({}, DEFAULT_SETTINGS[key]);
      this.settings[key].title = document.getElementById(`settingStep${n}Title`).value.trim() || DEFAULT_SETTINGS[key].title;
      this.settings[key].desc = document.getElementById(`settingStep${n}Desc`).value.trim() || DEFAULT_SETTINGS[key].desc;
    });

    // Video (hero widget) - URL field (blob already saved on upload)
    const videoUrlVal = document.getElementById('settingVideoUrl').value.trim();
    if (videoUrlVal) {
      this.settings.videoUrl = videoUrlVal;
      this.settings.videoUploadedBlob = ''; // URL takes priority
    }
    this.settings.videoTitle = document.getElementById('settingVideoTitle').value.trim() || DEFAULT_SETTINGS.videoTitle;

    // Platforms: read from DOM rows
    this.savePlatformsFromDOM();

    // Spreadsheet
    this.settings.spreadsheetUrl = document.getElementById('settingSpreadsheetUrl').value.trim();

    this.saveState();
    this.renderLogo();
    this.renderSteps();
    this.renderPopularItems();
    this.showToast('✅ Semua pengaturan berhasil disimpan!');
  }

  // --- DYNAMIC PLATFORMS ---
  renderDynamicPlatforms() {
    const container = document.getElementById('dynamicPlatformsList');
    if (!container) return;
    const platforms = this.settings.platforms || [];
    if (platforms.length === 0) {
      container.innerHTML = `<p style="font-size:0.85rem;color:#94A3B8;text-align:center;padding:12px;">Belum ada platform. Klik "Tambah Platform Baru" di bawah.</p>`;
      return;
    }
    container.innerHTML = platforms.map((p, idx) => `
      <div class="platform-row" id="platformRow_${p.id}">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="platform-row-icon"><i class="${p.icon}" style="color:${p.color};"></i></div>
          <input type="text" class="form-input" style="font-size:0.82rem;" value="${this.escapeHtml(p.name)}" placeholder="Nama Platform" data-platform-id="${p.id}" data-field="name" />
        </div>
        <input type="text" class="form-input" style="font-size:0.82rem;" value="${this.escapeHtml(p.value)}" placeholder="Link / Nomor / Info" data-platform-id="${p.id}" data-field="value" />
        <button type="button" class="btn-remove-platform" onclick="app.removePlatformRow('${p.id}')" title="Hapus Platform">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');
  }

  addPlatformRow() {
    if (!this.settings.platforms) this.settings.platforms = [];
    const newId = 'p' + Date.now();
    this.settings.platforms.push({ id: newId, name: 'Platform Baru', icon: 'fa-solid fa-link', color: '#8B5CF6', value: '', type: 'url' });
    this.renderDynamicPlatforms();
  }

  removePlatformRow(platformId) {
    this.settings.platforms = (this.settings.platforms || []).filter(p => p.id !== platformId);
    this.renderDynamicPlatforms();
  }

  savePlatformsFromDOM() {
    const container = document.getElementById('dynamicPlatformsList');
    if (!container || !this.settings.platforms) return;
    this.settings.platforms.forEach(p => {
      const nameInput = container.querySelector(`[data-platform-id="${p.id}"][data-field="name"]`);
      const valueInput = container.querySelector(`[data-platform-id="${p.id}"][data-field="value"]`);
      if (nameInput) p.name = nameInput.value.trim();
      if (valueInput) p.value = valueInput.value.trim();
    });
  }

  // --- SELLER APPROVAL (ADMIN) ---
  renderSellerApprovalList() {
    const container = document.getElementById('sellerApprovalList');
    if (!container) return;

    const requests = this.settings.sellerRequests || [];
    const approved = this.settings.approvedSellerEmails || [];

    if (requests.length === 0 && approved.filter(e => e !== 'admin@alifio.com').length === 0) {
      container.innerHTML = `<p style="font-size:0.85rem;color:#92400E;text-align:center;padding:12px;">Belum ada permintaan jadi Seller.</p>`;
      return;
    }

    let html = '';
    requests.forEach(r => {
      const isApproved = approved.includes(r.email);
      html += `<div class="seller-approval-row">
        <div class="user-info">
          <div class="user-name">${this.escapeHtml(r.name)}</div>
          <div class="user-email">${this.escapeHtml(r.email)} &mdash; ${r.requestedAt}</div>
        </div>
        <button type="button" class="btn-approve-seller ${isApproved ? 'approved' : 'pending'}" onclick="app.toggleSellerApproval('${r.email}')">
          ${isApproved ? '<i class="fa-solid fa-check"></i> Disetujui' : '<i class="fa-solid fa-user-check"></i> Setujui'}
        </button>
      </div>`;
    });

    // Show admin-approved (not from requests)
    approved.filter(e => e !== 'admin@alifio.com' && !requests.find(r => r.email === e)).forEach(email => {
      html += `<div class="seller-approval-row">
        <div class="user-info">
          <div class="user-name">${this.escapeHtml(email)}</div>
          <div class="user-email">Ditambahkan manual oleh Admin</div>
        </div>
        <button type="button" class="btn-approve-seller approved" onclick="app.toggleSellerApproval('${email}')">
          <i class="fa-solid fa-check"></i> Disetujui
        </button>
      </div>`;
    });

    container.innerHTML = html;
  }

  toggleSellerApproval(email) {
    if (!this.settings.approvedSellerEmails) this.settings.approvedSellerEmails = [];
    const idx = this.settings.approvedSellerEmails.indexOf(email);
    if (idx > -1) {
      this.settings.approvedSellerEmails.splice(idx, 1);
      this.showToast(`Akses Seller dicabut dari ${email}`);
    } else {
      this.settings.approvedSellerEmails.push(email);
      this.showToast(`✅ ${email} disetujui sebagai Seller!`);
    }
    this.saveState();
    this.renderSellerApprovalList();
  }

  approveSellerByEmail() {
    const input = document.getElementById('approveEmailInput');
    const email = input ? input.value.trim().toLowerCase() : '';
    if (!email) { this.showToast('Masukkan email terlebih dahulu'); return; }
    if (!this.settings.approvedSellerEmails) this.settings.approvedSellerEmails = [];
    if (this.settings.approvedSellerEmails.includes(email)) {
      this.showToast('Email ini sudah ada di daftar Seller.');
      return;
    }
    this.settings.approvedSellerEmails.push(email);
    // Also add to requests list if not there
    if (!this.settings.sellerRequests) this.settings.sellerRequests = [];
    if (!this.settings.sellerRequests.find(r => r.email === email)) {
      this.settings.sellerRequests.push({ email, name: email, requestedAt: new Date().toLocaleString('id-ID') });
    }
    if (input) input.value = '';
    this.saveState();
    this.renderSellerApprovalList();
    this.showToast(`✅ ${email} berhasil ditambahkan sebagai Seller!`);
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // --- SPREADSHEET LIVE SYNC INTEGRATION ---
  async testSpreadsheetConnection() {
    const url = document.getElementById('settingSpreadsheetUrl').value.trim();
    if (!url) {
      alert('Silakan tempel URL Web App Google Apps Script terlebih dahulu!');
      return;
    }

    this.showToast('Menghubungkan ke Google Apps Script...');
    try {
      const response = await fetch(`${url}?action=ping`);
      const data = await response.json();
      if (data.status === 'success') {
        alert('✅ Berhasil terhubung dengan Google Spreadsheet!');
      } else {
        alert('Gagal: ' + JSON.stringify(data));
      }
    } catch (e) {
      alert('Koneksi terkirim. Catatan: Untuk CORS Google Apps Script, data dapat di-post langsung saat transaksi berlangsung.');
    }
  }

  async syncTransactionToSpreadsheet(trx) {
    if (!this.settings.spreadsheetUrl) return;
    try {
      await fetch(this.settings.spreadsheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'addTransaction', transaction: trx })
      });
      console.log('Transaction synced to Spreadsheet');
    } catch (err) {
      console.warn('Sync error:', err);
    }
  }

  async syncProductToSpreadsheet(prod) {
    if (!this.settings.spreadsheetUrl) return;
    try {
      await fetch(this.settings.spreadsheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'addProduct', product: prod })
      });
      console.log('Product synced to Spreadsheet');
    } catch (err) {
      console.warn('Sync error:', err);
    }
  }

  showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #38BDF8;"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  formatCurrency(num) {
    return 'Rp' + Number(num || 0).toLocaleString('id-ID');
  }

  bindEvents() {
    // Nav links click
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.dataset.view;
        if (view) this.switchView(view);
      });
    });

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang) this.setLanguage(lang);
      });
    });

    // Mobile Hamburger
    const hamburger = document.getElementById('hamburgerBtn');
    const drawer = document.getElementById('mobileMenuDrawer');
    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => {
        drawer.classList.toggle('active');
      });
    }

    // Hero Search Input
    const heroInput = document.getElementById('heroSearchInput');
    if (heroInput) {
      heroInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.executeHeroSearch();
        }
      });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-btn, .btn-modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      });
    });

    // Close on overlay backdrop click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
          if (overlay.id === 'videoModal') {
            this.pauseVideoPlayback();
          }
        }
      });
    });

    // Close Dropdown on outside click
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('sortDropdown');
      const menu = document.getElementById('sortDropdownMenu');
      const btn = document.getElementById('sortDropdownBtn');
      if (dropdown && !dropdown.contains(e.target)) {
        if (menu) menu.classList.remove('show');
        if (btn) btn.classList.remove('active');
      }
    });

    // Close Modals & Dropdown on Escape Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        const menu = document.getElementById('sortDropdownMenu');
        const btn = document.getElementById('sortDropdownBtn');
        if (menu) menu.classList.remove('show');
        if (btn) btn.classList.remove('active');
      }
    });

    // Dashboard Table Search
    const tableSearch = document.getElementById('dashboardTableSearch');
    if (tableSearch) {
      tableSearch.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        document.querySelectorAll('#dashboardProductsTbody tr').forEach(row => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(q) ? '' : 'none';
        });
      });
    }

    const mutasiSearch = document.getElementById('mutasiTableSearch');
    if (mutasiSearch) {
      mutasiSearch.addEventListener('input', (e) => {
        this.renderMutasiTable(e.target.value);
      });
    }

    window.addEventListener('resize', () => {
      if (this.activeView === 'analytics') {
        this.renderAnalyticsChart();
      }
    });
  }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new AlifioApp();
});
