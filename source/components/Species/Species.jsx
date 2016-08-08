
import React from 'react';

// SASS Stylesheets
import './species.scss';

function Species({species}) {
  return (
    <section className='section main-section' >
      <h1 className="section__tile">Species</h1>
      <div className="species__flex-container">
        {
          species.items.map((specie, idx) => <Specie specie={specie} key={idx}/>)
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
          <div className="specie__language"><span className="attribute">Language:</span>{specie.language}</div>
          <div className="specie__eye_colors"><span className="attribute">Eye colors:</span>{specie.eye_colors}</div>
          <div className="specie__hair_colors"><span className="attribute">Hair colors:</span>{specie.hair_colors}</div>
          <div className="specie__skin_colors"><span className="attribute">Skin colors:</span>{specie.skin_colors}</div>
          <div className="specie__designation"><span className="attribute">Designation:</span>{specie.designation}</div>
      </div>
    </div>
  );
};

export default Species;
