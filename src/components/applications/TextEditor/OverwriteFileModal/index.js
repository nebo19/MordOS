import React, { useContext } from 'react';
import { FileExplorerContext } from '../../../../context/FileExplorerContext';

import './index.css';

const OverwriteFileModal = ({
  setOverwriteModalOpen,
  title,
  content,
  dateAndTime,
  setOpenModal,
}) => {
  const { overwriteFile } = useContext(FileExplorerContext);

  const handleSave = () => {
    overwriteFile(title, content, dateAndTime);
    setOverwriteModalOpen(false);
    setOpenModal(false);
  };

  return (
    <div
      className="overwrite-file-modal-wrapper"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="overwrite-file-modal-label-wrapper">
        <p className="overwrite-file-modal-label">
          File with a title '{title}' already exists
        </p>
        <p className="overwrite-file-modal-label">
          Do you want to overwrite it?
        </p>
      </div>
      <div className="overwrite-file-modal-buttons-wrapper">
        <button
          type="button"
          className="overwrite-file-modal-save-button"
          onClick={handleSave}
        >
          Yes
        </button>
        <button
          type="button"
          className="overwrite-file-modal-cancel-button"
          onClick={() => setOverwriteModalOpen(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default OverwriteFileModal;
