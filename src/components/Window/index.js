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
import { WindowContext } from '../../context/WindowContext';
import { ZIndexContext } from '../../context/ZIndexContext';
import { PositionContext } from '../../context/PositionContext';
import { dragElement } from './draggable';

import './index.css';

const Window = ({ appName, editMode, fileInfo, setEdit }) => {
  const [maximize, setMaximize] = useState(false);
  const { closeWindow } = useContext(WindowContext);
  const { zIndex, changeZIndex } = useContext(ZIndexContext);
  const { position, changePosition } = useContext(PositionContext);
  const elemRef = useRef([]);

  useEffect(() => {
    // Calling changeZIndex only once on render to set ZIndex higher than the previous Window component so it shows on top of the previous one
    changeZIndex(appName);

    // Calling changePosition to set top and left position a bit higher than the previous Window component so they don't overlap
    changePosition(appName);

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
        return editMode ? (
          <TextEditor
            editMode={editMode}
            fileInfo={fileInfo}
            setEdit={setEdit}
          />
        ) : (
          <TextEditor />
        );
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
        position: editMode && 'fixed',
        width: maximize && '100%',
        height: maximize && '100vh',
        top: maximize ? '0%' : `${position[appName].top}%`,
        left: maximize ? '0%' : `${position[appName].left}%`,
      }}
    >
      <div
        className="window-navbar"
        ref={(el) => (elemRef.current['navbar'] = el)}
      >
        <div className="window-name">{upperAppName}</div>
        <div
          className="window-exit-icon"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <img
            src={maximize ? restoreDownIcon : maximizeIcon}
            alt="maximize"
            onClick={() => setMaximize(!maximize)}
          />
          <img
            src={windowExitIcon}
            alt="window-exit-icon"
            onClick={() => (editMode ? setEdit(false) : closeWindow(appName))}
          />
        </div>
      </div>
      <div className="window-component-wrapper">{renderApp()}</div>
    </div>
  );
};

export default Window;
