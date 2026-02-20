import React from "react";

interface HeroSectionProps {
  content: any;
  language?: string;
}

// Traduções das tooltips das bandeiras
const FLAG_TOOLTIP = {
  pt: "Nascido no Brasil, vivendo na Espanha",
  en: "Born in Brazil, living in Spain",
  es: "Nacido en Brasil, viviendo en España",
  fr: "Né au Brésil, vivant en Espagne",
  de: "Geboren in Brasilien, lebt in Spanien",
};

const HeroSection = ({ content, language = "en" }: HeroSectionProps) => {
  // Reduzindo o tamanho das bandeiras em ~50%
  // Se o texto for 28px (text-3xl) ou 36px (md:text-4xl), bandeira fica em torno de 10px/13px.
  const flagHeight = "h-[10px] md:h-[13px]"; // 50% menor do que text-3xl/md:text-4xl
  const tooltip = FLAG_TOOLTIP[language as keyof typeof FLAG_TOOLTIP] || FLAG_TOOLTIP.en;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-0"
      style={{ marginTop: 0 }}
    >
      <div className="w-full text-center animate-fade-in">
        {/* Space from top reduzido ao mínimo */}
        <div className="mt-0" />
        {/* Titulo */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-green-400 bg-clip-text text-transparent m-0">
          {content.devopsTitle}
        </h1>
        {/* distância aceitável (~1cm ≈ mt-4) entre foto e título */}
        <div className="mt-4" />
        {/* Profile Image */}
        <div className="mx-auto w-48 h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
          <img
            src="/Melo-uploads/3e5a80da-bd12-43ba-996e-0b662d42ee8b.png"
            alt="Alisson Melo"
            className="w-44 h-44 rounded-full object-cover"
          />
        </div>
        {/* Pequeno espaço abaixo da foto */}
        <div className="mt-2" />
        {/* Nome + Bandeiras */}
        <div className="flex items-center justify-center space-x-3 mt-2 mb-0">
          <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-0 flex items-center">
            Alisson Melo
            <span className="flex flex-col items-start ml-2">
              {/* BR flag on top, ES below, altura total ≈ altura de 1 letra */}
              <img
                src="/Melo-uploads/853331bc-a696-4230-b3c5-e8f93e1df2c9.png"
                alt="Bandeira do Brasil"
                className={`${flagHeight} cursor-pointer rounded-sm border border-gray-400 shadow-sm`}
                title={tooltip}
                style={{ display: "inline", marginBottom: "1px" }}
              />
              <img
                src="/Melo-uploads/d6aecd6e-df8a-45d4-ade5-55242ad91a73.png"
                alt="Bandeira da Espanha"
                className={`${flagHeight} cursor-pointer rounded-sm border border-gray-400 shadow-sm`}
                title={tooltip}
                style={{ display: "inline", marginTop: "1px" }}
              />
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
