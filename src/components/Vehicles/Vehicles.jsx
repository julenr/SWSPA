
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// SASS Stylesheets
import './vehicles.scss';

function Vehicles({Vehicles}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Vehicles</h1>
      <div className="vehicles__flex-container">
        {
          Vehicles.items.map((vehicle, idx) => <Vehicle vehicle={Vehicle} key={idx}/>)
        }
      </div>
    </section>
  );
}

const Vehicle = ({vehicle}) => {
  return (
    <div className="vehicle">
      <div className="vehicle__container">
        <div className="vehicle__name">{vehicle.name}</div>
      </div>
    </div>
  );
};

export default Vehicles;