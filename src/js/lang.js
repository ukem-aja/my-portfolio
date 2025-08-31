function ubahBahasa(bahasa) {
  const teks = {
    id: {
      desDes:
        "Saya menawarkan beragam jasa profesional, mulai dari desain logo, identitas merek, materi promosi cetak dan digital, desain layout, vector tracing, tipografi, hingga kemasan produk. ",
      heroDes:
        "Saya menyediakan jasa desain grafis profesional dengan standar industri, serta layanan percetakan digital dan produk jadi buatan sendiri",
      digDes:
        "Saya melayani berbagai kebutuhan cetak dan fotokopi Anda, mulai dari dokumen, banner, brosur, stiker hingga undangan. Dengan mesin berkualitas  dan proses kerja yang efisien, saya pastikan setiap pesanan selesai dengan cepat dan hasilnya memuaskan.",
      desProd:
        "Saya juga menyediakan produk jadi seperti blangko yasin, kertas, stopmap, dan lain lain ",
    },
    en: {
      desDes:
        "I offer a wide range of professional services, from logo design, brand identity, print and digital promotional materials, layout design, vector tracing, typography, to product packaging.",
      heroDes:
        "I provide professional graphic design services with industry standards, as well as digital printing and self made finished products",
      digDes:
        "I provide comprehensive printing and photocopying services, from documents and banners to brochures and invitations. Using high-quality equipment and an efficient workflow, I ensure every order is completed quickly with exceptional results.",
      desProd:
        "I also provide finished products such as Yasin prayer book blanks, paper, stopmaps, and labels.",
    },
    ar: {
      desDes:
        "أنا أقدم مجموعة واسعة من الخدمات الاحترافية، بدءًا من تصميم الشعارات وهوية العلامة التجارية، والمواد الترويجية المطبوعة والرقمية، وتصميم التخطيط (اللاي آوت)، وتتبع المتجهات (vector tracing)، والطباعة (typography)، وصولاً إلى تغليف المنتجات.",
      heroDes:
        "أنا أقدم خدمات تصميم جرافيكي احترافية بمعايير صناعية، بالإضافة إلى خدمات الطباعة الرقمية والمنتجات النهائية المصنوعة يدويًا.",
      digDes:
        " أنا أقدم خدمات شاملة لنسخ وطباعة المستندات واللافتات والمنشورات والدعوات. باستخدام معدات عالية الجودة وعملية عمل فعالة، أضمن إنجاز كل طلب بسرعة وبنتائج استثنائية. ",
      desProd:
        "أقدم أيضاً منتجات جاهزة مثل قوالب كتاب ياسين، والورق، و Stopmap، والملصقات",
    },
    addnew: {
      desDes: "...",
      heroDes: "...",
    },
  };

  document.getElementById("heroDes").innerText = teks[bahasa].heroDes;
  document.getElementById("desDes").innerText = teks[bahasa].desDes;
  document.getElementById("digDes").innerText = teks[bahasa].digDes;
  document.getElementById("desProd").innerText = teks[bahasa].desProd; // <- tambahan ini
}
