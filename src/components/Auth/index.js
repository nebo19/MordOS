import React, { useContext } from 'react';
import './index.css';
import Flame from '../../assets/animations/Flame';
import { credentials } from '../../credentials';
import { AuthContext } from '../../context/AuthContext';

const Auth = () => {
  const { setAuth, formValues, handleChange } = useContext(AuthContext);
  const { email, password } = formValues;

  const handleClick = () => {
    if (email === credentials.email && password === credentials.password) {
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
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="mainDiv">
      <div className="wrapper">
        <h1>
          Mord<span className="osColor">OS</span>
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
        <button type="button" onClick={handleClick}>
          Enter
        </button>
      </div>
      <Flame />
    </div>
  );
};

export default Auth;
