import React, { useContext } from 'react';
import { FileExplorerContext } from '../../../context/FileExplorerContext';
import FileComponent from './FileComponent';

import './index.css';

const FileExplorer = () => {
  const { files } = useContext(FileExplorerContext);

  return (
    <div className="file-explorer-wrapper">
      <div className="file-explorer-navbar">
        <div className="file-explorer-title">
          <strong>Title</strong>
        </div>
        <div className="file-explorer-date">
          <strong>Date Created</strong>
        </div>
        <div className="file-explorer-actions">
          <strong>Actions</strong>
        </div>
      </div>
      {Object.keys(files).map((file) => (
        <FileComponent file={files[file]} />
      ))}
    </div>
  );
};

export default FileExplorer;
