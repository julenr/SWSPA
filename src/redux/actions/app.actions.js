
import axios from 'axios';
import * as types from './action-types';

// Boilerplate
export function dummyAction(payload) {
  return {
    type: types.DUMMY_ACTION,
    payload
  };
}

export function SWDataLoading(swType) {
  return {
    type: types.SW_DATA_LOADING,
    swType
  };
}

export function SWDataLoaded(data, swType) {
  return {
    type: types.SW_DATA_LOADED,
    data,
    swType
  };
}

export function SWDataLoadedError(swType) {
  return {
    type: types.SW_DATA_LOADED_ERROR,
    swType
  };
}

export function loadSWData(type) {
  if (__DEV__) {console.info(`Loading ${type} SW data`);}
  return dispatch => {
    dispatch(SWDataLoading(type));
    return axios.get(`/api/${type}`)
        .then(response => dispatch(SWDataLoaded(response.data.collection, type)))
        .catch(error => dispatch(SWDataLoadedError(type)));
  };
}
