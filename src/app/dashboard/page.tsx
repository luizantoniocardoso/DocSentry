import Box from "@/components/Box/Box";
import { BarChart } from "@/components/Charts/Bar";
import { LineChart } from "@/components/Charts/Line";
import { PieChart } from "@/components/Charts/Pie";
import Typography from "@/components/Typography/Typography";
import { statusColors } from "@/utils/charts-colors";
import React from "react";

export default async function Dashboard() {
  const documentStatsResponse = await fetch("http://localhost:3000/documents");

  const documentStatusResult: DocType[] = await documentStatsResponse.json(); // retorno de todos os documentos

  const status = documentStatusResult.map((document) => document.status); // todos os status

  const statusLabels = Array.from(
    new Set(documentStatusResult.map((document) => document.status)) //status sem repetições pra colocar no label do gráfico
  );

  const statusCounts: number[] = Object.values(
    status.reduce((counts: { [status: string]: number }, status: string) => {
      counts[status] = (counts[status] || 0) + 1;
      return counts;
    }, {} as { [status: string]: number })
  ); // retorna um array com a quantidade de vezes que cada status se repete

  return (
    <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 max-h-screen overflow-auto">
      <div className="xl:col-span-3">
        <Box bgColor="light">
          <Typography>Status dos documentos registrados</Typography>
          <LineChart />
        </Box>
      </div>

      <Box bgColor="light">
        <Typography>Status dos documentos registrados</Typography>
        <PieChart
          colors={statusColors}
          labels={statusLabels}
          chartData={statusCounts}
        />
      </Box>
      <Box bgColor="light">
        <Typography>Status dos documentos registrados</Typography>
        <PieChart
          colors={statusColors}
          labels={statusLabels}
          chartData={statusCounts}
        />
      </Box>
      <Box bgColor="light">
        <Typography>Status dos documentos registrados</Typography>
        <PieChart
          colors={statusColors}
          labels={statusLabels}
          chartData={statusCounts}
        />
      </Box>
    </div>
  );
}
