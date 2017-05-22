import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  notebookList: {},
};

export function exportNotebook(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.EXPORT_GET_NOTEBOOKLIST:
      return {
        ...state,
        notebookList: action.payload.notebookList,
      };
    default:
      return state;
  }
}
