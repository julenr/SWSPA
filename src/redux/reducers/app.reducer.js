
const initialState = {};
import * as types from '../actions/action-types';

// APP REDUCER
export function _app(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    case types.DUMMY_ACTION:
      newState.test = action.payload;
      return newState;
    case types.MENU_BUTTON_CLICK:
      newState.burgerButtonActive = !newState.burgerButtonActive;
      return newState;
    case types.SW_DATA_LOADING:
      newState[action.swType].loading = true;
      return newState;
    case types.SW_DATA_LOADED:
      newState[action.swType].loading = false;
      newState[action.swType].items = action.data;
      return newState;
    case types.SW_DATA_LOADED_ERROR:
      newState[action.swType].loading = false;
      return newState;
    default:
      return state;
  }
}
