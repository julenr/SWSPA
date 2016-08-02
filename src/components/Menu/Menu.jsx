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

const Menu = props => {
  let classes = classNames({
      'menu': true,
      'show-menu': props.BurgerButtonActive
    });
  return (
      <div className={classes} >
        <nav className="menu-items" >
          <span className="menu-item">
            <Link to="/" className="menu__button" onClick={() => props.menuButtonClick()}>
              <span>Intro</span>
            </Link>
          </span>
          <span className="menu-item">
            <Link to="/People" className="menu__button" onClick={() => props.menuButtonClick()}>
              <span>Characters</span>
            </Link>
          </span>
          <span className="menu-item">
            <Link to="/Films" className="menu__button" onClick={() => props.menuButtonClick()}>
              <span>Films</span>
            </Link>
          </span>
          <span className="menu-item">
            <Link to="/Starships" className="menu__button" onClick={() => props.menuButtonClick()}>
              <span>Starships</span>
            </Link>
          </span>
          <span className="menu-item">
            <Link to="/Vehicles" className="menu__button" onClick={() => props.menuButtonClick()}>
              <span>Vehicles</span>
            </Link>
          </span>
          <span className="menu-item">
            <Link to="/Species" className="menu__button" onClick={() => props.menuButtonClick()}>
              <span>Species</span>
            </Link>
          </span>
          <span className="menu-item">
            <Link to="/Planets" className="menu__button" onClick={() => props.menuButtonClick()}>
              <span>Planets</span>
            </Link>
          </span>
        </nav>
      </div>
  );
};

export default Menu;
