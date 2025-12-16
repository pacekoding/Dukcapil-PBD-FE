"use client";

import { useState, useEffect } from "react";
import PopulationTable from "./components/PopulationTable";
import PopulationChart from "./components/PopulationChart";
import FilterSelect from "./components/FilterSelect";

interface PopulationRow {
  name: string;
  oap: number;
  nonOap: number;
}

export default function PopulasiPage() {
  const [region, setRegion] = useState("provinsi");
  const [data, setData] = useState<PopulationRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/populasi?wilayah=${region}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [region]);

  return (
    <main className="bg-white min-h-screen text-black px-4 sm:px-6 md:px-10 py-10 sm:py-14">
      {/* ===== HEADER ===== */}
      <header className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dukcapil-primary mb-3 tracking-tight">
          Data Populasi Penduduk
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Menampilkan jumlah penduduk <strong>OAP</strong> dan{" "}
          <strong>Non-OAP</strong> di wilayah{" "}
          <span className="font-semibold">Provinsi Papua Barat Daya</span> serta
          kabupaten/kota terkait.
        </p>
      </header>

      {/* ===== FILTER ===== */}
      <section className="max-w-md mx-auto mb-10 sm:mb-12 text-center">
        <FilterSelect region={region} setRegion={setRegion} />
      </section>

      {/* ===== LOADING ===== */}
      {loading && (
        <div className="text-center py-16 text-gray-500 animate-pulse text-sm sm:text-base">
          Memuat data populasi...
        </div>
      )}

      {/* ===== DATA ===== */}
      {!loading && data.length > 0 && (
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-start">
          {/* === TABLE === */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 overflow-x-auto">
            <h2 className="text-base sm:text-lg font-semibold text-dukcapil-primary mb-4 text-center sm:text-left">
              {region === "provinsi"
                ? "Data Populasi per Kabupaten / Kota"
                : "Data Populasi per Kecamatan"}
            </h2>
            <PopulationTable region={region} data={data} />
          </div>

          {/* === CHART === */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-dukcapil-primary mb-4 text-center sm:text-left">
              Persentase OAP vs Non-OAP
            </h2>
            <div className="flex justify-center">
              <div className="w-[240px] sm:w-[300px] md:w-[360px]">
                <PopulationChart
                  data={{
                    oap: data.reduce((sum, r) => sum + r.oap, 0),
                    nonOap: data.reduce((sum, r) => sum + r.nonOap, 0),
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== EMPTY ===== */}
      {!loading && data.length === 0 && (
        <div className="text-center text-gray-500 py-20 text-sm sm:text-base">
          Tidak ada data populasi untuk wilayah ini.
        </div>
      )}
    </main>
  );
}
