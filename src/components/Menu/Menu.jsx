//
//
//              Created by
//            __ _____ __    _____ _____    _____ _____    __ _____
//         __|  |  |  |  |  |   __|   | |  | __  |     |__|  |     |
//        |  |  |  |  |  |__|   __| | | |  |    -|  |  |  |  |  |  |
//        |_____|_____|_____|_____|_|___|  |__|__|_____|_____|_____|
//
//                on 29/03/2016
//                   isusk246@gmail.com
//
//

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// SASS Stylesheets
import './menu.scss';

const Menu = (props) => {
  return (
      <div className='menu notshow-menu' >
        <nav className="menu-items" >
          <Link to="/People" className="menu__button">
            <div>Characters</div>
          </Link>
          <Link to="/Films" className="menu__button">
            <div>Films</div>
          </Link>
          <Link to="/Starships" className="menu__button">
            <div>Starships</div>
          </Link>
          <Link to="/Vehicles" className="menu__button">
            <div>Vehicles</div>
          </Link>
          <Link to="/Species" className="menu__button">
            <div>Species</div>
          </Link>
          <Link to="/Planets" className="menu__button">
            <div>Planets</div>
          </Link>
        </nav>
      </div>
  );
};

export default Menu;
