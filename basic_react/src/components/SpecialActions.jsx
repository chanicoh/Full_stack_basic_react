import React from 'react';

const SpecialActions = ({ setText }) => {
  const deleteLastCharacter = () => {
    setText(text.slice(0, -1));
  };

  const clearText = () => {
    setText('');
  };

  const undoAction = () => {
    document.execCommand('undo');
  };

  return (
    <div className="special-actions">
      <button onClick={deleteLastCharacter}>Delete Last</button>
      <button onClick={clearText}>Clear All</button>
      <button onClick={undoAction}>Undo</button>
      
    </div>
  );
};

export default SpecialActions;
