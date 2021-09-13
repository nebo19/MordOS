import React, { useState, createContext } from 'react';

// Opening Window components based on boolean value

const initialValues = {
  fileExplorer: false,
  textEditor: false,
  camera: false,
  newsFeed: false,
  gallery: false,
  browser: false,
};

const WindowContext = createContext(initialValues);

const WindowProvider = ({ children }) => {
  const [open, setOpen] = useState(initialValues);

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
