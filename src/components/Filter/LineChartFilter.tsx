"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import Typography from "../Typography/Typography";
import Select from "../Select/Select";
import Option from "../Select/Option";
import FullPageSpinner from "../Spinner/FullPageSpinenr";

export default function LineChartFilter() {
  const { replace } = useRouter();
  const pathname = usePathname();
  // const [isPending, startTransition] = useTransition();
  const [activeFilter, setActiveFilter] = useState<string | undefined>("");

  const handleSearch = (query: string | undefined, param: string) => {
    setActiveFilter(query);
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(param);

    // Verifica se o valor do parâmetro já é igual ao valor de busca
    if (query && paramValue === query) {
      return;
    }

    // Define o novo valor do parâmetro de acordo com a busca
    if (query) {
      params.set(param, query);
    } else {
      // Remove o parâmetro se a busca for vazia
      params.delete(param);
    }

    // Inicia a transição de página (exemplo de uso do startTransition e replace)
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      <Select
        onChange={(e) => {
          handleSearch(e.target.value, "filterStatus");
        }}
        value={activeFilter}
      >
        <Option value="Concluido">Concluido</Option>
        <Option value="Em analise">Em analise</Option>
      </Select>
      {/* {isPending && <FullPageSpinner />} */}
    </div>
  );
}
