import React, { useContext, useState } from 'react';
import './index.css';
import Flame from '../../assets/animations/Flame';
import { credentials } from '../../credentials';
import { AuthContext } from '../../context/AuthContext';

const Auth = () => {
  const { setAuth, formValues, handleChange } = useContext(AuthContext);
  const { email, password } = formValues;
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (email === credentials.email && password === credentials.password) {
      setError(null);
      setAuth(true);
      localStorage.setItem(
        'user',
        JSON.stringify({
          email,
          password,
        })
      );
    } else {
      setAuth(false);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-form">
        <h1>
          Mord<span className="auth-os-color">OS</span>
        </h1>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <div className="auth-error">{error}</div>
        <button type="button" onClick={handleClick}>
          Enter
        </button>
      </div>
      <Flame />
    </div>
  );
};

export default Auth;
