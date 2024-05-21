import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <div className="language-switcher">
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('he')}>Hebrew</button>
      <button onClick={() => setLanguage('em')}>Emoji</button>
    </div>
  );
};

export default LanguageSwitcher;
