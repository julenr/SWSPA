
import React from 'react';

// SASS Stylesheets
import './starships.scss';

function Starships({starships}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Starships</h1>
      <div className="starships__flex-container">
        {
          starships.items.map((starship, idx) => <Starship starship={starship} key={idx}/>)
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
        <div className="starship__crew"><span className="attribute">Crew:</span>{starship.crew}</div>
        <div className="starship__passengers"><span className="attribute">Passengers:</span>{starship.passengers}</div>
        <div className="starship__length"><span className="attribute">Length:</span>{starship.length}</div>
        <div className="starship__manufacturer"><span className="attribute">Manufacturer:</span>{starship.manufacturer}</div>
        <div className="starship__cargo_capacity"><span className="attribute">Capacity:</span>{starship.cargo_capacity}</div>
        <div className="starship__model"><span className="attribute">Model:</span>{starship.model}</div>
      </div>
    </div>
  );
};

export default Starships;
