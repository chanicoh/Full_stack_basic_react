import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <div className="language-switcher">
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('he')}>Hebrew</button>
      {/* Add more languages as needed */}
    </div>
  );
};

export default LanguageSwitcher;
