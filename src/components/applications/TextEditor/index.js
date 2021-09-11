import React, { useState } from 'react';

import SaveFileModal from './SaveFileModal';

import './index.css';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleSave = () => {
    setOpenModal(true);
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
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default TextEditor;
