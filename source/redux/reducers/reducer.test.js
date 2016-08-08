import { expect } from 'chai';

import {_app} from './app.reducer';
import * as types from '../actions/action-types';

describe('Redux reducer', () => {
  let state;

  beforeEach(() => {
    state = {
        types: ['people', 'planets'],
        people: {
          loading: false,
          items: []
        },
        planets: {
          loading: false,
          items: []
        }
    }
  });

  it('DUMMY_ACTION', () => {
    expect(_app({}, {
      type: types.DUMMY_ACTION,
      payload: 'foo'
    })).to.deep.equal({
      test: 'foo'
    });
  });

  it('SW_DATA_LOADING', () => {
    const newState = _app(state, {
      type: types.SW_DATA_LOADING,
      swType: state.types[0]
    });
    expect(newState[state.types[0]].loading).to.equal(true);
  });

  it('SW_DATA_LOADED', () => {
    const data = [1, 2, 3];
    const newState = _app(state, {
      type: types.SW_DATA_LOADED,
      swType: state.types[0],
      data
    });
    expect(newState[state.types[0]].loading).to.equal(false);
    expect(newState[state.types[0]].items).to.eql(data);
  });

  it('SW_DATA_LOADED_ERROR', () => {
    const newState = _app(state, {
      type: types.SW_DATA_LOADED_ERROR,
      swType: state.types[0]
    });
    expect(newState[state.types[0]].loading).to.equal(false);
  });

});
