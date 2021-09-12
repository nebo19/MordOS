import React, { useContext, useState, useEffect } from 'react';
import { FileExplorerContext } from '../../../context/FileExplorerContext';
import FileComponent from './FileComponent';
import Dropdown from './Dropdown';

import './index.css';

const FileExplorer = () => {
  const [selectOption, setSelectOption] = useState('');
  const { files, sortFiles } = useContext(FileExplorerContext);

  useEffect(() => {
    sortFiles(selectOption);
    //eslint-disable-next-line
  }, [selectOption]);

  return (
    <div className="file-explorer-wrapper">
      <div className="file-explorer-navbar">
        <div className="file-explorer-title">Title</div>
        <div className="file-explorer-date">Date Created</div>
        <Dropdown
          selectOption={selectOption}
          setSelectOption={setSelectOption}
        />
      </div>
      {files.map((file, index) => (
        <FileComponent file={file} key={index} />
      ))}
    </div>
  );
};

export default FileExplorer;
