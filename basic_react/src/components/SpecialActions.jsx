import React from 'react';

const SpecialActions = ({ setText }) => {
  const deleteLastCharacter = () => {
    setText((prev) => prev.slice(0, -1));
  };

  const clearText = () => {
    setText('');
  };

  const undoAction = () => {
    // Implement undo functionality if needed
  };

  return (
    <div className="special-actions">
      <button onClick={deleteLastCharacter}>Delete Last</button>
      <button onClick={clearText}>Clear All</button>
      <button onClick={undoAction}>Undo</button>
      {/* Add more special actions as needed */}
    </div>
  );
};

export default SpecialActions;
