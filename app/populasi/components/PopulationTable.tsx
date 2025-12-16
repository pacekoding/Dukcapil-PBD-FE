interface PopulationRow {
  name: string;
  oap: number;
  nonOap: number;
}

interface PopulationTableProps {
  region: string;
  data: PopulationRow[];
}

export default function PopulationTable({ region, data }: PopulationTableProps) {
  // Tentukan apakah provinsi atau kabupaten
  const isProvinsi = region === "provinsi";

  // Hitung total keseluruhan
  const totalOap = data.reduce((sum, row) => sum + row.oap, 0);
  const totalNonOap = data.reduce((sum, row) => sum + row.nonOap, 0);
  const totalAll = totalOap + totalNonOap;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden text-sm md:text-base">
        <thead className="bg-dukcapil-primary text-white">
          <tr>
            <th className="p-3 text-left w-1/3">
              {isProvinsi ? "Kabupaten / Kota" : "Kecamatan"}
            </th>
            <th className="p-3 text-right">OAP</th>
            <th className="p-3 text-right">Non-OAP</th>
            <th className="p-3 text-right">Total</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => {
            const total = row.oap + row.nonOap;
            return (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="p-3">{row.name}</td>
                <td className="p-3 text-right">{row.oap.toLocaleString()}</td>
                <td className="p-3 text-right">{row.nonOap.toLocaleString()}</td>
                <td className="p-3 text-right font-medium">
                  {total.toLocaleString()}
                </td>
              </tr>
            );
          })}

          {/* Baris total */}
          <tr className="bg-gray-100 font-semibold border-t border-gray-300">
            <td className="p-3 text-right">TOTAL</td>
            <td className="p-3 text-right">{totalOap.toLocaleString()}</td>
            <td className="p-3 text-right">{totalNonOap.toLocaleString()}</td>
            <td className="p-3 text-right">{totalAll.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
