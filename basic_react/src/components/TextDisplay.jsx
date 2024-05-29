import React, { useRef, useEffect } from 'react';

const TextDisplay = ({ text, setText }) => {
  const textAreaRef = useRef(null);

  const handleInputChange = (e) => {
    setText(e.target.innerHTML);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.innerHTML = text;
    }
  }, [text]);

  return (
    <div
      contentEditable
      ref={textAreaRef}
      style={{ border: '1px solid #ccc', minHeight: '100px', padding: '10px' }}
      onInput={handleInputChange}
      suppressContentEditableWarning={true}
    />
  );
};

export default TextDisplay;
