
type TechnologiesContent = {
  myTechnologies: string;
};

interface TechnologiesSectionProps {
  content: TechnologiesContent;
}

const technologies = [
  { 
    name: "Python", 
    image: "/Melo-uploads/f0a1180d-e827-4a7d-ad08-5e46e474da4a.png",
    url: "https://www.python.org/community/logos/",
    customClass: ""
  },
  { 
    name: "Docker", 
    image: "/Melo-uploads/07447a46-7f93-4178-a0c7-c75208816fb6.png",
    url: "https://www.docker.com/",
    customClass: ""
  },
  { 
    name: "Kubernetes", 
    image: "/Melo-uploads/1bfcfe44-0f14-45bf-b8f3-903f4fdea04e.png",
    url: "https://kubernetes.io/",
    customClass: "scale-[1.15]"  // +15%
  },
  {
    name: "Terraform",
    image: "/Melo-uploads/943631db-8286-4f52-b4f9-555fe752c98c.png",
    url: "https://registry.terraform.io/",
    customClass: ""
  },
  { 
    name: "Linux", 
    image: "/Melo-uploads/725ff2b8-a7b0-441c-9ee9-c73343185073.png",
    url: "https://www.linux.org/",
    customClass: "scale-[1.20]"  // +20%
  },
  { 
    name: "AWS", 
    image: "/Melo-uploads/5793ca9b-9ef9-4e0d-9617-737b3b131846.png",
    url: "https://aws.amazon.com/",
    customClass: ""
  },
  { 
    name: "MySQL", 
    image: "/Melo-uploads/05a7a252-9fc7-4257-956a-6e435f9d6995.png",
    url: "https://www.mysql.com/",
    customClass: "scale-[1.08]" // +8%
  }
];

const TechnologiesSection = ({ content }: TechnologiesSectionProps) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {content.myTechnologies}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-green-400/20">
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className={`w-12 h-12 object-contain animate-planet-rotate ${tech.customClass}`}
                  style={{ 
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))',
                    mixBlendMode: 'normal'
                  }}
                />
              </div>
              <p className="text-gray-300 font-medium group-hover:text-green-400 transition-colors duration-300">
                {tech.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
