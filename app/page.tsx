import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-black">
      <section className="flex flex-col items-center text-center space-y-12 py-16 bg-dukcapil-secondary">
        {/* ================= HERO SECTION ================= */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dukcapil-primary leading-tight">
            Dinas Kependudukan dan Pencatatan Sipil
            <br />
            Provinsi Papua Barat Daya
          </h1>

          <p className="text-dukcapil-textMuted max-w-2xl mx-auto text-lg leading-relaxed">
            Selamat datang di portal resmi <strong>Dinas Dukcapil Provinsi Papua Barat Daya</strong>.
            Kami berkomitmen memberikan layanan administrasi kependudukan yang cepat, transparan,
            dan akurat bagi seluruh masyarakat di wilayah provinsi dan kabupaten/kota.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            <Link
              href="/profil"
              className="bg-dukcapil-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition"
            >
              Profil Dinas
            </Link>
            <Link
              href="/populasi"
              className="bg-dukcapil-accent text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition"
            >
              Data Populasi
            </Link>
          </div>
        </div>

        {/* ================= VISI MISI SECTION ================= */}
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          {/* VISI */}
          <div className="p-8 bg-dukcapil-secondary rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-dukcapil-primary mb-3 border-b pb-2">
              Visi
            </h3>
            <p className="text-dukcapil-text leading-relaxed">
              Terwujudnya tertib administrasi kependudukan untuk mendukung
              pembangunan yang berkeadilan dan berkelanjutan di Papua Barat Daya.
            </p>
          </div>

          {/* MISI */}
          <div className="p-8 bg-dukcapil-secondary rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-dukcapil-primary mb-3 border-b pb-2">
              Misi
            </h3>
            <ul className="list-disc list-inside space-y-2 text-dukcapil-text leading-relaxed">
              <li>Peningkatan layanan kependudukan berbasis digital</li>
              <li>Validasi dan sinkronisasi data kependudukan</li>
              <li>Peningkatan kapasitas aparatur dan SDM Dukcapil</li>
            </ul>
          </div>

          {/* LAYANAN UTAMA */}
          <div className="p-8 bg-dukcapil-secondary rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-dukcapil-primary mb-3 border-b pb-2">
              Layanan Utama
            </h3>
            <ul className="list-disc list-inside space-y-2 text-dukcapil-text leading-relaxed">
              <li>Penerbitan KTP-el, KK, dan Akta Pencatatan Sipil</li>
              <li>Pendaftaran penduduk dan pengelolaan database</li>
              <li>Layanan pindah datang dan pemutakhiran data</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  );
}
