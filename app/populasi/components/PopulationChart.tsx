"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

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
        backgroundColor: ["#1E3A8A", "#FBBF24"], // Biru & Kuning Dukcapil
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 12,
            family: "Inter, sans-serif",
          },
          color: "#1f2937",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: ${context.formattedValue} (${(
              (context.parsed / total) *
              100
            ).toFixed(1)}%)`,
        },
      },
    },
  };

  // Custom plugin untuk menulis persentase langsung di atas tiap slice
  const percentagePlugin = {
    id: "percentagePlugin",
    afterDraw: (chart: any) => {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;

      chart.data.datasets.forEach((dataset: any, i: number) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((arc: any, index: number) => {
          const value = dataset.data[index];
          const percent = ((value / total) * 100).toFixed(1) + "%";
          const pos = arc.tooltipPosition();

          ctx.save();
          ctx.fillStyle = "#fff";
          ctx.font = "bold 12px Inter, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(percent, pos.x, pos.y);
          ctx.restore();
        });
      });
    },
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50">
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Pie data={chartData} options={options} plugins={[percentagePlugin]} />
      </div>
      <p className="text-center mt-4 text-sm text-gray-600 font-medium">
        Total Penduduk: {total.toLocaleString()} jiwa
      </p>
    </div>
  );
}
