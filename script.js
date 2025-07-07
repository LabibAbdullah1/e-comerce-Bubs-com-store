// Data produk dummy (bisa diganti dengan data dari API/database)
const productsData = [
  {
    id: 1,
    name: "Laptop Gaming XYZ Pro (RTX 4070)",
    price: 25000000,
    image:
      "https://www.aorus.com/image/gallery/gallery-1615974528.jpg",
    category: "laptop",
  },
  {
    id: 2,
    name: "PC Rakitan High-End (Core i9, 32GB RAM)",
    price: 20000000,
    image: "https://danscustombuiltgamingbeasts.com/cdn/shop/files/IMG_8061_cff4f0da-da45-407d-9c73-5a0c2620b086.jpg?v=1699466413&width=1946",
    category: "pc",
  },
  {
    id: 3,
    name: "SSD NVMe 1TB Samsung 980 Pro",
    price: 1800000,
    image: "https://m.media-amazon.com/images/I/61Mo8ug0aQS.jpg",
    category: "sparepart",
  },
  {
    id: 4,
    name: "RAM DDR4 16GB (2x8GB) Corsair Vengeance",
    price: 900000,
    image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/31/101513e7-762a-4ddc-b63d-3408e7a5e799.jpg",
    category: "sparepart",
  },
  {
    id: 5,
    name: "VGA Card AMD Radeon RX 7900 XT",
    price: 15000000,
    image: "https://static.gigabyte.com/StaticFile/Image/Global/868436ba12e23fc0d98e26322a618a2c/Product/32810/png/1000",
    category: "sparepart",
  },
  {
    id: 6,
    name: "Motherboard ASUS ROG Strix Z790-E",
    price: 7500000,
    image: "https://dlcdnwebimgs.asus.com/files/media/E8F9316B-CB25-42B5-9422-CA99338CDB38/v1/img/performance/pcie-5.0.png",
    category: "sparepart",
  },
  {
    id: 7,
    name: 'Monitor Gaming Curved 27" (144Hz)',
    price: 4500000,
    image: "https://images.samsung.com/is/image/samsung/id-curved-cfg70-lc24fg70fqexxd-frontblack-61648483?$684_547_PNG$",
    category: "pc",
  },
  {
    id: 8,
    name: "Keyboard Mekanikal Gaming RGB",
    price: 800000,
    image: "https://images-cdn.ubuy.co.id/633adee19a3ab55b9f3e90b3-e-t-mechanical-gaming-keyboard-rgb.jpg",
    category: "sparepart",
  },
  {
    id: 9,
    name: "Mouse Gaming Logitech G502 Hero",
    price: 650000,
    image: "https://down-id.img.susercontent.com/file/edffcbab790fdddeacca9d7278f2e8db",
    category: "sparepart",
  },
  {
    id: 10,
    name: "Power Supply Corsair RM850x (850W)",
    price: 1700000,
    image: "https://img.gkbcdn.com/p/2017-10-31/corsair-rm850x-850w-power-supply-1571972045793._w500_p1_.jpg",
    category: "sparepart",
  },
  {
    id: 11,
    name: "Casing PC NZXT H5 Flow",
    price: 1300000,
    image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/7/bb7c056b-379c-4928-a62b-f9052ceaa244.jpg",
    category: "sparepart",
  },
  {
    id: 12,
    name: "Laptop Ultrabook Dell XPS 15",
    price: 22000000,
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=520&qlt=100,1&resMode=sharp2&size=520,320&chrss=full",
    category: "laptop",
  },
  {
    id: 13,
    name: "PC All-in-One HP Pavilion 24",
    price: 10000000,
    image: "https://m.media-amazon.com/images/I/91Sj+WPy61L.jpg",
    category: "pc",
  },
  {
    id: 14,
    name: "Prosesor Intel Core i7-14700K",
    price: 6500000,
    image: "https://laptop15.vn/wp-content/uploads/2024/04/Intel-Core-I7-14700K-2-300x254.jpg",
    category: "sparepart",
  },
  {
    id: 15,
    name: "Cooler CPU Noctua NH-D15",
    price: 1400000,
    image: "https://softwareg.com.au/cdn/shop/articles/img_9470.jpg?v=1707734563",
    category: "sparepart",
  },
];

let cart = [];
let selectedPaymentMethod = null;

const productGrid = document.getElementById("productGrid");
const cartCountSpan = document.getElementById("cartCount");
const cartIcon = document.getElementById("cartIcon");
const cartPaymentSection = document.getElementById("cartPaymentSection");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalSpan = document.getElementById("cartTotal");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const paymentOptionsContainer = document.getElementById("paymentOptions");
const checkoutBtn = document.getElementById("checkoutBtn");
const searchInput = document.getElementById("searchInput");

// Address Form Elements
const fullNameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("phone");
const provinceSelect = document.getElementById("province");
const citySelect = document.getElementById("city");
const addressDetailInput = document.getElementById("addressDetail");
const postalCodeInput = document.getElementById("postalCode");

// Error Messages
const fullNameError = document.getElementById("fullNameError");
const phoneError = document.getElementById("phoneError");
const provinceError = document.getElementById("provinceError");
const cityError = document.getElementById("cityError");
const addressDetailError = document.getElementById("addressDetailError");
const postalCodeError = document.getElementById("postalCodeError");

// Receipt Modal Elements
const receiptModal = document.getElementById("receiptModal");
const receiptCloseBtn = document.querySelector("#receiptModal .close-button");
const receiptOrderNumber = document.getElementById("receiptOrderNumber");
const receiptDate = document.getElementById("receiptDate");
const receiptFullName = document.getElementById("receiptFullName");
const receiptPhone = document.getElementById("receiptPhone");
const receiptAddress = document.getElementById("receiptAddress");
const receiptPaymentMethod = document.getElementById("receiptPaymentMethod");
const receiptItemsContainer = document.getElementById("receiptItemsContainer");
const receiptTotal = document.getElementById("receiptTotal");
const downloadReceiptBtn = document.getElementById("downloadReceiptBtn"); // BARU: Referensi tombol unduh

// Dummy data for provinces and cities (In a real application, you'd fetch this from an API)
const provincesData = [
  {
    id: "01",
    name: "Aceh",
    cities: ["Banda Aceh", "Langsa", "Lhokseumawe", "Sabang", "Subulussalam", "Aceh Barat", "Aceh Barat Daya", "Aceh Besar", "Aceh Jaya", "Aceh Selatan", "Aceh Singkil", "Aceh Tamiang", "Aceh Tengah", "Aceh Tenggara", "Aceh Timur", "Aceh Utara", "Bener Meriah", "Bireuen", "Gayo Lues", "Nagan Raya", "Pidie", "Pidie Jaya", "Simeulue"]
  },
  {
    id: "02",
    name: "Sumatera Utara",
    cities: ["Binjai", "Gunungsitoli", "Medan", "Padangsidempuan", "Pematangsiantar", "Sibolga", "Tanjungbalai", "Tebing Tinggi", "Asahan", "Batu Bara", "Dairi", "Deli Serdang", "Humbang Hasundutan", "Karo", "Labuhanbatu", "Labuhanbatu Selatan", "Labuhanbatu Utara", "Langkat", "Mandailing Natal", "Nias", "Nias Barat", "Nias Selatan", "Nias Utara", "Padang Lawas", "Padang Lawas Utara", "Pakpak Bharat", "Samosir", "Serdang Bedagai", "Simalungun", "Tapanuli Selatan", "Tapanuli Tengah", "Tapanuli Utara", "Toba"]
  },
  {
    id: "03",
    name: "Sumatera Barat",
    cities: ["Bukittinggi", "Padang", "Padang Panjang", "Pariaman", "Payakumbuh", "Sawahlunto", "Solok", "Agam", "Dharmasraya", "Kepulauan Mentawai", "Lima Puluh Kota", "Padang Pariaman", "Pasaman", "Pasaman Barat", "Pesisir Selatan", "Sijunjung", "Solok", "Solok Selatan", "Tanah Datar"]
  },
  {
    id: "04",
    name: "Riau",
    cities: ["Dumai", "Pekanbaru", "Bengkalis", "Indragiri Hilir", "Indragiri Hulu", "Kampar", "Kepulauan Meranti", "Kuantan Singingi", "Pelalawan", "Rokan Hilir", "Rokan Hulu", "Siak"]
  },
  {
    id: "05",
    name: "Jambi",
    cities: ["Jambi", "Sungai Penuh", "Batanghari", "Bungo", "Kerinci", "Merangin", "Muaro Jambi", "Sarolangun", "Tanjung Jabung Barat", "Tanjung Jabung Timur", "Tebo"]
  },
  {
    id: "06",
    name: "Sumatera Selatan",
    cities: ["Lubuklinggau", "Pagar Alam", "Palembang", "Prabumulih", "Banyuasin", "Empat Lawang", "Lahat", "Muara Enim", "Musi Banyuasin", "Musi Rawas", "Musi Rawas Utara", "Ogan Ilir", "Ogan Komering Ilir", "Ogan Komering Ulu", "Ogan Komering Ulu Selatan", "Ogan Komering Ulu Timur", "Penukal Abab Lematang Ilir"]
  },
  {
    id: "07",
    name: "Bengkulu",
    cities: ["Bengkulu", "Bengkulu Selatan", "Bengkulu Tengah", "Bengkulu Utara", "Kaur", "Kepahiang", "Lebong", "Mukomuko", "Rejang Lebong", "Seluma"]
  },
  {
    id: "08",
    name: "Lampung",
    cities: ["Bandar Lampung", "Metro", "Lampung Barat", "Lampung Selatan", "Lampung Tengah", "Lampung Timur", "Lampung Utara", "Mesuji", "Pesawaran", "Pesisir Barat", "Pringsewu", "Tanggamus", "Tulang Bawang", "Tulang Bawang Barat", "Way Kanan"]
  },
  {
    id: "09",
    name: "Kepulauan Bangka Belitung",
    cities: ["Pangkalpinang", "Bangka", "Bangka Barat", "Bangka Selatan", "Bangka Tengah", "Belitung", "Belitung Timur"]
  },
  {
    id: "10",
    name: "Kepulauan Riau",
    cities: ["Batam", "Tanjungpinang", "Bintan", "Karimun", "Kepulauan Anambas", "Lingga", "Natuna"]
  },
  {
    id: "11",
    name: "DKI Jakarta",
    cities: ["Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara", "Kepulauan Seribu"]
  },
  {
    id: "12",
    name: "Jawa Barat",
    cities: ["Bandung", "Banjar", "Bekasi", "Bogor", "Cimahi", "Cirebon", "Depok", "Sukabumi", "Tasikmalaya", "Bandung", "Bandung Barat", "Bekasi", "Bogor", "Ciamis", "Cianjur", "Cirebon", "Garut", "Indramayu", "Karawang", "Kuningan", "Majalengka", "Pangandaran", "Purwakarta", "Subang", "Sukabumi", "Sumedang", "Tasikmalaya"]
  },
  {
    id: "13",
    name: "Jawa Tengah",
    cities: ["Magelang", "Pekalongan", "Salatiga", "Semarang", "Surakarta", "Tegal", "Banjarnegara", "Banyumas", "Batang", "Blora", "Boyolali", "Brebes", "Cilacap", "Demak", "Grobogan", "Jepara", "Karanganyar", "Kebumen", "Kendal", "Klaten", "Kudus", "Magelang", "Pati", "Pekalongan", "Pemalang", "Purbalingga", "Purworejo", "Rembang", "Semarang", "Sragen", "Sukoharjo", "Tegal", "Temanggung", "Wonogiri", "Wonosobo"]
  },
  {
    id: "14",
    name: "DI Yogyakarta",
    cities: ["Yogyakarta", "Bantul", "Gunung Kidul", "Kulon Progo", "Sleman"]
  },
  {
    id: "15",
    name: "Jawa Timur",
    cities: ["Batu", "Blitar", "Kediri", "Madiun", "Malang", "Mojokerto", "Pasuruan", "Probolinggo", "Surabaya", "Bangkalan", "Banyuwangi", "Blitar", "Bojonegoro", "Bondowoso", "Gresik", "Jember", "Jombang", "Kediri", "Lamongan", "Lumajang", "Madiun", "Magetan", "Malang", "Mojokerto", "Nganjuk", "Ngawi", "Pacitan", "Pamekasan", "Pasuruan", "Ponorogo", "Probolinggo", "Sampang", "Sidoarjo", "Situbondo", "Sumenep", "Trenggalek", "Tuban", "Tulungagung"]
  },
  {
    id: "16",
    name: "Banten",
    cities: ["Cilegon", "Serang", "Tangerang", "Tangerang Selatan", "Lebak", "Pandeglang", "Serang", "Tangerang"]
  },
  {
    id: "17",
    name: "Bali",
    cities: ["Denpasar", "Badung", "Bangli", "Buleleng", "Gianyar", "Jembrana", "Karangasem", "Klungkung", "Tabanan"]
  },
  {
    id: "18",
    name: "Nusa Tenggara Barat",
    cities: ["Bima", "Mataram", "Bima", "Dompu", "Lombok Barat", "Lombok Tengah", "Lombok Timur", "Lombok Utara", "Sumbawa", "Sumbawa Barat"]
  },
  {
    id: "19",
    name: "Nusa Tenggara Timur",
    cities: ["Kupang", "Alor", "Belu", "Ende", "Flores Timur", "Kupang", "Lembata", "Malaka", "Manggarai", "Manggarai Barat", "Manggarai Timur", "Nagekeo", "Ngada", "Rote Ndao", "Sabu Raijua", "Sikka", "Sumba Barat", "Sumba Barat Daya", "Sumba Tengah", "Sumba Timur", "Timor Tengah Selatan", "Timor Tengah Utara"]
  },
  {
    id: "20",
    name: "Kalimantan Barat",
    cities: ["Pontianak", "Singkawang", "Bengkayang", "Kapuas Hulu", "Kayong Utara", "Ketapang", "Kubu Raya", "Landak", "Melawi", "Mempawah", "Sambas", "Sanggau", "Sekadau", "Sintang"]
  },
  {
    id: "21",
    name: "Kalimantan Tengah",
    cities: ["Palangka Raya", "Barito Selatan", "Barito Timur", "Barito Utara", "Gunung Mas", "Kapuas", "Katingan", "Kotawaringin Barat", "Kotawaringin Timur", "Lamandau", "Murung Raya", "Pulang Pisau", "Sukamara", "Seruyan"]
  },
  {
    id: "22",
    name: "Kalimantan Selatan",
    cities: ["Banjarbaru", "Banjarmasin", "Balangan", "Banjar", "Barito Kuala", "Hulu Sungai Selatan", "Hulu Sungai Tengah", "Hulu Sungai Utara", "Kota Baru", "Tabalong", "Tanah Bumbu", "Tanah Laut", "Tapin"]
  },
  {
    id: "23",
    name: "Kalimantan Timur",
    cities: ["Balikpapan", "Bontang", "Samarinda", "Berau", "Kutai Barat", "Kutai Kartanegara", "Kutai Timur", "Mahakam Ulu", "Paser", "Penajam Paser Utara"]
  },
  {
    id: "24",
    name: "Kalimantan Utara",
    cities: ["Tarakan", "Bulungan", "Malinau", "Nunukan", "Tana Tidung"]
  },
  {
    id: "25",
    name: "Sulawesi Utara",
    cities: ["Bitung", "Kotamobagu", "Manado", "Tomohon", "Bolaang Mongondow", "Bolaang Mongondow Selatan", "Bolaang Mongondow Timur", "Bolaang Mongondow Utara", "Kepulauan Sangihe", "Kepulauan Siau Tagulandang Biaro", "Kepulauan Talaud", "Minahasa", "Minahasa Selatan", "Minahasa Tenggara", "Minahasa Utara"]
  },
  {
    id: "26",
    name: "Sulawesi Tengah",
    cities: ["Palu", "Banggai", "Banggai Kepulauan", "Banggai Laut", "Buol", "Donggala", "Morowali", "Morowali Utara", "Parigi Moutong", "Poso", "Sigi", "Tojo Una-Una", "Toli-Toli"]
  },
  {
    id: "27",
    name: "Sulawesi Selatan",
    cities: ["Makassar", "Palopo", "Parepare", "Bantaeng", "Barru", "Bone", "Bulukumba", "Enrekang", "Gowa", "Jeneponto", "Kepulauan Selayar", "Luwu", "Luwu Timur", "Luwu Utara", "Maros", "Pangkajene dan Kepulauan", "Pinrang", "Sidenreng Rappang", "Sinjai", "Soppeng", "Takalar", "Tana Toraja", "Toraja Utara", "Wajo"]
  },
  {
    id: "28",
    name: "Sulawesi Tenggara",
    cities: ["Kendari", "Bau-Bau", "Bombana", "Buton", "Buton Selatan", "Buton Tengah", "Buton Utara", "Kolaka", "Kolaka Timur", "Kolaka Utara", "Konawe", "Konawe Kepulauan", "Konawe Selatan", "Konawe Utara", "Muna", "Muna Barat", "Wakatobi"]
  },
  {
    id: "29",
    name: "Gorontalo",
    cities: ["Gorontalo", "Boalemo", "Bone Bolango", "Gorontalo", "Gorontalo Utara", "Pohuwato"]
  },
  {
    id: "30",
    name: "Sulawesi Barat",
    cities: ["Mamuju", "Majene", "Mamasa", "Mamuju", "Mamuju Tengah", "Pasangkayu", "Polewali Mandar"]
  },
  {
    id: "31",
    name: "Maluku",
    cities: ["Ambon", "Tual", "Buru", "Buru Selatan", "Kepulauan Aru", "Maluku Barat Daya", "Maluku Tengah", "Maluku Tenggara", "Seram Bagian Barat", "Seram Bagian Timur", "Kepulauan Tanimbar"]
  },
  {
    id: "32",
    name: "Maluku Utara",
    cities: ["Ternate", "Tidore Kepulauan", "Halmahera Barat", "Halmahera Selatan", "Halmahera Tengah", "Halmahera Timur", "Halmahera Utara", "Kepulauan Sula", "Pulau Morotai", "Pulau Taliabu"]
  },
  {
    id: "33",
    name: "Papua",
    cities: ["Jayapura", "Biak Numfor", "Jayapura", "Keerom", "Kepulauan Yapen", "Mamberamo Raya", "Sarmi", "Supiori", "Waropen"]
  },
  {
    id: "34",
    name: "Papua Barat",
    cities: ["Sorong", "Fakfak", "Kaimana", "Manokwari", "Manokwari Selatan", "Maybrat", "Pegunungan Arfak", "Raja Ampat", "Sorong", "Sorong Selatan", "Tambrauw", "Teluk Bintuni", "Teluk Wondama"]
  },
  {
    id: "35",
    name: "Papua Selatan",
    cities: ["Merauke", "Asmat", "Boven Digoel", "Mappi", "Merauke"]
  },
  {
    id: "36",
    name: "Papua Tengah",
    cities: ["Nabire", "Deiyai", "Dogiyai", "Intan Jaya", "Mimika", "Nabire", "Paniai", "Puncak", "Puncak Jaya"]
  },
  {
    id: "37",
    name: "Papua Pegunungan",
    cities: ["Jayawijaya", "Lanny Jaya", "Mamberamo Tengah", "Nduga", "Pegunungan Bintang", "Tolanikara", "Yahukimo", "Yalimo"]
  },
  {
    id: "38",
    name: "Papua Barat Daya",
    cities: ["Sorong", "Raja Ampat", "Sorong", "Sorong Selatan", "Tambrauw", "Maybrat", "Kota Sorong"]
  }
];

// Fungsi untuk format mata uang Rupiah
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Render produk ke halaman
function renderProducts(productsToRender) {
  productGrid.innerHTML = "";
  productsToRender.forEach((product) => {
    const productCard = `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="price">${formatRupiah(product.price)}</p>
                        <button class="add-to-cart-btn"
                            data-id="${product.id}"
                            data-name="${product.name}"
                            data-price="${product.price}"
                            data-image="${product.image}">
                            Tambah ke Keranjang
                        </button>
                    </div>
                `;
    productGrid.insertAdjacentHTML("beforeend", productCard);
  });
  addAddToCartListeners();
}

// Tambahkan event listener untuk tombol "Tambah ke Keranjang"
function addAddToCartListeners() {
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.onclick = (e) => {
      const id = parseInt(e.target.dataset.id);
      const name = e.target.dataset.name;
      const price = parseInt(e.target.dataset.price);
      const image = e.target.dataset.image;
      addToCart({ id, name, price, image, quantity: 1 });
    };
  });
}

// Tambahkan produk ke keranjang
function addToCart(product) {
  const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push(product);
  }
  updateCartUI();
  updatePaymentSectionVisibility();
}

// Hapus item dari keranjang
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
  updatePaymentSectionVisibility();
}

// Update kuantitas item di keranjang
function updateCartItemQuantity(id, newQuantity) {
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity = parseInt(newQuantity);
    if (item.quantity <= 0) {
      removeItemFromCart(id);
    } else {
      updateCartUI();
    }
  }
}

// Update UI keranjang
function updateCartUI() {
  cartCountSpan.textContent = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
  } else {
    emptyCartMessage.style.display = "none";
    cart.forEach((item) => {
      const itemHtml = `
                        <div class="cart-item">
                            <div class="cart-item-details">
                                <img src="${item.image}" alt="${item.name}">
                                <div>
                                    <h4>${item.name}</h4>
                                    <p>${formatRupiah(item.price)}</p>
                                </div>
                            </div>
                            <div class="cart-item-actions">
                                <input type="number" value="${item.quantity
        }" min="1"
                                    onchange="updateCartItemQuantity(${item.id
        }, this.value)">
                                <span>${formatRupiah(
          item.price * item.quantity
        )}</span>
                                <button class="remove-item-btn" data-id="${item.id
        }">Hapus</button>
                            </div>
                        </div>
                    `;
      cartItemsContainer.insertAdjacentHTML("beforeend", itemHtml);
      total += item.price * item.quantity;
    });
    // Add event listeners for remove buttons
    document.querySelectorAll(".remove-item-btn").forEach((button) => {
      button.onclick = (e) => {
        removeItemFromCart(parseInt(e.target.dataset.id));
      };
    });
  }
  cartTotalSpan.textContent = formatRupiah(total);
  updateCheckoutButtonState();
}

// Tampilkan/sembunyikan bagian keranjang & pembayaran
function updatePaymentSectionVisibility() {
  if (cart.length > 0) {
    cartPaymentSection.classList.add("active");
  } else {
    cartPaymentSection.classList.remove("active");
  }
}

// Validasi input form alamat
function validateAddressForm() {
  let isValid = true;

  // Full Name
  if (fullNameInput.value.trim() === "") {
    fullNameError.style.display = "block";
    isValid = false;
  } else {
    fullNameError.style.display = "none";
  }

  // Phone Number
  if (!phoneInput.value.match(/^[0-9]{10,14}$/)) {
    phoneError.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }

  // Province
  if (provinceSelect.value === "") {
    provinceError.style.display = "block";
    isValid = false;
  } else {
    provinceError.style.display = "none";
  }

  // City
  if (citySelect.value === "" || citySelect.disabled) {
    // Check if disabled for initial state
    cityError.style.display = "block";
    isValid = false;
  } else {
    cityError.style.display = "none";
  }

  // Address Detail
  if (addressDetailInput.value.trim() === "") {
    addressDetailError.style.display = "block";
    isValid = false;
  } else {
    addressDetailError.style.display = "none";
  }

  // Postal Code
  if (!postalCodeInput.value.match(/^[0-9]{5}$/)) {
    postalCodeError.style.display = "block";
    isValid = false;
  } else {
    postalCodeError.style.display = "none";
  }

  return isValid;
}

// Update state tombol checkout
function updateCheckoutButtonState() {
  const isCartNotEmpty = cart.length > 0;
  const isPaymentMethodSelected = selectedPaymentMethod !== null;
  const isAddressFormValid = validateAddressForm(); // Check validation on every state update

  checkoutBtn.disabled = !(
    isCartNotEmpty &&
    isPaymentMethodSelected &&
    isAddressFormValid
  );
}

// Event listener untuk klik ikon keranjang
cartIcon.onclick = () => {
  // Gulir ke bagian keranjang
  cartPaymentSection.scrollIntoView({ behavior: "smooth", block: "start" });
  updatePaymentSectionVisibility();
};

// Event listener untuk metode pembayaran
paymentOptionsContainer
  .querySelectorAll(".payment-option")
  .forEach((option) => {
    option.onclick = (e) => {
      // Hapus kelas 'selected' dari semua opsi
      paymentOptionsContainer
        .querySelectorAll(".payment-option")
        .forEach((opt) => {
          opt.classList.remove("selected");
        });
      // Tambahkan kelas 'selected' ke opsi yang diklik
      const clickedOption = e.currentTarget;
      clickedOption.classList.add("selected");
      selectedPaymentMethod = clickedOption.dataset.method;
      updateCheckoutButtonState();
    };
  });

// Event listener untuk tombol checkout
checkoutBtn.onclick = () => {
  if (cart.length > 0 && selectedPaymentMethod && validateAddressForm()) {
    // Simulate payment processing
    alert(
      `Pembayaran senilai ${cartTotalSpan.textContent
      } menggunakan metode ${selectedPaymentMethod
        .replace("bank_", "Bank ")
        .replace("ewallet_", "E-Wallet ")
        .toUpperCase()} sedang diproses.`
    );

    showReceiptModal();

    // Reset keranjang setelah checkout
    cart = [];
    selectedPaymentMethod = null;
    updateCartUI();
    updatePaymentSectionVisibility();
    resetAddressForm();
    updateCheckoutButtonState();
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top after successful checkout
  } else {
    // validateAddressForm() will show specific errors
    alert("Harap lengkapi semua informasi alamat dan pilih metode pembayaran.");
  }
};

// Fungsi pencarian
searchInput.onkeyup = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
};

// Populate provinces dropdown
function populateProvinces() {
  provincesData.forEach((province) => {
    const option = document.createElement("option");
    option.value = province.id;
    option.textContent = province.name;
    provinceSelect.appendChild(option);
  });
}

// Populate cities dropdown based on selected province
provinceSelect.onchange = () => {
  const selectedProvinceId = provinceSelect.value;
  citySelect.innerHTML = '<option value="">Pilih Kabupaten/Kota</option>';
  citySelect.disabled = true; // Disable until a province is selected

  if (selectedProvinceId) {
    const selectedProvince = provincesData.find(
      (p) => p.id === selectedProvinceId
    );
    if (selectedProvince) {
      selectedProvince.cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
      citySelect.disabled = false;
    }
  }
  updateCheckoutButtonState(); // Re-validate after change
};

// Add event listeners for address form inputs to trigger validation
[
  fullNameInput,
  phoneInput,
  provinceSelect,
  citySelect,
  addressDetailInput,
  postalCodeInput,
].forEach((input) => {
  input.addEventListener("input", updateCheckoutButtonState);
  input.addEventListener("change", updateCheckoutButtonState); // For select elements
});

// Function to show receipt modal
function showReceiptModal() {
  receiptModal.style.display = "flex"; // Use flex to center content

  // Populate receipt details
  receiptOrderNumber.textContent = "#ORD" + Math.floor(Math.random() * 100000); // Random order number
  receiptDate.textContent = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  receiptFullName.textContent = fullNameInput.value;
  receiptPhone.textContent = phoneInput.value;
  receiptAddress.textContent = `${addressDetailInput.value}, ${citySelect.value
    }, ${provinceSelect.options[provinceSelect.selectedIndex].text}, ${postalCodeInput.value
    }`;
  receiptPaymentMethod.textContent = selectedPaymentMethod
    .replace("bank_", "Bank ")
    .replace("ewallet_", "E-Wallet ")
    .toUpperCase();

  receiptItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const itemHtml = `
                    <div class="receipt-item">
                        <span class="receipt-item-name">${item.name} (${item.quantity
      }x)</span>
                        <span>${formatRupiah(item.price * item.quantity)}</span>
                    </div>
                `;
    receiptItemsContainer.insertAdjacentHTML("beforeend", itemHtml);
    total += item.price * item.quantity;
  });
  receiptTotal.textContent = formatRupiah(total);
}

// Close receipt modal
receiptCloseBtn.onclick = () => {
  receiptModal.style.display = "none";
};

// Close modal if click outside content
window.onclick = (event) => {
  if (event.target == receiptModal) {
    receiptModal.style.display = "none";
  }
};

// Reset address form after successful purchase
function resetAddressForm() {
  fullNameInput.value = "";
  phoneInput.value = "";
  provinceSelect.value = "";
  citySelect.innerHTML = '<option value="">Pilih Kabupaten/Kota</option>';
  citySelect.disabled = true;
  addressDetailInput.value = "";
  postalCodeInput.value = "";

  // Hide all error messages
  fullNameError.style.display = "none";
  phoneError.style.display = "none";
  provinceError.style.display = "none";
  cityError.style.display = "none";
  addressDetailError.style.display = "none";
  postalCodeError.style.display = "none";
}

// Inisialisasi halaman saat pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(productsData);
  updateCartUI();
  updatePaymentSectionVisibility();
  populateProvinces(); // Populate provinces on load
  updateCheckoutButtonState(); // Initial check for button state
});
// Event listener for download receipt button
downloadReceiptBtn.onclick = downloadReceiptAsImage;
// Function to download receipt as image
function downloadReceiptAsImage() {
  const receiptContent = document.querySelector(".receipt-content"); // Pilih elemen bon

  // Sembunyikan tombol close dan download sementara agar tidak ikut tercetak
  const closeBtn = receiptContent.querySelector(".close-button");
  const downloadBtn = receiptContent.querySelector("#downloadReceiptBtn");
  closeBtn.style.display = "none";
  downloadBtn.style.display = "none";

  html2canvas(receiptContent, {
    scale: 2, // Meningkatkan resolusi gambar
    useCORS: true, // Penting jika ada gambar dari domain lain (misal placeholder.com)
    allowTaint: true, // Mengizinkan gambar dari domain lain, bisa menyebabkan security taint
  })
    .then((canvas) => {
      // Buat link download
      const link = document.createElement("a");
      link.download = "bon-belanja-bubs-store.png";
      link.href = canvas.toDataURL("image/png"); // Ubah canvas jadi data URL gambar PNG
      document.body.appendChild(link); // Tambahkan link ke body (sementara)
      link.click(); // Klik link untuk memulai download
      document.body.removeChild(link); // Hapus link setelah download

      // Tampilkan kembali tombol close dan download
      closeBtn.style.display = "block";
      downloadBtn.style.display = "block";

      alert("Bon belanja berhasil diunduh!");
    })
    .catch((error) => {
      console.error("Gagal mengunduh bon:", error);
      alert("Terjadi kesalahan saat mengunduh bon. Silakan coba lagi.");
      // Pastikan tombol tetap ditampilkan kembali meskipun ada error
      closeBtn.style.display = "block";
      downloadBtn.style.display = "block";
    });
}
