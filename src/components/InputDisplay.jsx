import React from 'react';
import { useState } from 'react';

const InputDisplay = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <h1>Input Display</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Input text"
      />
      <p>Your text input: {text}</p>
    </div>
  );
};

export default InputDisplay;
