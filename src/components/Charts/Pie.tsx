"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  chartData: number[];
  colors: { [key: string]: string };
}

export function PieChart({ colors, labels, chartData }: PieChartProps) {
  const labelColors = labels.map((label) => colors[label]);

  const options: any = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
    layout: {
      padding: 20,
    },
  };

  const data = {
    labels: labels,

    datasets: [
      {
        data: chartData,
        backgroundColor: labelColors,
        borderColor: labelColors,
        borderWidth: 1,
      },
    ],
  };
  return <Pie className="max-h-80 max-w-80" data={data} options={options} />;
}
