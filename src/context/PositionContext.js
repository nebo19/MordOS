import React, { useState, createContext } from 'react';

let top = 10;
let left = 10;

const initialValues = {
  fileExplorer: {
    top,
    left,
  },
  textEditor: {
    top,
    left,
  },
  camera: {
    top,
    left,
  },
  newsFeed: {
    top,
    left,
  },
  gallery: {
    top,
    left,
  },
  browser: {
    top,
    left,
  },
};

const PositionContext = createContext(initialValues);

const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState(initialValues);

  const changePosition = (appName) => {
    setPosition({
      ...position,
      [appName]: {
        top,
        left,
      },
    });
    top += 5;
    left += 2;
  };

  const resetPosition = () => {
    top -= 5;
    left -= 2;
  };

  return (
    <PositionContext.Provider
      value={{
        position,
        changePosition,
        resetPosition,
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};

export { PositionContext, PositionProvider };
