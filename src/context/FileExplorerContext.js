import React, { useState, createContext } from 'react';

const FileExplorerContext = createContext({});

const FileExplorerProvider = ({ children }) => {
  const [files, setFiles] = useState({});

  const saveFile = (title, content, dateCreated) => {
    setFiles({
      ...files,
      [title]: {
        title,
        content,
        dateCreated,
      },
    });
  };

  // const deleteFile = (title) => {
  //   setFiles({
  //     ...files,
  //   });
  // };

  return (
    <FileExplorerContext.Provider
      value={{
        files,
        saveFile,
        // deleteFile,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
};

export { FileExplorerProvider, FileExplorerContext };
