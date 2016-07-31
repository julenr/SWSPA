
import { createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'

if (__DEV__){
  var devTools = require('remote-redux-devtools');
}

import reducer from './reducers/index';

const loggerOptions = {
  level: 'log', // 'log', | 'console' | 'warn' | 'error' | 'info', // console's level
  duration: true, //: Boolean, // Print the duration of each action?
  timestamp: true, //: Boolean, // Print the timestamp with each action?
  colors: { // Object with color getters. See the ColorsObject interface.
    title: action => 'green'
  },
  logger: console, //: LoggerObject, // Implementation of the `console` API.
  logErrors: true, //: Boolean, // Should the logger catch, log, and re-throw errors?
  collapsed: false // Takes a boolean or optionally a function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
  // predicate: null, // If specified this function will be called before each action is processed with this middleware.
  // stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
  // actionTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
  // errorTransformer // Transform state before print. Eg. convert Immutable object to plain JSON.
};

const logger = createLogger(loggerOptions);
let initialState;
var store;

const Store = {
  configureStore: state => {
    var middleware = (__DEV__) ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);
    var enhancer;
    if(__DEV__) {
      enhancer = compose(
        middleware,
        devTools({
          name: 'SWAPI Mini-project', realtime: true
        })
      );
    } else {
      enhancer = compose( middleware );
    }
    initialState = state;
    store = createStore(reducer, initialState, enhancer);
    return store;
  },
  getState: function() {
    return store.getState();
  },
  getInitialState: function() {
    return initialState;
  },
  dispatch: function(action) {
    store.dispatch(action);
  }
};

export {Store as default};
