import React, { useRef } from 'react';

const TextDisplay = ({ text, setText, fontSize, fontColor, fontFamily }) => {
  const textAreaRef = useRef(null);

  const handleInputChange = (e) => {
    setText(e.target.innerHTML);
  };

  return (
    <div
      contentEditable
      ref={textAreaRef}
      style={{ fontSize, color: fontColor, fontFamily, border: '1px solid #ccc', minHeight: '100px', padding: '10px' }}
      onInput={handleInputChange}
      suppressContentEditableWarning={true}
    >
      {text}
    </div>
  );
};

export default TextDisplay;
