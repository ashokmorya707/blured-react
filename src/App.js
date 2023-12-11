// App.js

import React from 'react';
import BlurImageLoader from './BlurryImageLoader';

const App = () => {
  const imageUrl = 'https://th.bing.com/th/id/R.3df42ef19bcb2ce780e02b921bf9e25e?rik=zIscdYW26Pz5YA&riu=http%3a%2f%2feskipaper.com%2fimages%2fhigh-resolution-photos-1.jpg&ehk=heOxlLUzzB3YrJeDcLRIWpYAUcVP%2bY0DQVikkA7bjSk%3d&risl=&pid=ImgRaw&r=0';

  return ( 
    <div>
      <h1>Blurry Image Loader</h1>
      <BlurImageLoader imageUrl={imageUrl} />
    </div>
  );
};

export default App;

