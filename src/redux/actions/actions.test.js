// ES6 Polyfill
import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from './app.actions';
import * as types from './action-types';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Redux basic actions', () => {
  let mock;
  
  beforeEach(function() {
    mock = new MockAdapter(axios);
  });

  it('DUMMY_ACTION', () => {
    const payload = 'test';
    const expectedAction = {
      type: types.DUMMY_ACTION,
      payload
    };
    expect(actions.dummyAction(payload)).to.deep.equal(expectedAction);
  });

  it('SW_DATA_LOADING', () => {
    const swType = 'test';
    const expectedAction = {
      type: types.SW_DATA_LOADING,
      swType
    };
    expect(actions.SWDataLoading(swType)).to.deep.equal(expectedAction);
  });

  it('SW_DATA_LOADED', () => {
    const swType = 'test';
    const data = [1, 2, 3];
    const expectedAction = {
      type: types.SW_DATA_LOADED,
      data,
      swType
    };
    expect(actions.SWDataLoaded(data, swType)).to.deep.equal(expectedAction);
  });

  it('should generate actions through Thunk middleware', () => {
    const store = mockStore({ data: [] });
    const expectedActions = [
      { type: types.SW_DATA_LOADING, swType: 'test' },
      { type: types.SW_DATA_LOADED, data: [1, 2, 3], swType: 'test'}
    ];
    mock.onGet('/api/test').reply(200, {collection: [1, 2, 3]});
    return store.dispatch(actions.loadSWData('test'))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });
  
});
