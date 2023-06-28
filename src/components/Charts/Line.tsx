"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  labels: string[];
  chartData: number[];
}

export function LineChart({ chartData, labels }: LineChartProps) {
  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      filler: {
        propagate: false,
      },
      interaction: {
        intersect: false,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revisões Mensais Concluídas",
        data: chartData,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        fill: "start",
      },
    ],
  };
  return <Line className="max-w-80 max-h-80" data={data} options={options} />;
}
