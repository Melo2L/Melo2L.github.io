import { useState, useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TechnologiesSection from "../components/TechnologiesSection";
import ProjectsSection from "../components/ProjectsSection";
import LanguageDropdown from "../components/LanguageDropdown";
import AboutSection from "../components/AboutSection";
import ContactSidebarButtons from "../components/ContactSidebarButtons";

// Adicionando a imagem da Tokio School, o texto Formação, e a descrição traduzida
const content = {
  en: {
    home: "Home",
    about: "About Me",
    projects: "Projects",
    language: "Language",
    devopsTitle: "Cloud & DevOps Portfolio",
    myTechnologies: "My Technologies",
    education: "Education",
    educationText: "I'm studying at Tokio School!",
    educationImageAlt: "Tokio School",
    recentProjects: "Recent Projects",
    contactMe: "Contact Me",
    myEmail: "My E-mail",
    aboutText:
      "I'm currently studying DevOps at Tokio School in Porto, Portugal. I am passionate about studying Python language and programming, and have a huge interest in the area of AI.",
    formation: "Education",
    formationImageAlt: "Tokio School",
    formationDescription:
      "Tokio School is a tech training school specializing in practical and modern education for developers and IT professionals. With presence in Portugal and Spain, it offers courses focused on areas like DevOps, Programming, Cybersecurity, and Cloud, preparing students for the current market demands.",
    flagTooltip: "Born in Brazil, living in Spain",

    // ✅ ALTERADO: Projects (3 cards fixos)
    projectsList: [
      {
        title: "SurfPulse Project",
        description: "Automated deployment pipeline using Docker, Linux, Python",
        tech: ["Docker", "Python", "Linux"],
        link: "https://github.com/Melo2L/projeto-final-devops",
      },
      {
        title: "DevOps Portfolio AWS (This Website)",
        description:
          "Production-ready DevOps portfolio deployed on AWS using Terraform, Docker CI/CD and Cloudflare HTTPS.",
        tech: ["AWS", "Terraform", "Docker", "Linux"],
        link: "https://github.com/Melo2L/Melo2L.github.io",
      },
      {
        title: "Working...",
        description: "Working...",
        tech: [],
      },
    ],
  },

  pt: {
    home: "Início",
    about: "Sobre Mim",
    projects: "Projetos",
    language: "Idioma",
    devopsTitle: "Portfólio Cloud & DevOps",
    myTechnologies: "Minhas Tecnologias",
    education: "Formação",
    educationText: "Estou estudando na Tokio School!",
    educationImageAlt: "Tokio School",
    recentProjects: "Projetos Recentes",
    contactMe: "Entre em Contato",
    myEmail: "Meu E-mail",
    aboutText:
      "Atualmente estudo DevOps na Tokio School, no Porto, Portugal. Sou apaixonado pelo estudo da linguagem Python e programação, e tenho grande interesse pela área de IA.",
    formation: "Formação",
    formationImageAlt: "Tokio School",
    formationDescription:
      "Tokio School é uma escola de formação tecnológica especializada no ensino prático e moderno para desenvolvedores e profissionais de TI. Com presença em Portugal e Espanha, oferece cursos focados em áreas como DevOps, Programação, Cibersegurança e Cloud, preparando os alunos para as exigências do mercado atual.",
    flagTooltip: "Nascido no Brasil, vivendo na Espanha",

    // ✅ ALTERADO: Projects (3 cards fixos)
    projectsList: [
      {
        title: "Projeto SurfPulse",
        description: "Pipeline de deploy automatizado usando Docker, Linux, Python",
        tech: ["Docker", "Python", "Linux"],
        link: "https://github.com/Melo2L/projeto-final-devops",
      },
      {
        title: "Portfólio DevOps AWS (Este Site)",
        description:
          "Portfólio DevOps em produção na AWS usando Terraform, Docker CI/CD e HTTPS com Cloudflare.",
        tech: ["AWS", "Terraform", "Docker", "Linux"],
        link: "https://github.com/Melo2L/Melo2L.github.io",
      },
      {
        title: "Em desenvolvimento...",
        description: "Em desenvolvimento...",
        tech: [],
      },
    ],
  },

  es: {
    home: "Inicio",
    about: "Acerca de Mí",
    projects: "Proyectos",
    language: "Idioma",
    devopsTitle: "Portafolio Cloud & DevOps",
    myTechnologies: "Mis Tecnologías",
    education: "Formación",
    educationText: "¡Estoy estudiando en Tokio School!",
    educationImageAlt: "Tokio School",
    recentProjects: "Proyectos Recientes",
    contactMe: "Contáctame",
    myEmail: "Mi Correo",
    aboutText:
      "Actualmente estudio DevOps en Tokio School en Oporto, Portugal. Me apasiona estudiar el lenguaje Python y la programación, y tengo mucho interés en el área de IA.",
    formation: "Formación",
    formationImageAlt: "Tokio School",
    formationDescription:
      "Tokio School es una escuela de formación tecnológica especializada en la enseñanza práctica y moderna para desarrolladores y profesionales de TI. Con presencia en Portugal y España, ofrece cursos enfocados en áreas como DevOps, Programación, Ciberseguridad y Cloud, preparando a los alumnos para las demandas del mercado actual.",
    flagTooltip: "Nacido en Brasil, viviendo en España",

    // ✅ ALTERADO: Projects (3 cards fixos)
    projectsList: [
      {
        title: "Proyecto SurfPulse",
        description:
          "Pipeline de despliegue automatizado usando Docker, Linux, Python",
        tech: ["Docker", "Python", "Linux"],
        link: "https://github.com/Melo2L/projeto-final-devops",
      },
      {
        title: "Portafolio DevOps AWS (Este Sitio)",
        description:
          "Portafolio DevOps en producción en AWS usando Terraform, Docker CI/CD y HTTPS con Cloudflare.",
        tech: ["AWS", "Terraform", "Docker", "Linux"],
        link: "https://github.com/Melo2L/Melo2L.github.io",
      },
      {
        title: "En progreso...",
        description: "En progreso...",
        tech: [],
      },
    ],
  },

  fr: {
    home: "Accueil",
    about: "À Propos",
    projects: "Projets",
    language: "Langue",
    devopsTitle: "Portfolio Cloud & DevOps",
    myTechnologies: "Mes Technologies",
    education: "Formation",
    educationText: "J'étudie à Tokio School !",
    educationImageAlt: "Tokio School",
    recentProjects: "Projets Récents",
    contactMe: "Contactez-moi",
    myEmail: "Mon E-mail",
    aboutText:
      "J'étudie actuellement le DevOps à la Tokio School à Porto, au Portugal. Je suis passionné par l'étude du langage Python et la programmation, et j'ai un grand intérêt pour l'IA.",
    formation: "Formation",
    formationImageAlt: "Tokio School",
    formationDescription:
      "Tokio School est une école de formation technologique spécialisée dans l'enseignement pratique et moderne pour les développeurs et professionnels IT. Présente au Portugal et en Espagne, elle propose des cours axés sur des domaines comme le DevOps, la Programmation, la Cybersécurité et le Cloud, préparant les étudiants aux exigences du marché actuel.",
    flagTooltip: "Né au Brésil, vivant en Espagne",

    // ✅ ALTERADO: Projects (3 cards fixos)
    projectsList: [
      {
        title: "Projet SurfPulse",
        description:
          "Pipeline de déploiement automatisé avec Docker, Linux, Python",
        tech: ["Docker", "Python", "Linux"],
        link: "https://github.com/Melo2L/projeto-final-devops",
      },
      {
        title: "Portfolio DevOps AWS (Ce Site)",
        description:
          "Portfolio DevOps en production sur AWS avec Terraform, Docker CI/CD et HTTPS via Cloudflare.",
        tech: ["AWS", "Terraform", "Docker", "Linux"],
        link: "https://github.com/Melo2L/Melo2L.github.io",
      },
      {
        title: "En cours...",
        description: "En cours...",
        tech: [],
      },
    ],
  },

  de: {
    home: "Startseite",
    about: "Über Mich",
    projects: "Projekte",
    language: "Sprache",
    devopsTitle: "Cloud & DevOps Portfolio",
    myTechnologies: "Meine Technologien",
    education: "Ausbildung",
    educationText: "Ich studiere an der Tokio School!",
    educationImageAlt: "Tokio School",
    recentProjects: "Aktuelle Projekte",
    contactMe: "Kontaktiere Mich",
    myEmail: "Meine E-Mail",
    aboutText:
      "Ich studiere derzeit DevOps an der Tokio School in Porto, Portugal. Ich bin begeistert vom Studium der Programmiersprache Python, Programmierung und interessiere mich sehr für den Bereich KI.",
    formation: "Ausbildung",
    formationImageAlt: "Tokio School",
    formationDescription:
      "Tokio School ist eine technologische Ausbildungsschule, die sich auf praxisnahes und modernes Lernen für Entwickler und IT-Fachleute spezialisiert hat. Mit Standorten in Portugal und Spanien bietet sie Kurse in Bereichen wie DevOps, Programmierung, Cybersicherheit und Cloud an, um die Schüler bestmöglich auf die Anforderungen des aktuellen Marktes vorzubereiten.",
    flagTooltip: "Geboren in Brasilien, lebt in Spanien",

    // ✅ ALTERADO: Projects (3 cards fixos)
    projectsList: [
      {
        title: "SurfPulse Projekt",
        description:
          "Automatisierte Deployment-Pipeline mit Docker, Linux, Python",
        tech: ["Docker", "Python", "Linux"],
        link: "https://github.com/Melo2L/projeto-final-devops",
      },
      {
        title: "DevOps Portfolio AWS (Diese Website)",
        description:
          "DevOps-Portfolio in Produktion auf AWS mit Terraform, Docker CI/CD und HTTPS über Cloudflare.",
        tech: ["AWS", "Terraform", "Docker", "Linux"],
        link: "https://github.com/Melo2L/Melo2L.github.io",
      },
      {
        title: "In Arbeit...",
        description: "In Arbeit...",
        tech: [],
      },
    ],
  },
};

const Index = () => {
  const [language, setLanguage] = useState("en");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const currentContent = content[language as keyof typeof content];

  // Updated scrollToAbout to center the subtitle in viewport
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      // Scroll to center the subtitle in the viewport
      // Find the subtitle position
      const subtitle = aboutSection.querySelector("h2");
      if (subtitle) {
        const subtitleRect = subtitle.getBoundingClientRect();
        const subtitleCenter = subtitleRect.top + subtitleRect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const offset = subtitleCenter - windowCenter;
        window.scrollBy({ top: offset, behavior: "smooth" });
        return;
      }
      // Fallback: scroll section to top of viewport
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header
          content={currentContent}
          language={language}
          setLanguage={setLanguage}
          showLanguageDropdown={showLanguageDropdown}
          setShowLanguageDropdown={setShowLanguageDropdown}
        />

        <HeroSection content={currentContent} language={language} />

        <TechnologiesSection content={currentContent} />

        {/* Formação / Education Section */}
        <section className="py-6 px-6 w-full flex justify-center bg-transparent">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
            {/* Subtítulo padronizado acima da imagem */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-3">
              {currentContent.formation}
            </h2>
            {/* Imagem */}
            <a
              href="https://www.tokioschool.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Melo-uploads/502b25c6-647d-406a-aebd-0dce734b0a19.png"
                alt={currentContent.formationImageAlt}
                className="w-32 h-32 object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-green-400 bg-white mx-auto"
                style={{ background: "#fff" }}
              />
            </a>
            {/* Texto centralizado abaixo da imagem */}
            <p className="text-base text-gray-200">
              {currentContent.formationDescription}
            </p>
          </div>
        </section>

        {/* About Section */}
        <div id="about" ref={aboutSectionRef}>
          <section className="py-16 px-6 w-full flex justify-center bg-gradient-to-t from-gray-900 via-black to-gray-800">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
                {currentContent.about}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentContent.aboutText}
              </p>
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <ProjectsSection
          content={{
            ...currentContent,
            recentProjects: currentContent.recentProjects,
            projectsList: currentContent.projectsList,
          }}
        />

        {/* Sidebar Contact Buttons */}
        <ContactSidebarButtons scrollToAbout={scrollToAbout} />

        {showLanguageDropdown && (
          <LanguageDropdown
            language={language}
            setLanguage={setLanguage}
            setShowLanguageDropdown={setShowLanguageDropdown}
          />
        )}
      </div>
    </div>
  );
};

export default Index;