// 1) Data produk disimpan di JavaScript
const PRODUCTS = [
  {
    id: "fotocopy-1",
    title: "Fotocopy (BW & Warna)",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>HVS 1 Muka : Rp. 250 / Lembar</li>
      <li>HVS Bolak-Balik : Rp. 500 / Lembar </li>
    </ul>
  `,
    img: "https://maxipro.co.id/wp-content/uploads/2021/10/Image-1-ulearning.com_-1024x682.jpeg",
    alt: "Foto Fotocopy",
  },
  {
    id: "cetakDokumen-1",
    title: "PRINT DOKUMEN ",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>HVS Hitam Putih : Rp. 1.000 / Lembar</li>
      <li>HVS warna dominan hitam putih : Rp. 1.500 / Lembar</li>
      <li>HVS Warna : Rp. 2.000 / Lembar </li>
      <li>Kertas Cover Hitam Putih : Rp. 1.500 / Lembar </li>
      <li>Kertas Cover Warna : Rp. 2.500 / Lembar </li>
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://siopen.balangankab.go.id/storage/merchant/products/2024/03/19/140215dc07d9bf6c02f4669c60a9ac4c.jpg",
    alt: "Foto Print Dokumen",
  },
  {
    id: "cetakPassFoto-1",
    title: "PASS FOTO",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>2x3 : Rp. 5.000 / isi 8 Pcs</li>
      <li>3x4 : Rp. 5.000 / isi 7 Pcs </li>
      <li>4x6 : Rp. 5.000 / isi 6 Pcs </li>
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/93/MTA-100302885/brd-44261_cetak-pas-photo-foto-colour-hitam-putih_full01.jpg",
    alt: "Foto Print Dokumen",
  },
  {
    id: "cetakFoto-1",
    title: "PASS FOTO",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>Polaroid 1,5 R: Rp. 1.000 / Pcs</li>
      <li>2R : Rp. 2.000 </li>
      <li>3R : Rp. 3.000 </li>
      <li>4R : Rp. 4.000 </li>
      <li>5R : Rp. 5.000 </li>
      <li>6R : Rp. 6.000 </li>
      <li>7R : Rp. 7.000 </li>
      <li>8R : Rp. 8.000 </li>
      <li>9R : Rp. 9.000 </li>
      <li>10R : Rp. 10.000 </li>
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://snapy.co.id/gambar/artikel/0802_cetak_foto.jpg",
    alt: "Foto Print Dokumen",
  },
  {
    id: "scanDokumen-1",
    title: "SCAN & DIGITALISASI DOKUMEN",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>HVS Hitam Putih : Rp. 1.000 / Lembar</li>
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEiGQz-0z-HrJyXMLVGfptPZpADNqbb7eig&s",
    alt: "Foto poster ukuran A3",
  },
  {
    id: "jilidBuku-1",
    title: "Jilid Buku / Laporan / Makalah / Skripsi",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>Jilid saja : Rp. 2.000</li>
      <li>Jilid + Cover BW : Rp. 3.000</li>
      <li>Jilid + Cover Full Color : Rp. 4.000</li>
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://www.baliprintshop.com/image/catalog/blog/tape.jpg",
    alt: "Foto Jilid Buku",
  },
  {
    id: "laminating-1",
    title: "Laminating",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>Laminating a4 : Rp. 4.000</li>
      <li>Laminating F4 : Rp. 4.000</li>
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://image1ws.indotrading.com/s3/productimages/webp/co244204/p1173832/w600-h600/7c5957cb-5956-4b2c-8b16-18b3672defd3.jpg",
    alt: "Foto laminating",
  },
  {
    id: "kartunama-1",
    title: "kartu nama",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>Rp. 55.000 ( Isi 100 Pcs )</li>
     
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://centralprint.co.id/centralprint/fotoproduk/20231102052845.jpg",
    alt: "Foto laminating",
  },
  {
    id: "brosur-1",
    title: "brosur",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>..</li>
     
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1R5opcrmXsQWNcgr-q9oVmOpY_GSsBjkQeg&s",
    alt: "Foto laminating",
  },
  {
    id: "poster-1",
    title: "cetak poster",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>Rp. 10.000 / Lembar</li>
     
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://ntbmall.com/images/product/d021ffcc-bc15-439b-9f78-c76c80625d53/d021ffcc-bc15-439b-9f78-c76c80625d53-2023-04-13%2013:49:130.jpg",
  },
  {
    id: "banner-1",
    title: "banner",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>Rp. 25.000 / Meterr</li>
     
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/09052023/631a570a5b9755003d27574c/645a080661926d8ad9f38ce2/c3afe7feacbab8c364de4d8981fb2f.jpg?x-oss-process=image/resize,m_pad,w_432,h_432/quality,Q_70",
  },
  {
    id: "xbanner-1",
    title: "banner",
    desc: `
    <p><strong>Harga:</strong></p>
    <ul>
      <li>Rp. ..</li>
     
      
    </ul>
    <b>*cetak banyak harga lebih murah</b>
  `,
    img: "https://api.bintangsempurna.co.id/images/product/1730954520-LRDVhn8d55.jpg",
  },
];

// 2) Ambil elemen modal sekali saja
const modalEl = document.getElementById("productModal");
const modalTitleEl = document.getElementById("productModalLabel");
const modalImgEl = document.getElementById("productModalImage");
const modalDescEl = document.getElementById("productModalDesc");
const bsModal = new bootstrap.Modal(modalEl);

// 3) Event delegation: tombol apapun yang punya data-product-id akan memicu modal
document.addEventListener("click", function (e) {
  const trigger = e.target.closest("[data-product-id]");
  if (!trigger) return;

  const id = trigger.getAttribute("data-product-id");
  const data = PRODUCTS.find((p) => p.id === id);
  if (!data) return;

  // Isi konten modal dari data JS
  modalTitleEl.textContent = data.title;
  modalDescEl.innerHTML = data.desc;
  modalImgEl.src = data.img;
  modalImgEl.alt = data.alt || data.title || "Gambar produk";

  // Tampilkan modal
  bsModal.show();
});

// (Opsional) Bersihkan gambar saat modal ditutup untuk menghemat memori/browser
modalEl.addEventListener("hidden.bs.modal", () => {
  modalImgEl.src = "";
});
