
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// SASS Stylesheets
import './species.scss';

function Species({Species}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Species</h1>
      <div className="species__flex-container">
        {
          Species.items.map((specie, idx) => <Specie specie={specie} key={idx}/>)
        }
      </div>
    </section>
  );
}

const Specie = ({specie}) => {
  return (
    <div className="specie">
      <div className="specie__container">
          <div className="specie__name">{specie.name}</div>
      </div>
    </div>
  );
};

export default Species;