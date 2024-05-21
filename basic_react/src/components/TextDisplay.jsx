import React, { useRef } from 'react';

const TextDisplay = ({ text, fontSize, fontColor, fontFamily }) => {
  const textStyle = {
    fontSize: fontSize,
    color: fontColor,
    fontFamily: fontFamily,
  };

  const textRef = useRef(null);
  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection.anchorNode && selection.focusNode) {
      const selectedText = selection.toString();
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.fontSize = fontSize;
      span.style.color = fontColor;
      span.style.fontFamily = fontFamily;
      range.surroundContents(span);
      selection.removeAllRanges();
    }
  };
  

  return (
    <div className="text-display" style={textStyle} ref={textRef} onMouseUp={handleSelectionChange}>
      {text}
    </div>
  );
};

export default TextDisplay;
