<div align="center">
  <img src="logo.jpeg" alt="logo de cria" />
</div>

# 🏷️ DocSentry

## 👨‍💻 Lista de Integrantes da Equipe

- [Keniel](https://github.com/KenielDev)
- [Luiz Antônio](https://github.com/Luiz-Antonio-Cardoso)
- [Arthur](https://github.com/arthurromansini)
- [Bruna](https://github.com/brupperuch)
- [Guilherme](https://github.com/guilhermebp030504)

## 📋 Descrição do Projeto

O sistema irá lidar com os aspectos de cadastro, aprovação, identificação, distribuição e armazenamento de documentos de uma empresa.

## 🎯 Objetivo do Projeto

Visto que a maioria das empresas hoje fazem a organização e armazenamento de documentos em pastas compartilhadas e suas aprovações via e-mail, não possuindo o histórico de aprovações e revisões de um documento. O DocSentry vai auxiliar no workflow de publicação do documento até ele estar disponível para os colaboradores. Podendo este visualizar todas as informações pertinentes ao mesmo, e em caso de revisão ou término de vigência ele será alertado sobre a necessidade de alteração do mesmo.

## 🛠️ Estrutura do Projeto

- Login - Autenticação de usuário
- Dashboard - Visão geral dos documentos pendentes, em revisão e aprovados
- Cadastro de novos usuários e gestão de permissões.
- Lista de arquivos - Gerenciar os dados relacionados aos documentos como visualizar,editar, revisar e aprovar.

## 👥 Público-alvo

Empresas que possuem sistema de gestão de qualidade.

## 👨‍💻 Techs

- [Next.js](https://nextjs.org/) - Um framework React para criar aplicativos web do lado do servidor.
- [React](https://react.dev/) - Uma biblioteca JavaScript para construir interfaces de usuário.
- [Tailwindcss](https://tailwindcss.com/) - Um framework CSS utilitário altamente personalizável e fácil de usar.
- [React Hook Form](https://react-hook-form.com/) - Uma biblioteca de gerenciamento de formulários para React que utiliza Hooks para permitir um controle preciso e eficiente dos mesmos.
- [Zod](https://github.com/colinhacks/zod) - Uma biblioteca de gerenciamento de formulários para React que utiliza Hooks para permitir um controle preciso e eficiente dos mesmos.

## 🧐 Diferenciais importantes do projeto

- Alertas de vencimento e revisão dos documentos, quando informado uma data/período de revisão do do documento o sistema irá alertar ao usuário.
- Identificar se a cópia do documento é controlada ou não, onde uma cópia controlada é aquela que tem as suas atualizações rigorosamente gerenciadas. Já uma cópia não controlada deixa de ser revisada e atualizada quando utilizada em meio externo ou em alguma situação específica;
- Manter um histórico de revisão dos documentos publicados.

## Telas

- Login - inputs de username e senha
- Cadastro de usuários/edição - listar users e informar username, senha, email, permissões (dropdown de checkbox).
- Lista de docs - (MODAL) Cadastro, aprovação e listagem de docs com nome, data de validade, status, data de data de alteração, extensão do arquivo, user responsável e departamento responsável.
- Dashboard - Quantidade total de docs, por departamento, vencidos, aprovados.


---
