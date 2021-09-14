import React, { useState, createContext } from 'react';

// Authentication context for login and logout

const AuthContext = createContext({
  email: '',
  password: '',
  auth: false,
});

const AuthProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [auth, setAuth] = useState(() => !!localStorage.getItem('user'));

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <AuthContext.Provider
      value={{
        formValues,
        auth,
        setAuth,
        handleChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
