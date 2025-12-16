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
    <main className="py-16 px-6 md:px-12 bg-white min-h-screen text-black">
      {/* ===== Header Section ===== */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-dukcapil-primary mb-3">
          Data Populasi Penduduk
        </h1>
        <p className="text-dukcapil-textMuted">
          Menampilkan data jumlah penduduk <strong>OAP</strong> dan{" "}
          <strong>Non-OAP</strong> di wilayah{" "}
          <span className="font-semibold">Provinsi Papua Barat Daya</span>{" "}
          serta seluruh kabupaten/kota.
        </p>
      </div>

      {/* ===== Filter Section ===== */}
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <FilterSelect region={region} setRegion={setRegion} />
      </div>

      {/* ===== Loading State ===== */}
      {loading && (
        <div className="text-center py-16 text-dukcapil-textMuted animate-pulse">
          Memuat data populasi...
        </div>
      )}

      {/* ===== Data Section ===== */}
      {!loading && data.length > 0 && (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* --- Tabel --- */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-semibold text-dukcapil-primary mb-4">
              {region === "provinsi"
                ? "Data Populasi per Kabupaten / Kota"
                : "Data Populasi per Kecamatan"}
            </h2>
            <PopulationTable region={region} data={data} />
          </div>

          {/* --- Chart --- */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-semibold text-dukcapil-primary mb-4">
              Persentase OAP vs Non-OAP
            </h2>
            <PopulationChart
              data={{
                oap: data.reduce((sum, r) => sum + r.oap, 0),
                nonOap: data.reduce((sum, r) => sum + r.nonOap, 0),
              }}
            />
          </div>
        </div>
      )}

      {/* ===== Empty State ===== */}
      {!loading && data.length === 0 && (
        <div className="text-center text-gray-500 py-20">
          Tidak ada data populasi untuk wilayah ini.
        </div>
      )}
    </main>
  );
}
