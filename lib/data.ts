// lib/data.ts

export const profilDinas = {
  provinsi: {
    slug: "provinsi",
    nama: "Dinas Dukcapil Provinsi Papua Barat Daya",
    kepala: "Drs. Yohanes Mofu",
    alamat: "Jl. Sarsay, Kota Sorong, Papua Barat Daya",
    deskripsi:
      "Dinas Kependudukan dan Pencatatan Sipil Provinsi Papua Barat Daya bertugas menyelenggarakan urusan administrasi kependudukan di tingkat provinsi.",
  },
  wilayah: [
    {
      slug: "kota-sorong",
      nama: "Dinas Dukcapil Kota Sorong",
      kepala: "Maria S. Kalami, S.Sos",
      alamat: "Jl. Basuki Rahmat, Kota Sorong",
      deskripsi:
        "Mengelola layanan administrasi kependudukan bagi warga Kota Sorong.",
    },
    {
      slug: "kabupaten-sorong",
      nama: "Dinas Dukcapil Kabupaten Sorong",
      kepala: "Ronaldo Y. Wambraw, S.Pd",
      alamat: "Jl. Aimas Raya, Kabupaten Sorong",
      deskripsi:
        "Menyediakan layanan kependudukan di wilayah Kabupaten Sorong.",
    },
    {
      slug: "kabupaten-sorong-selatan",
      nama: "Dinas Dukcapil Kabupaten Sorong Selatan",
      kepala: "Yohana M. Kambu, M.Si",
      alamat: "Jl. Teminabuan Raya, Kabupaten Sorong Selatan",
      deskripsi:
        "Bertanggung jawab atas pencatatan sipil dan administrasi kependudukan di Kabupaten Sorong Selatan.",
    },
    {
      slug: "kabupaten-raja-ampat",
      nama: "Dinas Dukcapil Kabupaten Raja Ampat",
      kepala: "Markus M. Mambrasar",
      alamat: "Jl. Waisai Raya, Kabupaten Raja Ampat",
      deskripsi:
        "Mengelola layanan administrasi kependudukan di Kabupaten Raja Ampat.",
    },
    {
      slug: "kabupaten-maybrat",
      nama: "Dinas Dukcapil Kabupaten Maybrat",
      kepala: "Selina T. Kebiar, S.H",
      alamat: "Jl. Kumurkek Raya, Kabupaten Maybrat",
      deskripsi:
        "Melayani urusan administrasi kependudukan di wilayah Kabupaten Maybrat.",
    },
    {
      slug: "kabupaten-tambrauw",
      nama: "Dinas Dukcapil Kabupaten Tambrauw",
      kepala: "Abraham R. Warikar",
      alamat: "Jl. Sausapor Raya, Kabupaten Tambrauw",
      deskripsi:
        "Menyediakan layanan kependudukan dan pencatatan sipil di Kabupaten Tambrauw.",
    },
  ],
};

export const populasiData: Record<
  string,
  { oap: number; nonOap: number }
> = {
  provinsi: { oap: 280000, nonOap: 150000 },
  "kota-sorong": { oap: 82000, nonOap: 40000 },
  "kabupaten-sorong": { oap: 64000, nonOap: 28000 },
  "kabupaten-sorong-selatan": { oap: 45000, nonOap: 12000 },
  "kabupaten-raja-ampat": { oap: 38000, nonOap: 14000 },
  "kabupaten-maybrat": { oap: 31000, nonOap: 9000 },
  "kabupaten-tambrauw": { oap: 26000, nonOap: 8000 },
};
