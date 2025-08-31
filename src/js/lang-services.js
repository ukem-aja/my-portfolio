function ubahBahasa(bahasa) {
  const teks = {
    id: {
      desainCetak: "Desain Cetak",
    },
    en: {
      desainCetak: "Printing Design",
    },
    ar: {
      desainCetak: "خدمات التصميم",
    },
    addnew: {
      desainCetak: "...",
    },
  };

  document.getElementById("desainCetak").innerText = teks[bahasa].desainCetak;
}
