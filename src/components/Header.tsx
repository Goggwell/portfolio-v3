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
            <div className='header__hero--featured-item'>
              <span className='header__hero--featured-item--class'>
                typescript
              </span>
              <h1>it's a sorting visualizer</h1>
              <p>
                check out what different sorting algorithms look like with this
                app!
              </p>
              <div className='header__hero--featured-item--links'>
                <FontAwesomeIcon icon={['fab', 'github']} />
                <FontAwesomeIcon icon={['fas', 'globe']} />
              </div>
            </div>
            <div className='header__hero--featured-item'>
              <span className='header__hero--featured-item--class'>
                typescript
              </span>
              <h1>my portfolio</h1>
              <p>
                why wouldn't i add my own portfolio to my list of featured
                projects? it's pretty good in my opinion.
              </p>
              <div className='header__hero--featured-item--links'>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </div>
            </div>
            <div className='header__hero--featured-item'>
              <span className='header__hero--featured-item--class'>
                typescript
              </span>
              <h1>something with redux</h1>
              <p>
                check out what different sorting algorithms look like with this
                app!
              </p>
              <div className='header__hero--featured-item--links'>
                <FontAwesomeIcon icon={['fab', 'github']} />
                <FontAwesomeIcon icon={['fas', 'globe']} />
              </div>
            </div>
            <div className='header__hero--featured-item'>
              <span className='header__hero--featured-item--class'>
                typescript
              </span>
              <h1>something with locomotive scroll</h1>
              <p>
                check out what different sorting algorithms look like with this
                app!
              </p>
              <div className='header__hero--featured-item--links'>
                <FontAwesomeIcon icon={['fab', 'github']} />
                <FontAwesomeIcon icon={['fas', 'globe']} />
              </div>
            </div>
            <div className='header__hero--featured-item'>
              <span className='header__hero--featured-item--class'>
                javascript
              </span>
              <h1>buypedal</h1>
              <p>
                my first (and only) startup, co-founded with my good friend. we
                sell fishing and cycling goods!
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
