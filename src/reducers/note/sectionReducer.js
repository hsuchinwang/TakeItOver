import * as ActionTypes from '../../constants/ActionTypes';
import { convertTreeList, setListOrder } from '../../common/Utils';

export function section(state, action) {
  switch (action.type) {
    case ActionTypes.NOTEBOOK_SET_SEC_LIST:
      state.siteTree.list[action.payload.connId].list[action.payload.nbId].list = convertTreeList(action.payload.data, 2, action.payload.connId);
      state.siteTree.list[action.payload.connId].list[action.payload.nbId].order = setListOrder(action.payload.data, 'sec_id');
      if ('renameId' in action.payload) {
        state.siteTree.list[action.payload.connId].list[action.payload.nbId].list[action.payload.renameId].actType = 'rename';
      }
      return {
        ...state,
        siteTree: { ...state.siteTree },
      };
    default:
      return null;
  }
}
