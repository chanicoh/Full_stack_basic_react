
import './App.css'
import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import LanguageSwitcher from './components/LanguageSwitcher';
import TextFormatting from './components/TextFormatting';
import SpecialActions from './components/SpecialActions';
import TextDisplay from './components/TextDisplay';

const App = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState('16px');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <TextFormatting
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
      />
      <SpecialActions setText={setText} />
      <TextDisplay
        text={text}
        fontSize={fontSize}
        fontColor={fontColor}
        fontFamily={fontFamily}
      />
      <Keyboard text={text} setText={setText} language={language} />
    </div>
  );
};

export default App;
