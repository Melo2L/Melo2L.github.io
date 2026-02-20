
interface LanguageDropdownProps {
  language: string;
  setLanguage: (lang: string) => void;
  setShowLanguageDropdown: (show: boolean) => void;
}

const LanguageDropdown = ({ language, setLanguage, setShowLanguageDropdown }: LanguageDropdownProps) => {
  const languages = [
    { code: "en", name: "English", flag: "/Melo-uploads/cff9f8fb-4f54-4225-b78f-9905373a2b1f.png" },
    { code: "pt", name: "Portuguese", flag: "/Melo-uploads/c3d8995d-da25-47d9-aa76-c06fcd590533.png" },
    { code: "es", name: "Spanish", flag: "/Melo-uploads/a2a43167-1cdf-4734-a907-1f2df4205c28.png" },
    { code: "fr", name: "French", flag: "/Melo-uploads/e7c2d786-c646-4d90-a1fa-9a7e410acdf3.png" },
    { code: "de", name: "German", flag: "/Melo-uploads/3699c651-dcf3-4e0a-8d29-6d7c06d62973.png" }
  ];

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setShowLanguageDropdown(false);
  };

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-2 min-w-48">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-gray-700 transition-colors duration-200 ${
              language === lang.code ? 'bg-gray-700 text-green-400' : 'text-white'
            }`}
          >
            <img src={lang.flag} alt={lang.name} className="w-6 h-4 object-cover rounded-sm" />
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
