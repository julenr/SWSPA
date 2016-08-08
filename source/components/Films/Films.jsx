
import React from 'react';

// SASS Stylesheets
import './films.scss';

function Films({films}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Films</h1>
      <div className="films__flex-container">
        {
          films.items.map((film, idx) => <Film film={film} key={idx}/>)
        }
      </div>
    </section>
  );
}

const Film = ({film}) => {
  return (
    <div className="film">
      <div className="film__container">
        <div className="film__title">{film.title}</div>
        <div className="character__gender"><span className="attribute">Director:</span>{film.director}</div>
      </div>
    </div>
  );
};

export default Films;
