import React from 'react';

const Keyboard = ({ text, setText, language }) => {
  const addCharacter = (char) => {
    setText(text + char);
  };

  const handleSpace = () => {
    setText(text + ' ');
  };

  const handleDelete = () => {
    setText(text.slice(0, -1));
  };

  const handleUndo = () => {
    // Implement undo functionality if needed
  };

  let keys;
  if (language === 'en') {
    keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  } else {
    keys = 'אבגדהוזחטיכלמנסעפצקרשת'.split('');
  }

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <button key={key} onClick={() => addCharacter(key)}>
          {key}
        </button>
      ))}
      <button onClick={handleSpace}>SPACE</button>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handleUndo}>UNDO LAST</button>
    </div>
  );
};

export default Keyboard;
