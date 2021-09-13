import React, { useContext } from 'react';
import Taskbar from '../Taskbar';
import sauronImage from '../../assets/sauron.png';
import NavBar from '../NavBar';
import Window from '../Window';
import { WindowContext } from '../../context/WindowContext';
import { ZIndexProvider } from '../../context/ZIndexContext';
import { FileExplorerProvider } from '../../context/FileExplorerContext';
import { PositionProvider } from '../../context/PositionContext';

import './index.css';

const Desktop = () => {
  const { open } = useContext(WindowContext);

  const renderApps = () => {
    return Object.keys(open).map(
      (appName, index) =>
        open[appName] && <Window appName={appName} key={index} />
    );
  };

  return (
    <div className="desktop-wrapper">
      <NavBar />
      <FileExplorerProvider>
        <PositionProvider>
          <ZIndexProvider>{renderApps()}</ZIndexProvider>
        </PositionProvider>
      </FileExplorerProvider>
      <img src={sauronImage} alt="sauron" className="desktop-image" />
      <Taskbar />
    </div>
  );
};

export default Desktop;
