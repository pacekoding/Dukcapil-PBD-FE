"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PopulationChart({
  data,
}: {
  data: { oap: number; nonOap: number };
}) {
  const total = data.oap + data.nonOap;
  const chartData = {
    labels: ["OAP", "Non-OAP"],
    datasets: [
      {
        data: [data.oap, data.nonOap],
        backgroundColor: ["#2563eb", "#f59e0b"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="border rounded-lg p-4">
      <Pie data={chartData} />
      <p className="text-center mt-4 text-sm text-gray-600">
        Total: {total.toLocaleString()} penduduk
      </p>
    </div>
  );
}
