import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__nav'></div>
        <div className='header__hero'>
          <div className='header__hero--about'>
            <div className='header__hero--about-text'>
              <h1>hello, i'm samuel yusuf.</h1>
              <p>
                i am a software developer specializing in frontend experiences
                for the web.
              </p>
            </div>
            <div className='header__hero--about-cta'></div>
            <div className='header__hero--about-social'></div>
          </div>
          <div className='header__hero--featured'>
            <div className='header__hero--featured-item'>
              <span className='header__hero--featured-item--class'>
                typescript
              </span>
              <h1>pokedux</h1>
              <p>
                a reimagining of the classic pokedex, built with react and
                typescript.
              </p>
              <div className='header__hero--featured-item--links'>
                <FontAwesomeIcon icon={['fab', 'github']} />
                <FontAwesomeIcon icon={['fas', 'globe']} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
