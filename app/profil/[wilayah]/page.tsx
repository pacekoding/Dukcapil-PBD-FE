"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { profilDinas } from "@/lib/data";

export default function DetailWilayahClient() {
  const params = useParams();
  const slug = (params?.wilayah as string)?.toLowerCase();

  const wilayah = profilDinas.wilayah.find(
    (w) => w.slug.trim().toLowerCase() === slug
  );

  if (!wilayah) {
    return (
      <section className="py-20 text-center bg-white text-black">
        <h1 className="text-2xl font-semibold text-red-600 mb-3">
          Wilayah Tidak Ditemukan
        </h1>
        <p className="text-gray-500 mb-8">
          Slug URL: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
        </p>
        <Link
          href="/profil"
          className="inline-block bg-dukcapil-accent text-white px-5 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          ← Kembali ke Daftar Wilayah
        </Link>
      </section>
    );
  }

  // Struktur organisasi wilayah (mock data sementara)
  const strukturOrganisasi = {
    kepalaDinas: wilayah.kepala,
    bidang: [
      {
        nama: "Bidang Pelayanan Pendaftaran Penduduk",
        kepala: "Kabid Pelayanan Penduduk — Yosepha Rumadas, S.STP",
        seksi: [
          "Kasi Identitas Penduduk — David Wambrauw",
          "Kasi Perpindahan Penduduk — Elvira Mofu",
        ],
      },
      {
        nama: "Bidang Pencatatan Sipil",
        kepala: "Kabid Pencatatan Sipil — Maria Tetelepta, S.Sos",
        seksi: [
          "Kasi Kelahiran & Kematian — Daniel Kambuaya",
          "Kasi Perkawinan & Perceraian — Ester Mambor",
        ],
      },
      {
        nama: "Bidang Pengelolaan Informasi dan Pemanfaatan Data",
        kepala: "Kabid Pengelolaan Data — Yohanis Kambu, S.Kom",
        seksi: [
          "Kasi Database Kependudukan — Ruth Asmuruf",
          "Kasi Pemanfaatan Data — Yosefina Nauw",
        ],
      },
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-white text-black">
      {/* === Breadcrumb === */}
      <nav className="text-sm sm:text-base mb-8 max-w-5xl mx-auto text-gray-600">
        <ul className="flex flex-wrap items-center space-x-1 sm:space-x-2">
          <li>
            <Link
              href="/profil"
              className="text-dukcapil-primary hover:underline font-medium"
            >
            Dinas Dukcapil Provinsi Papua Barat Daya
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-500 truncate max-w-[150px] sm:max-w-none">
            {wilayah.nama}
          </li>
        </ul>
      </nav>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-dukcapil-primary mb-3 tracking-tight">
          {wilayah.nama}
        </h1>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {wilayah.deskripsi}
        </p>
      </div>

      {/* === Info Section === */}
      <div className="max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 text-left space-y-3 mb-12">
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold text-dukcapil-primary">
            Kepala Dinas:
          </span>{" "}
          {wilayah.kepala}
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold text-dukcapil-primary">Alamat:</span>{" "}
          {wilayah.alamat}
        </p>
      </div>

      {/* === Struktur Organisasi === */}
      <div className="max-w-5xl mx-auto px-2 sm:px-6 mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-dukcapil-primary text-center mb-8">
          Struktur Organisasi {wilayah.nama}
        </h2>

        {/* Kepala Dinas */}
        <div className="text-center mb-10">
          <div className="inline-block border border-gray-300 bg-gray-50 rounded-lg px-6 py-4">
            <p className="font-semibold text-dukcapil-primary text-base sm:text-lg">
              Kepala Dinas
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              {strukturOrganisasi.kepalaDinas}
            </p>
          </div>
        </div>

        {/* Bidang & Seksi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strukturOrganisasi.bidang.map((bidang, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold text-dukcapil-primary mb-2 border-b border-gray-300 pb-1">
                {bidang.nama}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{bidang.kepala}</p>

              <ul className="text-xs sm:text-sm text-gray-600 space-y-1 list-disc list-inside">
                {bidang.seksi.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* === Divider === */}
      <div className="w-20 sm:w-24 h-1 bg-dukcapil-accent mx-auto my-10 rounded-full" />

      {/* === Navigation Button === */}
      <div className="text-center">
        <Link
          href="/profil"
          className="inline-block bg-dukcapil-accent text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-yellow-500 transition"
        >
          ← Kembali ke Daftar Wilayah
        </Link>
      </div>
    </section>
  );
}
