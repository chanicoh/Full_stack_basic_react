import React from 'react';

const TextDisplay = ({ text, fontSize, fontColor, fontFamily }) => {
  const textStyle = {
    fontSize: fontSize,
    color: fontColor,
    fontFamily: fontFamily,
  };

  return (
    <div className="text-display" style={textStyle}>
      {text}
    </div>
  );
};

export default TextDisplay;
