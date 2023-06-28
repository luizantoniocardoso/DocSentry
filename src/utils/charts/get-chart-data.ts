export function obterMesesComStatus(
  documentos: DocType[],
  status: string
): string[] {
  const meses: string[] = [];

  for (const documento of documentos) {
    if (documento.status === status) {
      const dataCriacao = new Date(documento.dataCriacao);
      const mes = dataCriacao.toLocaleString("default", { month: "long" });

      if (!meses.includes(mes)) {
        meses.push(mes);
      }
    }
  }

  meses.sort((a, b) => {
    const mesesOrdem = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return mesesOrdem.indexOf(a) - mesesOrdem.indexOf(b);
  });

  return meses;
}

export function contarStatusPorMes(
  documentos: DocType[],
  status: string
): number[] {
  const contador: Record<string, number> = {};

  for (const documento of documentos) {
    if (documento.status === status) {
      const dataCriacao = new Date(documento.dataCriacao);
      const mes = `${dataCriacao.getMonth() + 1}/${dataCriacao.getFullYear()}`;

      if (contador[mes]) {
        contador[mes]++;
      } else {
        contador[mes] = 1;
      }
    }
  }

  const mesesOrdenados = Object.keys(contador).sort((a, b) => {
    const [mesA, anoA] = a.split("/").map(Number);
    const [mesB, anoB] = b.split("/").map(Number);
    return (
      new Date(anoA, mesA - 1).getTime() - new Date(anoB, mesB - 1).getTime()
    );
  });

  const quantidades = mesesOrdenados.map((mes) => contador[mes] || 0);

  return quantidades;
}
