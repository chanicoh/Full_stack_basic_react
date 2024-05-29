import React from 'react';

const SpecialActions = ({ text, setText }) => {
  const deleteLastCharacter = () => {
    setText((prev) => prev.slice(0, -1));
  };

  const clearText = () => {
    setText('');
  };

  const toggleCase = () => {
    // Toggle case of text
    setText((prev) => {
      return prev.split('').map(char => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else if (char === char.toLowerCase()) {
          return char.toUpperCase();
        } else {
          return char;
        }
      }).join('');
    });
  };
  const caselowerupper = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
  
    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
  
    if (commonAncestor.nodeType === 3) {
      // Text node, check parent for underline
      const parentNode = commonAncestor.parentNode;
      if (parentNode && parentNode.style.textDecoration === 'underline') {
        // If the text is underlined, remove the underline
        parentNode.style.textDecoration = '';
      } else {
        // If the text is not underlined, add the underline
        const span = document.createElement('span');
        span.style.textDecoration = 'underline';
        range.surroundContents(span);
      }
    } else if (commonAncestor.nodeType === 1) {
      // Element node
      if (commonAncestor.style.textDecoration === 'underline') {
        // If the text is underlined, remove the underline
        commonAncestor.style.textDecoration = '';
      } else {
        // If the text is not underlined, add the underline
        const span = document.createElement('span');
        span.style.textDecoration = 'underline';
        span.appendChild(range.extractContents());
        range.insertNode(span);
      }
    }
  };
  


  return (
    <div className="special-actions">
      <button onClick={deleteLastCharacter}>Delete Last</button>
      <button onClick={clearText}>Clear All</button>
      <button onClick={toggleCase}>Case Toggle</button>
      <button onClick={caselowerupper}>case-lower/upper</button>

    </div>
  );
};

export default SpecialActions;
