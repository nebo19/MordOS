import React, { useContext } from 'react';
import './index.css';
import logoutIcon from '../../assets/icons/logoutWhite.png';
import fileExplorerIcon from '../../assets/icons/fileExplorerWhite.png';
import textEditorIcon from '../../assets/icons/textEditorWhite.png';
import cameraIcon from '../../assets/icons/cameraWhite.png';
import newsFeedIcon from '../../assets/icons/newsFeedWhite.png';
import galleryIcon from '../../assets/icons/galleryWhite.png';
import browserIcon from '../../assets/icons/browserWhite.png';
import Icon from '../Icon';
import { WindowContext } from '../../context/WindowContext';

const icons = [
  {
    appName: 'logout',
    image: logoutIcon,
    onClick: () => {
      localStorage.removeItem('user');
      window.location.reload();
    },
  },
  { appName: 'fileExplorer', image: fileExplorerIcon },
  { appName: 'textEditor', image: textEditorIcon },
  { appName: 'camera', image: cameraIcon },
  { appName: 'newsFeed', image: newsFeedIcon },
  { appName: 'gallery', image: galleryIcon },
  { appName: 'browser', image: browserIcon },
];

const Taskbar = () => {
  const { openWindow } = useContext(WindowContext);

  return (
    <div className="taskbar-wrapper">
      {icons.map((icon, index) => (
        <Icon
          image={icon.image}
          key={index}
          onClick={() =>
            icon.appName === 'logout'
              ? icon.onClick()
              : openWindow(icon.appName)
          }
        />
      ))}
    </div>
  );
};

export default Taskbar;
