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

  const handleKeyDown = (e) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentNode = commonAncestor.nodeType === 3 ? commonAncestor.parentNode : commonAncestor;

    if (parentNode && parentNode.style.textDecoration === 'underline') {
      document.execCommand('underline', false, null);
    }
  };

  return (
    <div
      contentEditable
      ref={textAreaRef}
      style={{ border: '1px solid #ccc', minHeight: '100px', padding: '10px' }}
      onInput={handleInputChange}
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning={true}
    />
  );
};

export default TextDisplay;
