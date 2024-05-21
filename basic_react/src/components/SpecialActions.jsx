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
    setText((prev) => {
      return prev.split('').map(char => {
        const toggledChar = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        return `_${toggledChar}_`;
      }).join('');
    });
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
