
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// SASS Stylesheets
import './starships.scss';

function Starships({Starships}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Starships</h1>
      <div className="starships__flex-container">
        {
          Starships.items.map((starship, idx) => <Starship starship={starship} key={idx}/>)
        }
      </div>
    </section>
  );
}

const Starship = ({starship}) => {
  return (
    <div className="starship">
      <div className="starship__container">
        <div className="starship__name">{starship.name}</div>
      </div>
    </div>
  );
};

export default Starships;