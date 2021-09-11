import React, { useContext, useState } from 'react';
import { FileExplorerContext } from '../../../../context/FileExplorerContext';
import useDate from '../../../../hooks/useDate';

import './index.css';

const SaveFileModal = ({ setOpenModal, content }) => {
  const { dateAndTime } = useDate();

  const [title, setTitle] = useState('');
  const { saveFile } = useContext(FileExplorerContext);

  const handleSave = () => {
    if (title.length > 30) {
      alert('Title is too long');
      return;
    } else if (title.length === 0) {
      alert('Please enter a title');
      return;
    }
    setTitle(title);
    saveFile(title, content, dateAndTime);
    setOpenModal(false);
  };

  return (
    <div
      className="save-file-modal-wrapper"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="save-file-modal-label">Save a file</p>
      <input
        type="text"
        value={title}
        className="save-file-modal-input"
        placeholder="Enter a title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="save-file-modal-buttons-wrapper">
        <button
          type="button"
          className="save-file-modal-save-button"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="save-file-modal-cancel-button"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SaveFileModal;
