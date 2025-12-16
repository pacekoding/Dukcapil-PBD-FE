import OrganizationTree from "@/components/OrganizationTree"
import Link from "next/link";
import Image from "next/image";
import { profilDinas } from "@/lib/data";

export default function ProfilPage() {
  const provinsi = profilDinas.provinsi;
  const wilayahList = profilDinas.wilayah;

  const strukturOrganisasi = {
    kepalaDinas: provinsi.kepala,
    bidang: [
      {
        nama: "Bidang Pelayanan Pendaftaran Penduduk",
        kepala: "Kabid Pelayanan Penduduk — Yuliana Mandacan, S.STP",
        seksi: [
          "Kasi Identitas Penduduk — Antonius Malai",
          "Kasi Perpindahan Penduduk — Lidia Wambrauw",
        ],
      },
      {
        nama: "Bidang Pencatatan Sipil",
        kepala: "Kabid Pencatatan Sipil — Maria Rumbekwan, S.Sos",
        seksi: [
          "Kasi Kelahiran & Kematian — Damaris Kambuaya",
          "Kasi Perkawinan & Perceraian — Albertus Sorong",
        ],
      },
      {
        nama: "Bidang Pengelolaan Informasi dan Pemanfaatan Data",
        kepala: "Kabid Pengelolaan Data — Samuel Kambu, S.Kom",
        seksi: [
          "Kasi Database Kependudukan — Rina Tambrauw",
          "Kasi Pemanfaatan Data — Yosefina Nauw",
        ],
      },
    ],
  };

  return (
    <section className="py-12 sm:py-16 bg-white text-black">
      <OrganizationTree
        struktur={strukturOrganisasi}
        title="Struktur Organisasi Dinas Dukcapil Provinsi Papua Barat Daya"
      />
      {/* ======= Divider ======= */}
      <div className="w-24 h-1 bg-dukcapil-accent mx-auto my-12 rounded-full" />

      {/* ======= Dinas Kabupaten / Kota ======= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-dukcapil-primary text-center mb-10 tracking-tight">
          Dinas Dukcapil Kabupaten / Kota
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {wilayahList.map((item) => (
            <div
              key={item.slug}
              className="group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-40 sm:h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={`/logo/${item.slug}.jpg`}
                  alt={item.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-black group-hover:text-dukcapil-accent transition">
                  {item.nama}
                </h3>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {item.deskripsi}
                </p>

                <p className="text-xs text-gray-600">
                  <span className="font-medium">Kepala Dinas:</span>{" "}
                  {item.kepala}
                </p>

                <Link
                  href={`/profil/${item.slug}`}
                  className="inline-block text-xs sm:text-sm font-medium text-dukcapil-accent mt-2 hover:underline"
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
