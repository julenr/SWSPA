
import React from 'react';
import { connect } from 'react-redux';
import * as appActions from '../../redux/actions/app.actions';
import classNames from 'classnames';

import Menu from '../Menu';

// SASS Stylesheets
import './app.scss';

function mapStateToProps(state) {
  const { 
    refresh, burgerButtonActive,
    people, films, starships, vehicles, species, planets
  } = state._app;

  return {
    refresh,
    burgerButtonActive,
    people, films, starships, vehicles, species, planets    
  };
}

export class App extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {...this.props}));
    return (
      <div className="main-content">
        <MenuButton {...this.props} />
        <Menu {...this.props} />
        {children || 'Welcome to Star Wars Universe'}
      </div>
    );
  }
}

const MenuButton = props => {
  let classes = classNames({
      'menu-btn': true,
      'active': props.burgerButtonActive
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
