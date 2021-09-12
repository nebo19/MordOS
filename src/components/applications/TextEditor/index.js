import React, { useState, useContext } from 'react';
import SaveFileModal from './SaveFileModal';
import { FileExplorerContext } from '../../../context/FileExplorerContext';

import './index.css';

const TextEditor = ({ editMode, fileInfo, setEdit }) => {
  const [content, setContent] = useState(fileInfo ? fileInfo.content : '');
  const [openModal, setOpenModal] = useState(false);
  const { overwriteFile } = useContext(FileExplorerContext);

  const handleSave = () => {
    setOpenModal(true);
  };

  const handleEdit = () => {
    overwriteFile(fileInfo.title, content, fileInfo.dateCreated);
    setEdit(false);
  };

  const handleClose = () => {
    if (openModal) {
      setOpenModal(false);
    }
    return;
  };

  return (
    <div className="text-editor-wrapper" onClick={handleClose}>
      <textarea
        value={content}
        placeholder="Enter some text"
        className="text-editor-textarea"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      {openModal && (
        <SaveFileModal content={content} setOpenModal={setOpenModal} />
      )}
      <button
        type="button"
        className="text-editor-save-button"
        onClick={editMode ? handleEdit : handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default TextEditor;
