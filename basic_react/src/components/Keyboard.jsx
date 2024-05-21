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


  let keys;
  if (language === 'en') {
    keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  } else {
    if(language === 'he'){
      keys = 'אבגדהוזחטיכלמנסעפצקרשת'.split('');
    }
    else
    keys ='🥰,😀,😄,😆,🥹,😅,😂,😞,😍,❤,💔'.split(',');
  
  }


  return (
    <div className="keyboard">
      {keys.map((key) => (
        <button key={key} onClick={() => addCharacter(key)}>
          {key}
        </button>
      ))}
      <button onClick={handleSpace}>SPACE</button>
      <button onClick={handleDelete}>DELETE LAST</button>
    </div>
  );
};

export default Keyboard;
