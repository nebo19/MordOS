import React, { useContext } from 'react';
import Auth from './components/Auth';
import Desktop from './components/Desktop';
import { WindowProvider } from './context/WindowContext';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { auth } = useContext(AuthContext);
  return auth ? (
    <WindowProvider>
      <Desktop />
    </WindowProvider>
  ) : (
    <Auth />
  );
};

export default App;
