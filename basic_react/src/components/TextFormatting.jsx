import React from 'react';

const TextFormatting = ({ fontColor, setFontColor }) => {
  
  const handleFontSizeChange = (e) => {
    const selectedFontSize = e.target.value;
    document.execCommand('fontSize', false, "7"); // Use size 7 as a placeholder
    const fontElements = document.getElementsByTagName('font');
    for (let i = 0; i < fontElements.length; i++) {
      if (fontElements[i].size === "7") {
        fontElements[i].removeAttribute('size');
        fontElements[i].style.fontSize = selectedFontSize;
      }
    }
  };

  const handleFontColorChange = (e) => {
    const selectedFontColor = e.target.value;
    document.execCommand('foreColor', false, selectedFontColor);
    setFontColor(selectedFontColor);
  };

  const handleFontFamilyChange = (e) => {
    const selectedFontFamily = e.target.value;
    document.execCommand('fontName', false, selectedFontFamily);
  };

  return (
    <div className="text-formatting">
      <div>
        <label>Font Size:</label>
        <select onChange={handleFontSizeChange}>
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px">16</option>
          <option value="30px">30</option>
        </select>
      </div>
      <div>
        <label>Font Color:</label>
        <input
          type="color"
          value={fontColor}
          onChange={handleFontColorChange}
        />
      </div>
      <div>
        <label>Font Family:</label>
        <select onChange={handleFontFamilyChange}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
    </div>
  );
};

export default TextFormatting;
