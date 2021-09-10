import React, { useState, createContext } from 'react';

const WindowContext = createContext({
  fileExplorer: false,
  textEditor: false,
  camera: false,
  newsFeed: false,
  gallery: false,
  browser: false,
});

const WindowProvider = ({ children }) => {
  const [open, setOpen] = useState({
    fileExplorer: false,
    textEditor: false,
    camera: false,
    newsFeed: false,
    gallery: false,
    browser: false,
  });

  const openWindow = (appName) => {
    setOpen({ ...open, [appName]: true });
  };

  const closeWindow = (appName) => {
    setOpen({ ...open, [appName]: false });
  };

  return (
    <WindowContext.Provider
      value={{
        open,
        openWindow,
        closeWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export { WindowProvider, WindowContext };
