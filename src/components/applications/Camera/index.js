import React, { useRef, useEffect } from 'react';
import './index.css';

const Camera = () => {
  const videoRef = useRef();

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {},
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="camera-wrapper">
      <video ref={videoRef} className="camera" />
    </div>
  );
};

export default Camera;
