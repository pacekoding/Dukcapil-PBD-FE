"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { profilDinas } from "@/lib/data";

export default function DetailWilayahClient() {
  const params = useParams(); // ✅ hook bawaan Next.js App Router
  const slug = (params?.wilayah as string)?.toLowerCase(); // contoh: "kota-sorong"

  const wilayah = profilDinas.wilayah.find(
    (w) => w.slug.trim().toLowerCase() === slug
  );

  if (!wilayah) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-2">
          Wilayah Tidak Ditemukan
        </h1>
        <p className="text-gray-500 mb-8">
          Slug URL: <code>{slug}</code>
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

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold text-dukcapil-primary mb-4">
        {wilayah.nama}
      </h1>
      <p className="text-dukcapil-textMuted max-w-2xl mx-auto mb-8 leading-relaxed">
        {wilayah.deskripsi}
      </p>

      {/* Info Card */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-left">
        <p>
          <span className="font-semibold text-dukcapil-primary">
            Kepala Dinas:
          </span>{" "}
          {wilayah.kepala}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-dukcapil-primary">Alamat:</span>{" "}
          {wilayah.alamat}
        </p>
      </div>

      {/* Tombol Kembali */}
      <div className="mt-12">
        <Link
          href="/profil"
          className="inline-block bg-dukcapil-accent text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          ← Kembali ke Daftar Wilayah
        </Link>
      </div>
    </section>
  );
}
