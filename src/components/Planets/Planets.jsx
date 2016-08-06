
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// SASS Stylesheets
import './planets.scss';

function Planets({Planets}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Planets</h1>
      <div className="planets__flex-container" >
        {
          Planets.items.map((planet, idx) => <Planet planet={planet} key={idx}/>)
        }
      </div>
    </section>
  );
}

const Planet = ({planet}) => {
  return (
    <article className="planet">
      <div className="planet__container">
        <div className="planet__name">{planet.name}</div>
        <div className="planet__population"><span className="attribute">Population:</span>{planet.population}</div>
        <div className="planet__diameter"><span className="attribute">Diameter:</span>{planet.diameter}</div>
        <div className="planet__climate"><span className="attribute">Climate:</span>{planet.climate}</div>
        <div className="planet__orbital-period"><span className="attribute">Orvital Period:</span>{planet.orbital_period}</div>
        <div className="planet__gravity"><span className="attribute">Gravity:</span>{planet.gravity}</div>
        <div className="planet__rotation-period"><span className="attribute">Rotation Period:</span>{planet.rotation_period}</div>
        <div className="planet__surface-water"><span className="attribute">Surface Water:</span>{planet.surface_water}</div>
        <div className="planet__terrain"><span className="attribute">Terrain:</span>{planet.terrain}</div>
      </div>
    </article>
  );
};

export default Planets;
