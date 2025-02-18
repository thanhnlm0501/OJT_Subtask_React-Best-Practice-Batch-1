import React from 'react';
import './../assets/button.css';

const StyledButton = ({ text }) => {
  return (
    <div>
      <button className="button">{text}</button>
    </div>
  );
};

export default StyledButton;
