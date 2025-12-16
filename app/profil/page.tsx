import Link from "next/link";
import Image from "next/image";
import { profilDinas } from "@/lib/data";

export default function ProfilPage() {
    const provinsi = profilDinas.provinsi;
    const wilayahList = profilDinas.wilayah;

    return (
        <section className="py-16 bg-white text-black">
            {/* ======= Header Provinsi ======= */}
            <div className="text-center max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-dukcapil-primary mb-3">
                    {provinsi.nama}
                </h1>
                <p className="text-black leading-relaxed">
                    {provinsi.deskripsi}
                </p>

                <div className="mt-6 text-sm text-text-black">
                    <p>
                        <span className="font-semibold">Kepala Dinas:</span>{" "}
                        {provinsi.kepala}
                    </p>
                    <p className="opacity-100">{provinsi.alamat}</p>
                </div>
            </div>

            {/* ======= Divider ======= */}
            <div className="w-24 h-1 bg-dukcapil-accent mx-auto my-12 rounded-full" />

            {/* ======= Daftar Dinas Wilayah ======= */}
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-semibold text-dukcapil-primary text-center mb-10">
                    Dinas Dukcapil Kabupaten / Kota
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wilayahList.map((item) => (
                        <div
                            key={item.slug}
                            className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative w-full h-48 overflow-hidden bg-gray-100 rounded-t-xl">
                                <Image
                                    src={`/logo/${item.slug}.jpg`}
                                    alt={item.nama}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>


                            <div className="p-5 space-y-3">
                                <h3 className="text-lg font-semibold text-black group-hover:text-dukcapil-accent transition">
                                    {item.nama}
                                </h3>
                                <p className="text-sm text-black leading-relaxed line-clamp-3">
                                    {item.deskripsi}
                                </p>
                                <p className="text-xs text-black opacity-80">
                                    <span className="font-medium">Kepala Dinas:</span>{" "}
                                    {item.kepala}
                                </p>
                                <Link
                                    href={`/profil/${item.slug}`}
                                    className="inline-block text-sm font-medium text-dukcapil-accent mt-2 hover:underline"
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
