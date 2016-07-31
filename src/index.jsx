
if (__DEV__) {
  console.log('DEVELOPMENT ENVIRONMENT ACTIVATED');
}

// SASS Stylesheets
import './styles/screen.scss';
//import './styles/ionicons/ionicons.scss';

// ES6 Polyfill
import 'babel-polyfill';

// REACT Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

// REDUX STORE
const initialState = {
  _app: {
    menuActive: true,
    types: ['people', 'films', 'starships', 'vehicles', 'species', 'planets'],
    people: {
      loading: false,
      items: []
    },
    films: {
      loading: false,
      items: []
    },
    starships: {
      loading: false,
      items: []
    },
    vehicles: {
      loading: false,
      items: []
    },
    species: {
      loading: false,
      items: []
    },
    planets: {
      loading: false,
      items: []
    }
  }
};
import store from './redux/create-store';
import { Provider } from 'react-redux';
import { loadSWData } from './redux/actions/app.actions';
const Store = store.configureStore(initialState);
initialState._app.types.forEach(type => Store.dispatch(loadSWData(type)));

//CUSTOM COMPONENTS
import App from './components/App';
import Home from './components/Home';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import Planets from './components/Planets';

// Element to attach React-DOM
const app = document.createElement('div');

document.body.appendChild(app);

ReactDOM.render((
  <Provider store={ Store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/people" component={ People }/>
        <Route path="/films" component={ Films }/>
        <Route path="/starships" component={ Starships }/>
        <Route path="/vehicles" component={ Vehicles }/>
        <Route path="/species" component={ Species }/>
        <Route path="/planets" component={ Planets }/>
        <Route path="*" component={ Home }/>
      </Route>
    </Router>
  </Provider>
), app);




