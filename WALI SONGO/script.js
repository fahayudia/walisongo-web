// =========================
// MENU MOBILE
// =========================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// =========================
// DATA DASAR WALISONGO (nama asli, wilayah, foto)
// =========================
const dataWalisongo = {
    "Sunan Gresik": {
        namaAsli: "Maulana Malik Ibrahim",
        wilayah: "Gresik, Jawa Timur",
        gambar: "assets/images/gresik.jpg"
    },
    "Sunan Ampel": {
        namaAsli: "Raden Rahmat",
        wilayah: "Ampel Denta, Surabaya",
        gambar: "assets/images/ampel.jpg"
    },
    "Sunan Bonang": {
        namaAsli: "Raden Makhdum Ibrahim",
        wilayah: "Tuban dan sekitarnya",
        gambar: "assets/images/bonang.jpg"
    },
    "Sunan Giri": {
        namaAsli: "Raden Paku",
        wilayah: "Giri, Gresik",
        gambar: "assets/images/giri.jpg"
    },
    "Sunan Drajat": {
        namaAsli: "Raden Qasim",
        wilayah: "Drajat dan Lamongan",
        gambar: "assets/images/drajat.jpg"
    },
    "Sunan Kalijaga": {
        namaAsli: "Raden Mas Syahid",
        wilayah: "Tuban, Demak, dan Jawa Tengah",
        gambar: "assets/images/kalijaga.jpg"
    },
    "Sunan Kudus": {
        namaAsli: "Ja'far Shadiq",
        wilayah: "Kudus, Jawa Tengah",
        gambar: "assets/images/kudus.jpg"
    },
    "Sunan Muria": {
        namaAsli: "Raden Umar Said",
        wilayah: "Gunung Muria, Kudus",
        gambar: "assets/images/muria.jpg"
    },
    "Sunan Gunung Jati": {
        namaAsli: "Syarif Hidayatullah",
        wilayah: "Cirebon, Banten, dan Jawa Barat",
        gambar: "assets/images/gunung-jati.jpg"
    }
};


// =========================
// DATA DETAIL LENGKAP (BARU)
// =========================
const detailLengkap = {
    "Sunan Gresik": {
        "sejarah": [
            "Sunan Gresik bernama Maulana Malik Ibrahim. Ia dikenal sebagai salah satu tokoh paling awal dalam penyebaran Islam di Jawa pada akhir abad ke-14 hingga awal abad ke-15. Dalam banyak tradisi, ia disebut sebagai wali pertama dalam jajaran Walisongo, dan dikenal pula dengan sebutan Syekh Maghribi atau Sunan Raja Wali.",
            "Masa hidupnya berada pada akhir kejayaan Kerajaan Majapahit. Wilayah pesisir Jawa Timur saat itu sudah ramai disinggahi pedagang dari Gujarat, Arab, Persia, Tiongkok, hingga Nusantara bagian barat. Gresik menjadi salah satu bandar penting, sehingga tempat ini menjadi pintu masuk yang strategis bagi dakwah Islam.",
            "Menurut tradisi, ia sempat berhubungan dengan penguasa Majapahit dan memperoleh kesempatan menetap serta berdakwah di Gresik. Rincian peristiwa ini memiliki beberapa versi, tetapi hampir semuanya sepakat bahwa Gresik menjadi pusat kegiatannya dan tempat ia menghabiskan sisa hidupnya."
        ],
        "kelahiran": [
            "Asal-usul dan tempat kelahiran Maulana Malik Ibrahim masih diperdebatkan oleh para ahli sejarah. Ada pendapat yang menyebutkan bahwa ia berasal dari Arab, ada yang mengaitkannya dengan Gujarat di India, dan ada pula yang menyebut kawasan Persia atau Asia Tengah. Perbedaan ini muncul karena sumber tertulis dari masa hidupnya sangat terbatas.",
            "Salah satu petunjuk yang sering dikutip adalah batu nisan di makamnya yang disebut berasal dari Cambay, Gujarat, dan memuat penanggalan 822 H. Temuan ini sering dipakai untuk memperkirakan masa wafatnya, meskipun tidak serta-merta menjelaskan asal-usul keluarganya.",
            "Setelah tiba di Jawa, ia menetap di Gresik dan hidup di tengah masyarakat yang sebagian besar menganut kepercayaan Hindu dan Buddha. Ia dikenal ramah, sederhana, dan pandai bergaul dengan semua lapisan masyarakat, dari pedagang hingga rakyat kecil."
        ],
        "metode": [
            "Dakwah Sunan Gresik menekankan pendekatan sosial dan perdagangan. Ia berinteraksi dengan masyarakat melalui kegiatan sehari-hari, berdagang secara jujur, dan memberi contoh akhlak yang baik sebelum mengajarkan ajaran agama secara lebih mendalam. Cara ini membuat masyarakat tidak merasa dipaksa.",
            "Dalam tradisi masyarakat, ia dikenang karena kepeduliannya terhadap rakyat kecil. Ia disebut membantu para petani, memperhatikan kebutuhan pangan, dan memberi pertolongan kepada orang yang sakit. Karena itu, kehadirannya dirasakan membawa manfaat nyata bagi lingkungan sekitar.",
            "Ia juga membuka tempat belajar agama untuk membina kader yang kelak melanjutkan dakwah. Pola pembinaan murid inilah yang kemudian dikembangkan oleh generasi wali sesudahnya, terutama melalui pesantren."
        ],
        "wafat": "Sunan Gresik wafat pada 12 Rabiulawal 822 H, yang bertepatan dengan 8 April 1419 M menurut catatan yang dikutip dalam Ensiklopedia Islam. Ia dimakamkan di Gresik, Jawa Timur. Makamnya hingga kini dikenal sebagai salah satu situs bersejarah penting yang berkaitan dengan awal perkembangan Islam di Jawa dan masih diziarahi banyak orang.",
        "keteladanan": [
            "Bijaksana dan santun dalam berdakwah",
            "Peduli kepada masyarakat kecil",
            "Jujur dalam berdagang dan bermuamalah",
            "Terbuka dan pandai bergaul dengan berbagai kalangan",
            "Menyesuaikan cara berkomunikasi dengan keadaan lingkungan",
            "Membina kader agar dakwah terus berlanjut"
        ],
        "makam": {
            "teks": "Makam Sunan Gresik (Maulana Malik Ibrahim) berada di Kelurahan Gapurosukolilo, Kecamatan Gresik, Kabupaten Gresik, Jawa Timur.",
            "query": "Makam Maulana Malik Ibrahim Gresik"
        }
    },
    "Sunan Ampel": {
        "sejarah": [
            "Sunan Ampel merupakan salah satu tokoh penting dalam perkembangan Islam di Jawa pada abad ke-15. Ia dikenal dengan nama Raden Rahmat dan memiliki hubungan keluarga dengan Maulana Malik Ibrahim menurut tradisi sejarah yang berkembang. Namanya diambil dari kawasan Ampel Denta di Surabaya, tempat ia menetap dan berdakwah.",
            "Sebagian sumber menyebutkan bahwa ia datang ke Jawa dari wilayah Champa dan memiliki hubungan kekerabatan dengan lingkungan istana Majapahit. Kerabatnya dikisahkan menjadi bagian dari keluarga kerajaan, sehingga ia memperoleh izin untuk tinggal dan membuka tempat pendidikan di Ampel Denta.",
            "Dari Ampel, lahir jaringan ulama yang kemudian menyebar ke banyak daerah. Pesantren Ampel menjadi tempat belajar bagi tokoh-tokoh penting seperti Sunan Bonang, Sunan Drajat, dan Sunan Giri, serta berhubungan erat dengan Raden Patah, pendiri Kesultanan Demak."
        ],
        "kelahiran": [
            "Tahun dan tempat kelahiran Sunan Ampel memiliki beberapa versi dalam tradisi sejarah. Ia dikenal dengan nama Raden Rahmat. Silsilah keluarganya juga diceritakan secara berbeda-beda, sehingga keterangan mengenai orang tuanya sebaiknya dibaca sebagai tradisi yang berkembang.",
            "Setelah datang ke Jawa, ia menetap di Ampel Denta, Surabaya, dan mengembangkan pusat pendidikan Islam. Ia juga dikenal membangun keluarga yang kelak melahirkan tokoh-tokoh dakwah, di antaranya Sunan Bonang dan Sunan Drajat yang dalam tradisi disebut sebagai putranya.",
            "Pesantren yang diasuhnya menjadi tempat belajar agama sekaligus membangun jaringan dakwah. Para santri tidak hanya dibekali ilmu agama, tetapi juga dipersiapkan untuk kembali ke daerah masing-masing dan membina masyarakat di sana."
        ],
        "metode": [
            "Metode dakwah Sunan Ampel menekankan pendidikan, pembinaan akhlak, pesantren, dan pembentukan kader pendakwah. Ia membimbing para santri agar memahami ajaran Islam secara mendalam sebelum diutus menyebarkan ajaran tersebut ke berbagai wilayah.",
            "Ajaran Moh Limo dikenal dalam tradisi masyarakat sebagai nasihat untuk menjauhi lima perilaku buruk, yaitu main (judi), ngombe (mabuk), maling (mencuri), madat (candu), dan madon (zina). Perincian ajaran ini dikenal melalui tradisi lisan masyarakat dan perlu dibedakan dari catatan sezaman.",
            "Ia juga dikaitkan dengan pembangunan Masjid Agung Demak dan dukungan terhadap berdirinya kekuasaan Islam di Jawa. Hubungannya dengan para penguasa dan murid-muridnya menunjukkan bahwa dakwah dilakukan melalui ilmu, kerja sama, dan pembinaan jangka panjang."
        ],
        "wafat": "Sunan Ampel umumnya disebut wafat pada 1481 M dan dimakamkan di kompleks Masjid Ampel, Surabaya, Jawa Timur. Kawasan Ampel kemudian berkembang menjadi pusat kegiatan keagamaan, perdagangan, dan wisata ziarah yang ramai hingga sekarang. Pengaruh pendidikan yang dibangunnya tetap terasa melalui para muridnya yang menyebar ke berbagai daerah.",
        "keteladanan": [
            "Mengutamakan pendidikan",
            "Membimbing dan menyiapkan generasi penerus",
            "Menjaga akhlak dan menjauhi perilaku buruk",
            "Membangun kerja sama dakwah",
            "Sabar dan telaten dalam membina murid",
            "Menghubungkan dakwah dengan kepentingan masyarakat luas"
        ],
        "makam": {
            "teks": "Makam Sunan Ampel berada di kompleks Masjid Ampel, Kelurahan Ampel, Kecamatan Semampir, Surabaya, Jawa Timur.",
            "query": "Makam Sunan Ampel Surabaya"
        }
    },
    "Sunan Bonang": {
        "sejarah": [
            "Sunan Bonang dikenal sebagai ulama yang menggunakan seni dan kebudayaan sebagai sarana dakwah. Ia merupakan putra Sunan Ampel dan dikenal dengan nama Raden Makhdum Ibrahim. Sebutan Bonang dikaitkan dengan alat musik gamelan bernama bonang yang erat dengan dakwahnya.",
            "Dalam tradisi, ia dikenal sebagai guru bagi beberapa tokoh penting, termasuk Sunan Kalijaga, yang disebut belajar kepadanya setelah bertemu dalam kisah yang sangat populer di masyarakat Jawa. Hubungan guru dan murid ini ikut membentuk corak dakwah Walisongo yang akrab dengan budaya.",
            "Pusat kegiatannya dikaitkan dengan Tuban dan sekitarnya di pesisir utara Jawa. Wilayah ini merupakan jalur perdagangan yang ramai, sehingga pesan dakwah mudah menyebar bersama arus pedagang dan pelaut."
        ],
        "kelahiran": [
            "Menurut riwayat tradisional, Sunan Bonang lahir sekitar pertengahan abad ke-15 dan belajar agama pertama kali kepada ayahnya, Sunan Ampel. Tahun kelahirannya tidak dapat dipastikan karena sumbernya terbatas dan sebagian bersifat tradisi lisan.",
            "Setelah menguasai dasar-dasar ilmu agama, ia dikisahkan memperdalam pengetahuan Islam ke Pasai, Aceh, yang pada masa itu dikenal sebagai pusat keilmuan Islam di Nusantara. Tradisi juga menyebut bahwa ia pergi bersama Raden Paku, yang kelak dikenal sebagai Sunan Giri.",
            "Sepulang dari Pasai, ia kembali ke Jawa dan mengembangkan dakwah serta pendidikan agama di kawasan Tuban. Sebagian tradisi juga mengaitkannya dengan tempat-tempat lain di pesisir utara Jawa."
        ],
        "metode": [
            "Sunan Bonang memanfaatkan musik tradisional, gamelan, tembang, dan kesenian yang dekat dengan kehidupan masyarakat. Dengan cara ini, pesan tentang keimanan, akhlak, dan penghambaan kepada Allah disampaikan melalui bentuk yang telah dikenal dan disukai orang Jawa.",
            "Ia dikenal melalui tradisi sastra keagamaan yang dikaitkan dengannya, seperti Suluk Sunan Bonang atau Suluk Wujil. Karya suluk umumnya membahas ajaran spiritual, hubungan manusia dengan Allah, dan upaya memperbaiki diri. Tembang Tombo Ati juga sering dikaitkan dengan namanya dalam tradisi.",
            "Selain berdakwah melalui seni, ia membina para santri dan memperluas jaringan ulama. Pengaruhnya membantu penyebaran Islam di kawasan pesisir utara Jawa dan memperkuat peran pendidikan dalam dakwah."
        ],
        "wafat": "Sunan Bonang diperkirakan wafat sekitar 1525 M berdasarkan salah satu rujukan ensiklopedia. Ia dikenal dimakamkan di Tuban, meskipun terdapat tradisi dan keterangan masyarakat yang berbeda mengenai lokasi makamnya. Makam yang berada di Tuban sampai sekarang menjadi tujuan ziarah dan bagian penting dari wisata religi di pesisir utara Jawa.",
        "keteladanan": [
            "Kreatif dalam menyampaikan ilmu",
            "Menghargai kebudayaan setempat",
            "Menggunakan seni untuk pesan yang bermanfaat",
            "Tekun menuntut ilmu hingga ke tempat yang jauh",
            "Sabar membimbing murid",
            "Rendah hati dalam berdakwah"
        ],
        "makam": {
            "teks": "Makam Sunan Bonang yang paling dikenal berada di kompleks Masjid Agung Tuban, Jawa Timur. Ada pula tradisi yang menyebut lokasi lain, sehingga keterangan ini perlu dibaca dengan hati-hati.",
            "query": "Makam Sunan Bonang Tuban"
        }
    },
    "Sunan Drajat": {
        "sejarah": [
            "Sunan Drajat dikenal sebagai salah satu wali yang sangat memperhatikan kesejahteraan masyarakat. Dalam tradisi silsilah, ia merupakan putra Sunan Ampel dan dikenal dengan nama Raden Qasim. Sebagian riwayat juga menyebutnya dengan nama Raden Syarifuddin atau Masih Munat.",
            "Ia berdakwah di wilayah pesisir Lamongan yang pada masa itu berkembang sebagai kawasan perdagangan dan perikanan. Pusat dakwahnya berada di daerah yang sekarang dikenal sebagai Desa Drajat, Kecamatan Paciran, Kabupaten Lamongan, Jawa Timur.",
            "Namanya sangat lekat dengan ajaran kepedulian sosial. Dalam sejarah dakwah Walisongo, Sunan Drajat dikenang sebagai tokoh yang menunjukkan bahwa agama harus tampak dalam sikap membantu sesama."
        ],
        "kelahiran": [
            "Menurut tradisi, Raden Qasim lahir pada pertengahan abad ke-15 dan memperoleh pendidikan agama dalam lingkungan keluarga serta pesantren Ampel. Tahun kelahirannya tidak dapat dipastikan karena sumbernya terbatas.",
            "Setelah menimba ilmu, ia diutus untuk berdakwah ke wilayah pesisir. Dalam perjalanannya, ia dikisahkan sempat singgah di beberapa tempat sebelum akhirnya menetap di Drajat dan membangun pusat dakwah di sana.",
            "Dari tempat tersebut, ia membina masyarakat, mengajar santri, dan membantu penduduk yang membutuhkan. Wilayah dakwahnya kemudian berkembang menjadi pusat kegiatan keagamaan dan sosial."
        ],
        "metode": [
            "Sunan Drajat mengajarkan Islam dengan menekankan kepedulian sosial. Menurut berbagai riwayat, ia membantu orang miskin, anak yatim, dan masyarakat yang mengalami kesulitan. Bagi beliau, dakwah tidak cukup hanya menyampaikan ajaran agama, tetapi harus diwujudkan melalui tindakan nyata.",
            "Salah satu ajaran yang terkenal adalah nasihat untuk memberi tongkat kepada orang buta, makanan kepada yang lapar, pakaian kepada yang telanjang, dan payung kepada yang kehujanan. Ajaran ini sering dipakai untuk menggambarkan semangat tolong-menolong dalam dakwahnya.",
            "Ia juga memanfaatkan seni dan tembang Jawa sebagai sarana menyampaikan nasihat. Namanya sering dikaitkan dengan tembang Pangkur dan gamelan dalam tradisi dakwah Walisongo. Pendekatan ini membuat ajaran tentang gotong royong, kerja keras, dan kepedulian mudah diterima masyarakat."
        ],
        "wafat": "Sunan Drajat diperkirakan wafat pada pertengahan abad ke-16. Tahun wafat yang tepat belum dapat dipastikan dari sumber-sumber yang tersedia. Ia dimakamkan di kawasan Desa Drajat, Lamongan, Jawa Timur. Di sekitar kawasan makam terdapat museum yang menyimpan berbagai benda bersejarah terkait Sunan Drajat dan menjadi tujuan wisata religi.",
        "keteladanan": [
            "Menolong sesama",
            "Peduli kepada masyarakat yang kesulitan",
            "Membuktikan ajaran agama melalui perbuatan nyata",
            "Menanamkan gotong royong dan kerja keras",
            "Dermawan dan rendah hati",
            "Menyampaikan nasihat dengan bahasa yang mudah dipahami"
        ],
        "makam": {
            "teks": "Makam Sunan Drajat berada di Desa Drajat, Kecamatan Paciran, Kabupaten Lamongan, Jawa Timur.",
            "query": "Makam Sunan Drajat Lamongan"
        }
    },
    "Sunan Kudus": {
        "sejarah": [
            "Sunan Kudus dikenal sebagai ulama yang memiliki pengetahuan luas dalam bidang agama Islam. Ia bernama Ja'far Shadiq dan dalam tradisi silsilah Walisongo disebut sebagai putra Raden Usman Haji, seorang pendakwah yang dikaitkan dengan wilayah Jipang Panolan. Dalam sebagian riwayat, ayahnya juga disebut dengan nama Sunan Ngudung.",
            "Pada masa Kesultanan Demak, ia memiliki peran penting tidak hanya dalam dakwah, tetapi juga dalam bidang pemerintahan, peradilan, dan pertahanan. Tradisi menyebut ia pernah menjadi hakim atau penasihat keagamaan di lingkungan Demak.",
            "Kota Kudus berkembang sebagai pusat keagamaan dan perdagangan setelah ia menetap di sana. Nama Kudus sendiri sering dikaitkan dengan kata Al-Quds, yang berarti suci."
        ],
        "kelahiran": [
            "Sejak muda, Ja'far Shadiq dikenal mendalami ilmu agama. Ia mempelajari berbagai bidang, termasuk fikih, tauhid, hadis, tafsir, dan ilmu yang berkaitan dengan pemikiran keagamaan. Karena kedalaman ilmunya, ia dikenal sebagai salah satu wali yang paling luas pengetahuannya.",
            "Tradisi menyebut bahwa ia belajar kepada beberapa guru di Jawa dan melanjutkan pendidikan di luar daerahnya. Beberapa riwayat bahkan menghubungkan perjalanannya dengan tanah Arab, tetapi rinciannya memiliki banyak versi.",
            "Setelah dewasa, ia menetap di wilayah yang kemudian dikenal sebagai Kudus dan membangun pusat dakwah serta pendidikan di sana."
        ],
        "metode": [
            "Sunan Kudus dikenal melalui dakwah yang menghargai kondisi sosial dan budaya masyarakat. Cerita yang sering disampaikan adalah anjuran untuk menghormati kebiasaan masyarakat setempat, termasuk tradisi yang berkaitan dengan penghormatan terhadap sapi, sehingga hubungan antara umat Islam dan masyarakat Hindu tetap terjaga.",
            "Peninggalan yang paling terkenal adalah Masjid Menara Kudus, yang menurut inskripsi pada mihrabnya dibangun pada 956 H atau sekitar 1549 M. Bentuk menaranya memperlihatkan perpaduan unsur arsitektur yang berkembang di lingkungan masyarakat Jawa pada masa itu.",
            "Ia juga mengajar dan membimbing banyak murid. Dalam tradisi, pendekatannya digambarkan sebagai dakwah yang teguh dalam prinsip, tetapi lembut dalam cara menyampaikannya kepada masyarakat."
        ],
        "wafat": "Sunan Kudus diperkirakan wafat sekitar 1550 M menurut salah satu rujukan ensiklopedia. Ia dimakamkan di kompleks Masjid Menara Kudus, Jawa Tengah. Kawasan ini sampai sekarang menjadi tempat bersejarah dan pusat kegiatan keagamaan, serta menjadi lokasi tradisi tahunan masyarakat Kudus yang berkaitan dengan penggantian kain penutup makam.",
        "keteladanan": [
            "Mendalami ilmu pengetahuan",
            "Bersikap bijaksana dan toleran",
            "Menghargai kondisi budaya masyarakat",
            "Menjaga hubungan baik antarkelompok",
            "Teguh dalam prinsip, lembut dalam cara",
            "Memadukan dakwah dengan pembangunan sosial"
        ],
        "makam": {
            "teks": "Makam Sunan Kudus berada di kompleks Masjid Menara Kudus, Kauman, Kota Kudus, Jawa Tengah.",
            "query": "Makam Sunan Kudus Menara Kudus"
        }
    },
    "Sunan Giri": {
        "sejarah": [
            "Sunan Giri dikenal sebagai ulama, pendidik, dan tokoh yang memiliki pengaruh besar dalam penyebaran Islam di Jawa. Dalam tradisi sejarah, ia bernama Raden Paku dan disebut sebagai putra Maulana Ishak. Ia juga dikenal dengan sebutan Raden Ainul Yaqin.",
            "Pusat dakwahnya berada di perbukitan Giri, Gresik. Dari sana ia membangun lembaga pendidikan yang berkembang menjadi pusat ilmu dan kekuasaan keagamaan. Dalam sejarah, pusat ini sering dikenal dengan sebutan Giri Kedaton.",
            "Pada masa Kesultanan Demak, ia memiliki pengaruh yang besar dalam kehidupan keagamaan dan politik. Pandangannya dihormati oleh para penguasa dan ulama pada masa itu."
        ],
        "kelahiran": [
            "Menurut tradisi, Raden Paku lahir dari ayah bernama Maulana Ishak dan ibu bernama Dewi Sekardadu. Cerita yang berkembang menyebutkan bahwa ia diasuh oleh seorang saudagar perempuan di Gresik yang bernama Nyai Gede Pinatih. Kisah ini berkembang dalam banyak versi dan termasuk tradisi yang populer.",
            "Ketika masih muda, ia belajar di Pesantren Ampel Denta. Ia kemudian dikisahkan memperdalam pengetahuan agama bersama Raden Makhdum Ibrahim, dan tradisi juga menceritakan perjalanan mereka ke Pasai untuk mempelajari ilmu agama dan tasawuf.",
            "Setelah kembali ke Jawa, ia menetap di Giri, Gresik, dan mendirikan pesantren yang kelak sangat dikenal."
        ],
        "metode": [
            "Metode dakwah Sunan Giri berfokus pada pendidikan dan pembinaan murid. Pesantren Giri menjadi tempat belajar para santri dari berbagai daerah. Setelah menyelesaikan pendidikan, mereka kembali ke daerah masing-masing untuk mengajar dan menyebarkan Islam.",
            "Jaringan pendidikannya dikaitkan dengan penyebaran Islam ke Madura, Bawean, dan beberapa wilayah di Indonesia bagian timur, termasuk kawasan Maluku. Hal ini memperlihatkan bahwa pengaruh dakwahnya meluas jauh melampaui Jawa.",
            "Ia juga dikenal memperhatikan pembelajaran anak-anak. Dalam tradisi masyarakat, namanya dikaitkan dengan permainan dan tembang anak seperti jelungan dan jamuran yang mengandung pesan moral. Dengan cara ini, nilai kebaikan ditanamkan sejak dini melalui permainan yang menyenangkan."
        ],
        "wafat": "Sunan Giri diperkirakan wafat sekitar 1506 M. Ia dimakamkan di kawasan Giri, Gresik. Pusat dakwah yang dibangunnya menjadi salah satu bagian penting dari sejarah pendidikan Islam di Nusantara, dan makamnya hingga kini menjadi salah satu tujuan ziarah utama di Gresik.",
        "keteladanan": [
            "Mengutamakan pendidikan",
            "Mengembangkan ilmu pengetahuan",
            "Memperluas manfaat dakwah melalui para murid",
            "Memperhatikan pendidikan anak-anak",
            "Tekun belajar sejak muda",
            "Membangun pusat ilmu yang bermanfaat jangka panjang"
        ],
        "makam": {
            "teks": "Makam Sunan Giri berada di kompleks Makam Sunan Giri, Kecamatan Kebomas, Kabupaten Gresik, Jawa Timur.",
            "query": "Makam Sunan Giri Gresik"
        }
    },
    "Sunan Kalijaga": {
        "sejarah": [
            "Sunan Kalijaga merupakan salah satu tokoh Walisongo yang terkenal karena menggunakan kesenian dan kebudayaan Jawa sebagai sarana dakwah. Ia dikenal sebagai putra Raden Sahur, seorang pejabat di wilayah Tuban, dan bernama Raden Said.",
            "Namanya sangat lekat dengan Demak dan tradisi seni bercorak Islam di Jawa. Ia dikaitkan dengan pembangunan Masjid Agung Demak, termasuk kisah populer tentang tiang penyangga (soko tatal) yang dibuat dari serpihan kayu.",
            "Dalam banyak cerita rakyat, ia digambarkan sebagai wali yang paling dekat dengan budaya Jawa. Karena itu, ia dikenang sebagai tokoh yang menjembatani ajaran Islam dengan tradisi lokal."
        ],
        "kelahiran": [
            "Riwayat hidup Sunan Kalijaga memiliki berbagai versi. Salah satu cerita yang populer menyebutkan bahwa ketika muda, Raden Said melihat banyak kesenjangan sosial di masyarakat. Ia kemudian dikisahkan menempuh jalan yang keras sebelum akhirnya bertemu dengan Sunan Bonang dan mengalami perubahan hidup.",
            "Dalam kisah tersebut, ia diminta menjaga tongkat di tepi sungai dalam waktu lama sebagai ujian kesungguhan. Dari kisah inilah sebagian orang mengaitkan asal nama Kalijaga, yaitu menjaga kali atau sungai. Nama Kalijaga juga memiliki penjelasan lain dalam tradisi, sehingga asal-usulnya tidak tunggal.",
            "Setelah menjadi ulama, ia berdakwah ke berbagai daerah di Jawa dan memiliki hubungan dengan lingkungan Kesultanan Demak."
        ],
        "metode": [
            "Sunan Kalijaga dikenal menggunakan wayang kulit, gamelan, tembang, seni ukir, dan kesenian lainnya untuk menyampaikan nilai-nilai Islam. Pendekatannya menyesuaikan pesan dakwah dengan kebiasaan masyarakat sehingga ajaran Islam terasa dekat.",
            "Dengan cara tersebut, masyarakat dapat mengenal Islam tanpa harus langsung meninggalkan seluruh bentuk kebudayaan yang telah mereka kenal. Ia dikaitkan dengan perkembangan wayang bercorak Islam, lakon seperti Dewa Ruci, serta tembang seperti Lir-ilir dan Gundul-gundul Pacul dalam tradisi.",
            "Ia juga dikaitkan dengan tradisi keramaian yang bertalian dengan hari besar Islam, seperti Sekaten di lingkungan keraton. Pada masa itu, perayaan tersebut menjadi sarana mengenalkan Islam kepada masyarakat luas."
        ],
        "wafat": "Sunan Kalijaga dikenal dimakamkan di Kadilangu, Kabupaten Demak. Akan tetapi, tahun kelahiran dan wafatnya memiliki perbedaan dalam berbagai sumber. Karena itu, tanggal tertentu sebaiknya tidak ditulis sebagai fakta pasti tanpa rujukan yang jelas. Makamnya hingga kini menjadi salah satu tujuan ziarah terbesar di Jawa Tengah.",
        "keteladanan": [
            "Kreatif dalam berdakwah",
            "Bijaksana dan menghargai kebudayaan",
            "Dekat dengan kehidupan masyarakat",
            "Menyampaikan ajaran dengan cara yang mudah diterima",
            "Gigih dan sabar dalam menjalani proses belajar",
            "Mau berubah menjadi lebih baik"
        ],
        "makam": {
            "teks": "Makam Sunan Kalijaga berada di Kadilangu, Kecamatan Demak, Kabupaten Demak, Jawa Tengah.",
            "query": "Makam Sunan Kalijaga Kadilangu Demak"
        }
    },
    "Sunan Muria": {
        "sejarah": [
            "Sunan Muria merupakan salah satu tokoh Walisongo yang dikenal karena berdakwah di pedesaan dan wilayah yang jauh dari pusat pemerintahan. Dalam tradisi sejarah, ia disebut sebagai putra Sunan Kalijaga dan bernama Raden Umar Said. Namanya diambil dari Gunung Muria, tempat ia menetap.",
            "Gunung Muria berada di wilayah Kudus, Jepara, dan Pati di Jawa Tengah. Daerah pegunungan ini pada masa itu relatif terpencil, sehingga dakwah di sana memerlukan kesabaran dan kedekatan dengan masyarakat setempat.",
            "Dalam beberapa riwayat, ia memiliki hubungan dengan Kesultanan Demak dan lingkungan para wali lainnya. Meski demikian, ia lebih dikenal sebagai wali yang memilih hidup sederhana di tengah masyarakat desa."
        ],
        "kelahiran": [
            "Menurut penelitian yang diterbitkan melalui repositori UIN Walisongo pada 2018, Sunan Muria kemungkinan lahir pada 1450-an. Perkiraan ini didasarkan pada penafsiran mengenai usianya ketika terlibat dalam kegiatan di Masjid Demak. Sebagian riwayat lain memiliki keterangan berbeda, sehingga data kelahirannya sebaiknya dipahami sebagai perkiraan.",
            "Dalam tradisi, ia belajar agama kepada ayahnya dan beberapa ulama lain di lingkungan Walisongo. Ia dikenal memiliki kemampuan kuat dalam menaklukkan medan dakwah yang sulit.",
            "Setelah dewasa, ia memilih Gunung Muria dan desa-desa di sekitarnya sebagai pusat dakwah dan tempat tinggal."
        ],
        "metode": [
            "Dalam berdakwah, ia menggunakan pendekatan yang sederhana dan dekat dengan kehidupan masyarakat. Ia berinteraksi langsung dengan petani, nelayan, dan pedagang, serta mengajarkan nilai kejujuran, kerja keras, kesederhanaan, dan ketaatan kepada Allah.",
            "Sunan Muria juga dikaitkan dengan penggunaan kesenian dan tembang Jawa, seperti Sinom dan Kinanthi, sebagai sarana menyampaikan nasihat. Tembang tersebut berisi pesan moral yang mudah diingat oleh masyarakat desa.",
            "Ia juga dikenal membantu masyarakat dalam kegiatan sehari-hari, seperti pertanian dan perdagangan hasil bumi. Dakwahnya berjalan lewat keteladanan hidup, bukan melalui perdebatan atau tekanan."
        ],
        "wafat": "Tahun wafat Sunan Muria belum dapat dipastikan secara meyakinkan. Ia dikenal dimakamkan di kawasan Gunung Muria, Kabupaten Kudus, Jawa Tengah. Makamnya berada di lereng pegunungan dan hingga kini menjadi tujuan ziarah, dengan tradisi masyarakat yang masih dilakukan setiap tahun, seperti Buka Luwur.",
        "keteladanan": [
            "Rendah hati dan sederhana",
            "Dekat dengan masyarakat kecil",
            "Bersedia berdakwah hingga ke wilayah terpencil",
            "Menanamkan kejujuran dan kerja keras",
            "Sabar menghadapi medan dakwah yang sulit",
            "Mengajar melalui keteladanan hidup"
        ],
        "makam": {
            "teks": "Makam Sunan Muria berada di puncak Gunung Muria, Desa Colo, Kecamatan Dawe, Kabupaten Kudus, Jawa Tengah.",
            "query": "Makam Sunan Muria Colo Kudus"
        }
    },
    "Sunan Gunung Jati": {
        "sejarah": [
            "Sunan Gunung Jati dikenal sebagai tokoh Walisongo yang memiliki peran penting dalam perkembangan Islam di Jawa Barat. Ia bernama Syarif Hidayatullah dan dikenal sebagai pendiri Kesultanan Cirebon. Ia juga merupakan satu-satunya wali dalam jajaran Walisongo yang memimpin sebuah kesultanan.",
            "Pada masanya, Cirebon berkembang dari wilayah pesisir kecil menjadi pusat perdagangan dan pemerintahan Islam. Pelabuhan Cirebon menghubungkan Jawa Barat dengan jalur dagang dari berbagai daerah, sehingga menguntungkan penyebaran ajaran Islam.",
            "Dalam berbagai sumber sejarah, ia juga dikaitkan dengan perkembangan kekuasaan Islam di Banten dan peristiwa penaklukan Sunda Kelapa pada abad ke-16. Putranya, Maulana Hasanuddin, dikenal sebagai pendiri Kesultanan Banten dalam tradisi sejarah."
        ],
        "kelahiran": [
            "Dalam tradisi sejarah Cirebon, Syarif Hidayatullah disebut sebagai putra Nyai Rara Santang dan Syarif Abdullah. Nyai Rara Santang dikaitkan dengan keluarga Prabu Siliwangi dari Kerajaan Pajajaran. Tahun kelahirannya diperkirakan pada pertengahan abad ke-15, tetapi tidak dapat dipastikan.",
            "Menurut riwayat yang berkembang, Syarif Hidayatullah mempelajari agama Islam, termasuk melalui perjalanan menuntut ilmu ke Timur Tengah, sebelum datang ke Jawa untuk berdakwah. Rincian perjalanan ini berbeda-beda dalam berbagai naskah.",
            "Setelah tiba di Cirebon, ia bekerja sama dengan Pangeran Cakrabuana, kerabatnya yang lebih dahulu membangun permukiman Islam di sana. Ia kemudian berperan sebagai pemimpin yang mengembangkan Cirebon menjadi kesultanan."
        ],
        "metode": [
            "Dakwah Sunan Gunung Jati dilakukan melalui pendidikan, hubungan sosial, perdagangan, dan pemerintahan. Dari Cirebon, dakwah Islam meluas ke berbagai daerah di Jawa Barat, termasuk Kuningan, Majalengka, dan Banten.",
            "Ia tidak hanya berperan sebagai ulama, tetapi juga sebagai pemimpin politik. Hubungan antara dakwah, perdagangan, dan pemerintahan menjadi bagian penting dalam perkembangan masyarakat Muslim di wilayah tersebut. Ia juga menjalin hubungan dengan Demak dan kekuatan Islam lainnya.",
            "Peninggalan budaya di Cirebon, seperti Masjid Agung Sang Cipta Rasa dan tradisi keraton, memperlihatkan perpaduan unsur budaya setempat dengan nilai-nilai Islam. Ini menunjukkan bahwa pembangunan peradaban juga menjadi bagian dari dakwahnya."
        ],
        "wafat": "Sunan Gunung Jati diperkirakan wafat pada 1570 M dan dimakamkan di kawasan Gunung Jati, Cirebon, Jawa Barat. Sebagian sumber menyebut tahun yang sedikit berbeda. Kompleks makamnya dikenal sebagai Astana Gunung Sembung dan sampai sekarang menjadi tujuan ziarah yang ramai. Pengaruhnya tetap terlihat dalam tradisi keagamaan, pemerintahan, dan kebudayaan masyarakat Cirebon.",
        "keteladanan": [
            "Memiliki jiwa kepemimpinan",
            "Membangun kerja sama",
            "Mengembangkan dakwah melalui pendidikan dan hubungan sosial",
            "Menyeimbangkan peran ulama dan pemimpin",
            "Gigih menuntut ilmu",
            "Membangun peradaban yang bermanfaat bagi masyarakat"
        ],
        "makam": {
            "teks": "Makam Sunan Gunung Jati berada di kompleks Astana Gunung Sembung (Gunung Jati), Kabupaten Cirebon, Jawa Barat.",
            "query": "Makam Sunan Gunung Jati Cirebon"
        }
    }
};


// =========================
// MODAL DETAIL WALISONGO
// =========================
const modal = document.getElementById("detailModal");
const modalImg = document.getElementById("modalImage");

function showDetail(name, realName, location, method) {
    document.getElementById("modalName").textContent = name;

    // Data dasar (nama asli, wilayah, gambar) diambil dari dataWalisongo di script.js
    const dasar = (typeof dataWalisongo !== "undefined") ? dataWalisongo[name] : null;
    const lengkap = detailLengkap[name];

    document.getElementById("modalRealName").textContent = dasar ? dasar.namaAsli : realName;
    document.getElementById("modalLocation").textContent = dasar ? dasar.wilayah : location;

    if (dasar && dasar.gambar) {
        modalImg.src = dasar.gambar;
        modalImg.style.display = "block";
    } else {
        modalImg.style.display = "none";
    }

    const target = document.getElementById("modalMethod");

    if (lengkap) {
        target.innerHTML = buatDetailHTML(name, lengkap);
    } else {
        target.textContent = method; // cadangan kalau data tidak ada
    }

    modal.classList.add("active");
    modal.querySelector(".modal-content").scrollTop = 0;
}

function paragrafHTML(arr) {
    return arr.map(function (p) { return "<p>" + p + "</p>"; }).join("");
}

function buatDetailHTML(name, d) {
    const q = encodeURIComponent(d.makam.query);
    const embedUrl = "https://www.google.com/maps?q=" + q + "&output=embed";
    const linkUrl = "https://www.google.com/maps/search/?api=1&query=" + q;

    return `
        <div class="detail-section">
            <h3>Sejarah</h3>
            ${paragrafHTML(d.sejarah)}
        </div>

        <div class="detail-section">
            <h3>Kelahiran dan Perjalanan Hidup</h3>
            ${paragrafHTML(d.kelahiran)}
        </div>

        <div class="detail-section">
            <h3>Metode Dakwah</h3>
            ${paragrafHTML(d.metode)}
        </div>

        <div class="detail-section detail-wafat">
            <h3>Wafat</h3>
            <p>${d.wafat}</p>
        </div>

        <div class="detail-section">
            <h3>Keteladanan</h3>
            <ul>
                ${d.keteladanan.map(function (k) { return "<li>" + k + "</li>"; }).join("")}
            </ul>
        </div>

        <div class="detail-section">
            <h3>Lokasi Makam</h3>
            <p>${d.makam.teks} Peta di bawah menggunakan pencarian lokasi Google Maps; periksa kembali titik yang ditampilkan sebelum melakukan perjalanan.</p>
            <div class="map-wrap">
                <iframe
                    title="Peta makam ${name}"
                    src="${embedUrl}"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    allowfullscreen></iframe>
            </div>
            <a class="btn-maps" href="${linkUrl}" target="_blank" rel="noopener">
                📍 Buka Petunjuk Lokasi di Google Maps
            </a>
        </div>
    `;
}

function closeDetail() {
    modal.classList.remove("active");
    document.getElementById("modalMethod").innerHTML = ""; // hentikan peta di latar belakang
}

// Tutup modal jika klik area luar
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeDetail();
    }
});

// Tutup modal dengan tombol ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeDetail();
    }
});