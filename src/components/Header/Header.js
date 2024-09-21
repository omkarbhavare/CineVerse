import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.css";
import LanguageIcon from '@material-ui/icons/Language';


const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const languages = [
    
    { code: 'hi', name: 'हिंदी' },
    { code: 'ja', name: '日本語' },
    { code: 'mr', name: 'मराठी' },
    { code: 'es', name: 'Español' },
    { code: 'zh', name: '中文' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
  ];

  return (
    <div className="header">
      <div className="header-container" onClick={() => window.scroll(0, 0)}>
        <span className="header-title">{t('header')}</span>
        <div className="language-container">
          <LanguageIcon className="language-icon" onClick={() => setDropdownOpen(!dropdownOpen)} />
          {dropdownOpen && (
            <div className="dropdown">
              {languages.map(lang => (
                <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
