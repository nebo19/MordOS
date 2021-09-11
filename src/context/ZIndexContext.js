import React, { useState, createContext } from 'react';

// Changing zIndex of Window components so they come on top of eachother when in focus

const initialValues = {
  fileExplorer: 0,
  textEditor: 0,
  camera: 0,
  newsFeed: 0,
  gallery: 0,
  browser: 0,
};

let i = 0;

const ZIndexContext = createContext(initialValues);

const ZIndexProvider = ({ children }) => {
  const [zIndex, setZIndex] = useState(initialValues);

  const changeZIndex = (appName) => {
    i++;
    setZIndex({ ...zIndex, [appName]: i });
  };

  return (
    <ZIndexContext.Provider
      value={{
        zIndex,
        changeZIndex,
      }}
    >
      {children}
    </ZIndexContext.Provider>
  );
};

export { ZIndexContext, ZIndexProvider };
