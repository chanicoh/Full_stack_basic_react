import React from 'react';

const TextFormatting = ({  setFontSize, fontColor, setFontColor, setFontFamily }) => {
  
  const handleFontSizeChange = (e) => {
    const selectedFontSize = e.target.value;
    setFontSize(selectedFontSize);
  };

 
  const handleFontFamilyChange = (e) => {
    const selectedFontFamily = e.target.value;
    setFontFamily(selectedFontFamily);
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
          onChange={(e) => setFontColor(e.target.value)}
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
