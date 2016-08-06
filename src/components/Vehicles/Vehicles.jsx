
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
          Vehicles.items.map((vehicle, idx) => <Vehicle vehicle={vehicle} key={idx}/>)
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
        <div className="vehicle__cargo_capacity"><span className="attribute">Cargo capacity:</span>{vehicle.cargo_capacity}</div>
        <div className="vehicle__consumables"><span className="attribute">Consumables:</span>{vehicle.consumables}</div>
        <div className="vehicle__cost_in_credits"><span className="attribute">Cost:</span>{vehicle.cost_in_credits}</div>
        <div className="vehicle__crew"><span className="attribute">Crew:</span>{vehicle.crew}</div>
        <div className="vehicle__length"><span className="attribute">Lenght:</span>{vehicle.length}</div>
        <div className="vehicle__manufacturer"><span className="attribute">Manufacturer:</span>{vehicle.manufacturer}</div>
        <div className="vehicle__max_atmosphering_speed"><span className="attribute">Max speed:</span>{vehicle.max_atmosphering_speed}</div>
        <div className="vehicle__model"><span className="attribute">Model:</span>{vehicle.model}</div>
        {/* <div className="vehicle__pilots"><span className="attribute">Pilots:</span>{vehicle.pilots}</div> */}
        <div className="vehicle__vehicle_class"><span className="attribute">Class:</span>{vehicle.vehicle_class}</div>
      </div>
    </div>
  );
};

export default Vehicles;
