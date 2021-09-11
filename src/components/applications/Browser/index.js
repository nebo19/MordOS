import React, { useState, useRef, useEffect } from 'react';
import './index.css';

const Browser = () => {
  const [url, setUrl] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const listener = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      handleClick();
    }
  };
  document.addEventListener('keydown', listener);

  const handleClick = () => {
    if (url.includes('https://' || 'http://')) {
      setSearchUrl(url);
    } else {
      setSearchUrl(`https://${url}`);
    }
  };

  return (
    <div className="browser-wrapper">
      <div className="search-wrapper">
        <input
          ref={inputElement}
          className="search-input"
          type="text"
          placeholder="Search the internet"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="search-button" type="button" onClick={handleClick}>
          Search
        </button>
      </div>
      <iframe
        className="browser-iframe"
        src={searchUrl}
        title="browser"
        frameBorder="0"
      />
    </div>
  );
};

export default Browser;
