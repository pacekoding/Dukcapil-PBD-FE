"use client";

interface StrukturOrganisasi {
  kepalaDinas: string;
  bidang: {
    nama: string;
    kepala: string;
    seksi: string[];
  }[];
}

export default function OrganizationTree({
  struktur,
  title,
}: {
  struktur: StrukturOrganisasi;
  title?: string;
}) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 text-black">
      {/* === Title === */}
      {title && (
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-dukcapil-primary mb-10">
          {title}
        </h2>
      )}

      {/* === Kepala Dinas === */}
      <div className="flex flex-col items-center">
        <div className="border border-gray-300 bg-gray-50 rounded-md px-6 py-3 text-center">
          <p className="font-semibold text-dukcapil-primary text-sm">Kepala Dinas</p>
          <p className="text-sm text-gray-800 mt-1">{struktur.kepalaDinas}</p>
        </div>

        {/* Garis penghubung */}
        <div className="w-[1px] h-6 bg-gray-300" />
      </div>

      {/* === Bidang dan Seksi === */}
      <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-10 mt-4">
        {struktur.bidang.map((bidang, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="border border-gray-300 bg-gray-50 rounded-md px-4 py-3 text-center w-60">
              <p className="text-sm font-semibold text-dukcapil-primary">{bidang.nama}</p>
              <p className="text-xs text-gray-700 mt-1">{bidang.kepala}</p>
            </div>

            <div className="w-[1px] h-5 bg-gray-300" />

            <div className="flex flex-col gap-2 mt-2">
              {bidang.seksi.map((seksi, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 bg-gray-50 rounded-md px-3 py-2 text-xs text-gray-700 text-center w-48"
                >
                  {seksi}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
