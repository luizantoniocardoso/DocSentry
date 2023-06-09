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

export function LineChart() {
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
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        fill: "start",
      },
    ],
  };
  return <Line className="max-w-80 max-h-80" data={data} options={options} />;
}
