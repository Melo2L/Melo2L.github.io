
interface FooterContactBarProps {
  scrollToAbout: () => void;
}

const CONTACT_LINKS = [
  {
    name: "WhatsApp",
    img: "/Melo-uploads/0e629f82-c2d0-400b-a34f-e78db5e53a01.png",
    link: "https://wa.me/351939724866",
    alt: "WhatsApp"
  },
  {
    name: "E-mail",
    img: "/Melo-uploads/0cb8a88b-314c-4705-ba61-e056cae7d313.png",
    link: "mailto:alisson14melo@gmail.com",
    alt: "E-mail"
  },
  {
    name: "LinkedIn",
    img: "/Melo-uploads/d6178d70-1c1d-4aff-9765-7abd1d8d2e39.png",
    link: "https://www.linkedin.com/in/alisson-melo-4441792a8/",
    alt: "LinkedIn"
  },
  {
    name: "GitHub",
    img: "/Melo-uploads/1829eedd-6f43-49bb-8753-8ea813f43424.png",
    link: "https://github.com/Melo2L",
    alt: "GitHub"
  },
  {
    name: "CV",
    img: "/Melo-uploads/cd9adddc-f601-4ae8-ae19-ecfc6cd15cbf.png",
    link: "",
    alt: "CV"
  }
];

const FooterContactBar = ({ scrollToAbout }: FooterContactBarProps) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 py-3 bg-gradient-to-t from-black/80 to-transparent flex justify-center items-center gap-5 md:gap-8">
      {CONTACT_LINKS.map((item, idx) => (
        <button
          key={item.name}
          className="bg-gray-800 hover:bg-green-500 transition-colors duration-200 rounded-full p-3 shadow-lg group flex items-center justify-center"
          title={item.name}
          onClick={() => {
            if (item.name === "CV") {
              scrollToAbout();
            } else if (item.link) {
              window.open(item.link, "_blank");
            }
          }}
        >
          <img src={item.img} alt={item.alt} className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200" />
        </button>
      ))}
    </div>
  );
};

export default FooterContactBar;
