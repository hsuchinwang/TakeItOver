'use strict'
import { NavigatorTabTwo } from '../tabTwo/navigationConfiguration';
const initialState = {
//   nasSiteList: [], //for dropdown list
//   nasFolderTree: { rootMap: [] },
//   nasFileList: [],
//   currentDir: '',
};

export const tabTwoReducer = (state, action) => {
  switch (action.type) {
    case 'JUMP_TO_TAB':
      return {
        ...state,
       index: 0,
      };
    default:
      return NavigatorTabTwo.router.getStateForAction(action,state);
  }
}
