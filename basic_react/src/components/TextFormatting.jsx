import React from 'react';

const TextFormatting = ({ fontSize, setFontSize, fontColor, setFontColor, fontFamily, setFontFamily }) => {
  return (
    <div className="text-formatting">
      <div>
        <label>Font Size:</label>
        <input
          type="number"
          value={fontSize.replace('px', '')}
          onChange={(e) => setFontSize(e.target.value + 'px')}
        />
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
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
          {/* Add more fonts as needed */}
        </select>
      </div>
    </div>
  );
};

export default TextFormatting;
