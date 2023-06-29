type DocType = {
  id?: number | undefined;
  nome: string;
  status: "Concluido" | "Pendente" | "Em analise";
  responsavel: string;
  dataCriacao: string | Date;
  dataRevisao: string | Date;
};
