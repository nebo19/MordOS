import React from 'react';

import './index.css';

const FileComponent = ({ file }) => {
  return (
    <div className="file-component-wrapper">
      <div className="file-component-title">{file.title}</div>
      <div className="file-component-date">{file.dateCreated}</div>
      <div className="file-component-actions">edit delete</div>
    </div>
  );
};

export default FileComponent;
