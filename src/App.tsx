import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import Header from './components/Header';
import ToggleTheme from './components/ToggleTheme';
import useLocalStorage from 'use-local-storage';

library.add(fab, fas, faGithub, faGlobe);

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className='app' data-theme={theme}>
      <div className='bg'></div>
      <ToggleTheme onClick={switchTheme} />
      <Header />
    </div>
  );
}

export default App;
