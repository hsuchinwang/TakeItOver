import * as ActionTypes from '../../constants/ActionTypes';

export function menu(state, action) {
  switch (action.type) {
    case ActionTypes.NOTEBOOK_SET_MENU:
      return {
        ...state,
        menuInfo: action.payload.data,
        focus: true,
      };
    case ActionTypes.NOTEBOOK_SET_MENU_HIDE:
      return {
        ...state,
        menuInfo: {},
        focus: false,
      };
    case ActionTypes.NOTEBOOK_SET_MENU_ALIVE:
      return {
        ...state,
        focus: action.payload.focus,
      };
    case ActionTypes.NOTEBOOK_SET_MENU_WIDTH:
      return {
        ...state,
        menuWidth: action.payload.width,
      };
    default:
      return null;
  }
}
