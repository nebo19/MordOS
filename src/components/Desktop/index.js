import React, { useContext } from 'react';
import Taskbar from '../Taskbar';
import sauronImage from '../../assets/sauron.png';
import NavBar from '../NavBar';
import Window from '../Window';

import './index.css';
import { WindowContext } from '../../context/WindowProvider';
import { ZIndexProvider } from '../../context/ZIndexProvider';

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
      <ZIndexProvider>{renderApps()}</ZIndexProvider>
      <img src={sauronImage} alt="sauron" />
      <Taskbar />
    </div>
  );
};

export default Desktop;
