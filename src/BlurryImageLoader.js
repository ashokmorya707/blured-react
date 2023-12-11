// BlurImageLoader.js

import React, { useState, useEffect } from 'react';

const BlurImageLoader = ({ imageUrl }) => {
  const [loading, setProgress] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        setProgress(false);
      };

      img.onerror = () => {
        console.error('Error loading image');
        setProgress(false);
      };

      img.onload = () => {
        const interval = setInterval(() => {
          setLoadingProgress((prevProgress) => {
            const newProgress = prevProgress + 5;
            if (newProgress >= 95) {
              clearInterval(interval);
            }
            return newProgress;
          });
        }, 200);
      };
    };
 
    loadImage();
  }, [imageUrl]);

  return (
    <div>
    <div>
      <p style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
          // display: 'flex',
          textAlign: 'center',
          zIndex: '1',
          display: loadingProgress === 100 ? 'none' : 'block',
          }
          }>Loading: {loadingProgress}%</p>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          filter: `blur(${100 - loadingProgress}px)`,
          height: '500px',
          maxWidth: '100%',
        }}
      ></div>
    </div>
    </div>
  );
};

export default BlurImageLoader;

