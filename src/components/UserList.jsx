import React from 'react';

const UserList = () => {
  const users = ['An', 'Bình', 'Cường'];

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
