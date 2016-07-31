
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// SASS Stylesheets
import './people.scss';

function People({People}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Characters</h1>
      <div className="people__flex-container">
        {
          People.items.map((character, idx) => <Character character={character} key={idx}/>)
        }
      </div>
    </section>
  );
}

const Character = ({character: char}) => {
  return (
    <div className="character">
      <div className="character__container">
        <div className="character__name">{char.name}</div>
        <div className="character__gender"><span className="attribute">Gender:</span> {char.gender}</div>
        <div className="character__birth-year"><span className="attribute">Birth Year:</span> {char.birth_year}</div>
        <div className="character__height"><span className="attribute">Height:</span> {char.height}</div>
        <div className="character__mass"><span className="attribute">Mass:</span> {char.mass}</div>
        <div className="character__eye-color"><span className="attribute">Eye Color:</span> {char.eye_color}</div>
        <div className="character__skin-color"><span className="attribute">Skin Color:</span> {char.skin_color}</div>
        <div className="character__hair-color"><span className="attribute">Hair Color:</span> {char.hair_color}</div>
      </div>
    </div>
  );
};

export default People;