import React, { useContext, useEffect, useRef } from 'react';
import Browser from '../../components/applications/Browser';
import Camera from '../../components/applications/Camera';
import Gallery from '../../components/applications/Gallery';
import NewsFeed from '../../components/applications/NewsFeed';
import TextEditor from '../../components/applications/TextEditor';
import FileExplorer from '../../components/applications/FileExplorer';
import windowExitIcon from '../../assets/icons/windowExit.png';
import { WindowContext } from '../../context/WindowContext';
import './index.css';
import { dragElement } from './draggable';

const Window = ({ appName }) => {
  const { closeWindow } = useContext(WindowContext);
  const elemRef = useRef([]);

  useEffect(() => {
    dragElement(elemRef.current['wrapper'], elemRef.current['navbar']);
  }, []);

  const renderApp = () => {
    switch (appName) {
      case 'browser':
        return <Browser />;
      case 'camera':
        return <Camera />;
      case 'gallery':
        return <Gallery />;
      case 'newsFeed':
        return <NewsFeed />;
      case 'textEditor':
        return <TextEditor />;
      case 'fileExplorer':
        return <FileExplorer />;
      default:
        return;
    }
  };

  return (
    <div
      className="window-wrapper"
      ref={(el) => (elemRef.current['wrapper'] = el)}
    >
      <div
        className="window-navbar"
        ref={(el) => (elemRef.current['navbar'] = el)}
      >
        <div className="window-name"></div>
        <div className="window-exit-icon">
          <img
            src={windowExitIcon}
            alt="window-exit-icon"
            onClick={() => closeWindow(appName)}
          />
        </div>
      </div>
      <div className="window-component-wrapper">{renderApp()}</div>
    </div>
  );
};

export default Window;
