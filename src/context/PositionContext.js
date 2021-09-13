import React, { useState, createContext } from 'react';

// Changing position of newly rendered Window Components
// so they don't go over eachother

let top = 5;
let left = 5;
let counter = 0;

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
    top += 3;
    left += 2;
    counter++;
    setPosition({
      ...position,
      [appName]: {
        top,
        left,
      },
    });
  };

  // Reseting top and left position so Window Components don't go out of sight
  if (counter >= 6) {
    top = 5;
    left = 5;
    counter = 0;
  }

  return (
    <PositionContext.Provider
      value={{
        position,
        changePosition,
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};

export { PositionContext, PositionProvider };
