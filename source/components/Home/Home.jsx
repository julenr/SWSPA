
import React from 'react';

// SASS Stylesheets
import './home.scss';

import introText from '../../../README.md';

const Home = () => {
  return (
    <section className='section main-section' >
      <div className="home__flex-container" >
        <h1 className="intro-title">STAR WARS<sub>UNIVERSE</sub></h1>
        <div className="titles">
          <div className="titles__content" dangerouslySetInnerHTML={{__html: introText}} />
        </div>
      </div>
    </section>
  );
};

export default Home;
