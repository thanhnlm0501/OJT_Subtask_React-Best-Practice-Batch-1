import React from 'react';

import { useState } from 'react';
import './../assets/RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: '', password: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Email không hợp lệ!';
    }

    if (password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự!';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log('Đăng ký thành công:', { email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Đăng ký</h2>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default RegisterForm;
