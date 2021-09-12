import React from 'react';

import './index.css';

const Dropdown = ({ selectOption, setSelectOption }) => {
  return (
    <div className="file-explorer-dropdown">
      <select
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
      >
        <option value="" disabled defaultValue>
          Sort By
        </option>
        <option value="titleAsc">Title Up</option>
        <option value="titleDes">Title Down</option>
        <option value="dateAsc">Date Up</option>
        <option value="dateDes">Date Down</option>
      </select>
    </div>
  );
};

export default Dropdown;
