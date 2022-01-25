import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import Header from './components/Header';

library.add(fab, fas, faGithub, faGlobe);

function App() {
  return (
    <>
      <div className='bg'></div>
      <Header />
    </>
  );
}

export default App;
