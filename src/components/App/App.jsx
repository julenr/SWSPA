
import React from 'react';
import { connect } from 'react-redux';
import * as appActions from '../../redux/actions/app.actions';
import classNames from 'classnames';

import Menu from '../Menu';

// SASS Stylesheets
import './app.scss';

function mapStateToProps(state) {
  return {
    refresh: state._app.refresh,
    BurgerButtonActive: state._app.burgerButtonActive,
    People: state._app.people,
    Films: state._app.films,
    Starships: state._app.starships,
    Vehicles: state._app.vehicles,
    Species: state._app.species,
    Planets: state._app.planets
  };
}

export class App extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {...this.props}));
    return (
      <div className="main-content">
        <MenuButton {...this.props} />
        <Menu {...this.props} />
        {children || 'Welcome to SWAPI React'}
      </div>
    );
  }
}

const MenuButton = props => {
  let classes = classNames({
      'menu-btn': true,
      'active': props.BurgerButtonActive
    });
  return (
    <a href="javascript: void 0" className={classes} onClick={() => props.menuButtonClick()}>
      <span className="lines">
        <span className="l1" />
        <span className="l2" />
        <span className="l3" />
      </span>
    </a>
  );
};

export default connect(
  mapStateToProps, {
    ...appActions
  }
)(App);
