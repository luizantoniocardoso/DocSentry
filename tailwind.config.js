/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    lineHeight: {
      DEFAULT: "2",
    },

    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for collapsed sidebar layout
      },
      colors: {
        primary: "#51AFE5", // Roxo escuro para cor principal
        secondary: "#327EBD", // Roxo médio para cor secundária
        accent: "#FFF37A", // Amarelo dourado para cor de destaque
        light: "#F4F7FA",
        dark: "#2E3A46",
        success: "#22C55E", // Verde para sucesso
        error: "#EF4444", // Vermelho para erro
        warning: "#F59E0B", // Amarelo para aviso
        info: "#3B82F6", // Azul para informações
      },
      fontFamily: {
        // Adicione suas fontes personalizadas aqui
        sans: ["Roboto", "sans-serif"],
        // ...
      },
      fontSize: {
        // Adicione tamanhos de fonte personalizados aqui
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        // ...
      },
      borderRadius: {
        // Adicione arredondamentos de borda personalizados aqui
        DEFAULT: "1rem",
        xs: "0.4rem",
        md: "1rem",
        lg: "1.2rem",
        // ...
      },

      screens: {
        // Adicione suas media queries personalizadas aqui
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        // ...
      },
    },
    plugins: [],
  },
};
