import Box from "@/components/Box/Box";
import { BarChart } from "@/components/Charts/Bar";
import { LineChart } from "@/components/Charts/Line";
import { PieChart } from "@/components/Charts/Pie";
import LineChartFilter from "@/components/Filter/LineChartFilter";
import Typography from "@/components/Typography/Typography";
import { statusColors } from "@/utils/charts-colors";
import {
  contarStatusPorMes,
  obterMesesComStatus,
} from "@/utils/charts/get-chart-data";
import { countMonthsOccurrences } from "@/utils/dates/count-month-ocurrences";
import { months } from "@/utils/dates/months";
import React from "react";

type DashboardSearchParams = {
  searchParams: {
    filterStatus: string;
  };
};

export default async function Dashboard({
  searchParams,
}: DashboardSearchParams) {
  const documentStatsResponse = await fetch("http://localhost:3000/documents", {
    next: { revalidate: 1 },
  });

  const documentsResult: DocType[] = await documentStatsResponse.json(); // retorno de todos os documentos

  const status = documentsResult.map((document) => document.status); // todos os status

  const statusLabels = Array.from(
    new Set(documentsResult.map((document) => document.status)) //status sem repetições pra colocar no label do gráfico
  );

  const statusCounts: number[] = Object.values(
    status.reduce((counts: { [status: string]: number }, status: string) => {
      counts[status] = (counts[status] || 0) + 1;
      return counts;
    }, {} as { [status: string]: number })
  ); // retorna um array com a quantidade de vezes que cada status se repete

  const usersResponse = await fetch("http://localhost:3000/users", {
    next: { revalidate: 1 },
  });
  const usersResult = await usersResponse.json();

  return (
    <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 max-h-screen overflow-auto ">
      <div className="xl:col-span-3">
        <div className="border rounded-lg shadow-xl">
          <Box bgColor="light">
            <div className="flex items-center justify-between">
              <Typography>
                Quantidade de documentos com status{" "}
                {searchParams.filterStatus ?? "Concluido"} nos últimos meses
              </Typography>
              <div className="flex items-center gap-2">
                <Typography>Filtrar por status de documento</Typography>
                <LineChartFilter />
              </div>
            </div>
            <LineChart
              labels={obterMesesComStatus(
                documentsResult,
                searchParams.filterStatus ?? "Concluido"
              )}
              chartData={contarStatusPorMes(
                documentsResult,
                searchParams.filterStatus ?? "Concluido"
              )}
            />
          </Box>
        </div>
      </div>

      <div className="border rounded-lg  shadow-xl ">
        <Box bgColor="light">
          <Typography>Status dos documentos registrados</Typography>
          <PieChart
            colors={statusColors}
            labels={statusLabels}
            chartData={statusCounts}
          />
        </Box>
      </div>

      <div className="border rounded-lg shadow-xl">
        <Box bgColor="light">
          <div className="flex flex-col gap-4">
            <div>
              <Typography>Total de documentos registrados</Typography>
              <Typography variant="h1">{documentsResult.length}</Typography>
            </div>
            <div>
              <Typography>Total de usuários registrados</Typography>
              <Typography variant="h1">{usersResult.length}</Typography>
            </div>
            <div>
              <Typography>Nome do melhor professor da UNISATC</Typography>
              <Typography variant="h1">Yuri</Typography>
            </div>
          </div>
        </Box>
      </div>

      <div className="border rounded-lg shadow-xl ">
        <Box bgColor="light">
          <Typography>Status dos documentos registrados</Typography>
          <PieChart
            colors={statusColors}
            labels={statusLabels}
            chartData={statusCounts}
          />
        </Box>
      </div>
    </div>
    
  );
}
