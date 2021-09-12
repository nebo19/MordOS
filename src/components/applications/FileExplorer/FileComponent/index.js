import React, { useContext, useState } from 'react';
import { FileExplorerContext } from '../../../../context/FileExplorerContext';
import { WindowContext } from '../../../../context/WindowContext';
import deleteIcon from '../../../../assets/icons/deleteIcon.png';
import editIcon from '../../../../assets/icons/editIcon.png';
import Window from '../../../Window';

import './index.css';

const FileComponent = ({ file }) => {
  const { deleteFile } = useContext(FileExplorerContext);
  const { closeWindow } = useContext(WindowContext);
  const [edit, setEdit] = useState(false);

  let title = '';
  const reduceTitleLength = () => {
    if (file.title.length > 10) {
      title = file.title.substring(0, 10) + '...';
    } else {
      title = file.title;
    }
  };

  reduceTitleLength();

  const handleEdit = () => {
    closeWindow('textEditor');
    setEdit(true);
  };

  return (
    <>
      <div className="file-component-wrapper">
        <div className="file-component-title">{title}</div>
        <div className="file-component-date">{file.dateCreated}</div>
        <div className="file-component-actions">
          <div
            className="file-component-edit-icon-wrapper"
            onClick={handleEdit}
          >
            <img src={editIcon} alt="editIcon" />
          </div>
          <div
            className="file-component-delete-icon-wrapper"
            onClick={() => deleteFile(file.title)}
          >
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>
      </div>
      {edit && (
        <Window
          appName="textEditor"
          editMode={true}
          fileInfo={file}
          setEdit={setEdit}
        />
      )}
    </>
  );
};

export default FileComponent;
