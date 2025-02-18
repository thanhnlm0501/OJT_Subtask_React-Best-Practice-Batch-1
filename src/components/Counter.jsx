import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Số lần nhấn: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Counter;
