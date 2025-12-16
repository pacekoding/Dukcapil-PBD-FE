import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-black bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-center text-center space-y-10 py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dukcapil-primary leading-tight tracking-tight">
            Dinas Kependudukan dan Pencatatan Sipil
            <br className="hidden sm:block" />
            Provinsi Papua Barat Daya
          </h1>

          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Selamat datang di portal resmi{" "}
            <strong>Dinas Dukcapil Provinsi Papua Barat Daya</strong>.  
            Kami berkomitmen memberikan layanan administrasi kependudukan yang
            cepat, transparan, dan akurat bagi seluruh masyarakat di wilayah
            provinsi dan kabupaten/kota.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Link
              href="/profil"
              className="bg-dukcapil-primary text-white w-full sm:w-auto px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition text-center"
            >
              Profil Dinas
            </Link>
            <Link
              href="/populasi"
              className="bg-dukcapil-accent text-white w-full sm:w-auto px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition text-center"
            >
              Data Populasi
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VISI MISI SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
        {/* VISI */}
        <div className="p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-semibold text-dukcapil-primary mb-3 border-b border-gray-300 pb-2">
            Visi
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Terwujudnya tertib administrasi kependudukan untuk mendukung
            pembangunan yang berkeadilan dan berkelanjutan di Papua Barat Daya.
          </p>
        </div>

        {/* MISI */}
        <div className="p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-semibold text-dukcapil-primary mb-3 border-b border-gray-300 pb-2">
            Misi
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed text-sm sm:text-base">
            <li>Peningkatan layanan kependudukan berbasis digital</li>
            <li>Validasi dan sinkronisasi data kependudukan</li>
            <li>Peningkatan kapasitas aparatur dan SDM Dukcapil</li>
          </ul>
        </div>

        {/* LAYANAN UTAMA */}
        <div className="p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-semibold text-dukcapil-primary mb-3 border-b border-gray-300 pb-2">
            Layanan Utama
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed text-sm sm:text-base">
            <li>Penerbitan KTP-el, KK, dan Akta Pencatatan Sipil</li>
            <li>Pendaftaran penduduk dan pengelolaan database</li>
            <li>Layanan pindah datang dan pemutakhiran data</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
