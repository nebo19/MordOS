import React, { useContext, useEffect, useRef, useState } from 'react';
import Browser from '../../components/applications/Browser';
import Camera from '../../components/applications/Camera';
import Gallery from '../../components/applications/Gallery';
import NewsFeed from '../../components/applications/NewsFeed';
import TextEditor from '../../components/applications/TextEditor';
import FileExplorer from '../../components/applications/FileExplorer';
import windowExitIcon from '../../assets/icons/exit.png';
import maximizeIcon from '../../assets/icons/maximize.png';
import restoreDownIcon from '../../assets/icons/restoreDown.png';
import { WindowContext } from '../../context/WindowProvider';
import { ZIndexContext } from '../../context/ZIndexProvider';
import './index.css';
import { dragElement } from './draggable';

const Window = ({ appName }) => {
  const [maximize, setMaximize] = useState(false);
  const { closeWindow } = useContext(WindowContext);
  const { zIndex, changeZIndex } = useContext(ZIndexContext);
  const elemRef = useRef([]);

  useEffect(() => {
    // Calling changeZIndex only once on render to set ZIndex higher than the previous Window
    // So it shows on top of previous component
    changeZIndex(appName);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dragElement(elemRef.current['wrapper'], elemRef.current['navbar']);
    elemRef.current['wrapper'].style.zIndex = zIndex[appName];
  }, [zIndex, appName]);

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

  const upperAppName = appName[0].toUpperCase() + appName.slice(1);

  return (
    <div
      className="window-wrapper"
      ref={(el) => (elemRef.current['wrapper'] = el)}
      onMouseDown={() => changeZIndex(appName)}
      style={{
        width: maximize && '100%',
        height: maximize && '100vh',
        top: maximize && '0%',
        left: maximize && '0%',
      }}
    >
      <div
        className="window-navbar"
        ref={(el) => (elemRef.current['navbar'] = el)}
      >
        <div className="window-name">{upperAppName}</div>
        <div className="window-exit-icon">
          <img
            src={maximize ? restoreDownIcon : maximizeIcon}
            alt="maximize"
            onClick={() => setMaximize(!maximize)}
          />
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
