
interface AboutSectionProps {
  content: {
    about: string;
    aboutText: string;
  };
}

const AboutSection = ({ content }: AboutSectionProps) => (
  <section id="about" className="py-16 px-6 w-full flex justify-center bg-gradient-to-t from-gray-900 via-black to-gray-800">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        {content.about}
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        {content.aboutText}
      </p>
    </div>
  </section>
);

export default AboutSection;
