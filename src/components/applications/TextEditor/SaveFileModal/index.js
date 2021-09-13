import React, { useContext, useState, useRef, useEffect } from 'react';
import { FileExplorerContext } from '../../../../context/FileExplorerContext';
import useDate from '../../../../hooks/useDate';
import OverwriteFileModal from '../OverwriteFileModal';

import './index.css';

const SaveFileModal = ({ setOpenModal, content }) => {
  const [title, setTitle] = useState('');
  const [overwriteModalOpen, setOverwriteModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const { dateAndTime } = useDate();
  const { files, saveFile } = useContext(FileExplorerContext);
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleSave = () => {
    if (title.length > 30) {
      setError('Title is too long');
      return;
    } else if (title.length === 0) {
      setError('Please enter a title');
      return;
    } else if (files.some((file) => file.title === title)) {
      setError(null);
      setOverwriteModalOpen(true);
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
        ref={inputElement}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="save-file-modal-error">{error}</div>
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
      {overwriteModalOpen && (
        <OverwriteFileModal
          setOverwriteModalOpen={setOverwriteModalOpen}
          setOpenModal={setOpenModal}
          title={title}
          content={content}
          dateAndTime={dateAndTime}
        />
      )}
    </div>
  );
};

export default SaveFileModal;
