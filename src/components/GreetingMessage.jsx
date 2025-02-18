import React from 'react';

const GreetingMessage = ({ isAdmin }) => {
  let message = '';
  if (isAdmin == true) {
    message = 'Xin chào, Admin!';
  } else {
    message = 'Xin chào, Khách!';
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default GreetingMessage;
