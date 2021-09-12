import React, { useContext } from 'react';
import './index.css';
import logoutIcon from '../../assets/icons/logout.png';
import fileExplorerIcon from '../../assets/icons/fileExplorer.png';
import textEditorIcon from '../../assets/icons/textEditor.png';
import cameraIcon from '../../assets/icons/camera.png';
import newsFeedIcon from '../../assets/icons/newsFeed.png';
import galleryIcon from '../../assets/icons/gallery.png';
import browserIcon from '../../assets/icons/browser.png';
import Icon from './Icon';
import { WindowContext } from '../../context/WindowContext';
import { AuthContext } from '../../context/AuthContext';
// import { AuthContext } from '../../context/AuthContext';

const icons = [
  {
    appName: 'logout',
    image: logoutIcon,
  },
  { appName: 'fileExplorer', image: fileExplorerIcon },
  { appName: 'textEditor', image: textEditorIcon },
  { appName: 'camera', image: cameraIcon },
  { appName: 'newsFeed', image: newsFeedIcon },
  { appName: 'gallery', image: galleryIcon },
  { appName: 'browser', image: browserIcon },
];

const Taskbar = () => {
  const { open, openWindow } = useContext(WindowContext);
  const { setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setAuth(false);
  };

  return (
    <div className="taskbar-wrapper">
      {icons.map((icon, index) => (
        <Icon
          open={open[icon.appName]}
          appName={icon.appName}
          image={icon.image}
          key={index}
          onClick={() =>
            icon.appName === 'logout'
              ? handleLogout()
              : openWindow(icon.appName)
          }
        />
      ))}
    </div>
  );
};

export default Taskbar;
