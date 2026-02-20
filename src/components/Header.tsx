
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  content: any;
  language: string;
  setLanguage: (lang: string) => void;
  showLanguageDropdown: boolean;
  setShowLanguageDropdown: (show: boolean) => void;
}

const Header = ({ content, showLanguageDropdown, setShowLanguageDropdown }: HeaderProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
          >
            {content.home}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
          >
            {content.about}
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
          >
            {content.projects}
          </button>
          <button 
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="text-white hover:text-green-400 transition-colors duration-300 font-medium flex items-center space-x-1"
          >
            <span>{content.language}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLanguageDropdown ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
