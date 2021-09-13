import React, { useState, createContext } from 'react';

// Saving, deleting, overwriting files into a file explorer
// Also sorting them based on sortBy value

const FileExplorerContext = createContext([]);

const FileExplorerProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const saveFile = (title, content, dateCreated) => {
    setFiles([...files, { title, content, dateCreated }]);
  };

  const deleteFile = (title) => {
    setFiles(files.filter((file) => file.title !== title));
  };

  const overwriteFile = (title, content, dateCreated) => {
    setFiles(
      files.map((file) =>
        file.title === title
          ? Object.assign({
              title,
              content,
              dateCreated,
            })
          : file
      )
    );
  };

  const sortFiles = (sortBy) => {
    switch (sortBy) {
      case 'titleAsc':
        setFiles([...files].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case 'titleDesc':
        setFiles([...files].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case 'dateAsc':
        setFiles(
          [...files].sort(
            (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated)
          )
        );
        break;
      case 'dateDesc':
        setFiles(
          [...files].sort(
            (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
          )
        );
        break;
      default:
        return;
    }
  };

  return (
    <FileExplorerContext.Provider
      value={{
        files,
        saveFile,
        deleteFile,
        overwriteFile,
        sortFiles,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
};

export { FileExplorerProvider, FileExplorerContext };
