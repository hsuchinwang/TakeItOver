import * as ActionTypes from '../../constants/ActionTypes';
import { removeItemFromTreeList, convertTreeList, convertSiteNoteList,
         setListOrder, handleNotesData } from '../../common/Utils';

export function common(state, action) {
  switch (action.type) {
    case ActionTypes.GET_NOTE_LIST_BY_SECTION:
    case ActionTypes.GET_NOTE_LIST_BY_TAG:
    case ActionTypes.GET_NOTE_LIST_IN_TRASHCAN:
      return handleNotesData(action.payload, state);
    // case ActionTypes.GET_NOTE_LIST_BY_TAG: {
    //   const {
    //     tagInfo: { notes, info },
    //     orther: { connId },
    //     noteInfo,
    //   } = action.payload;
    //   const result = {
    //     ...state,
    //     noteList: converNoteList(notes, connId),
    //     secInfo: {
    //       type: 'tag',
    //       sec_name: info.tag_name,
    //     },
    //   };
    //   if (noteInfo) result.noteInfo = noteInfo;
    //   return result;
    // }
    case ActionTypes.NOTEBOOK_SET_SELECT_ITEM:
    case ActionTypes.NOTEBOOK_SET_FIRSTIN:
      return { ...state, ...action.payload };
    case ActionTypes.NOTEBOOK_SET_COLLAPSED_ITEM: {
      const userLocalStorage = JSON.parse(localStorage.getItem(action.payload.userId));
      state.collapsedList = userLocalStorage && 'collapsedList' in userLocalStorage ? userLocalStorage.collapsedList : state.collapsedList;

      const collapsedIndex = state.collapsedList.indexOf(action.payload.item);
      if (collapsedIndex >= 0) state.collapsedList.splice(collapsedIndex, 1);
      else state.collapsedList.push(action.payload.item);

      const result = userLocalStorage || {};
      try {
        localStorage.setItem(action.payload.userId, JSON.stringify({
          ...result,
          collapsedList: state.collapsedList,
        }));
      } catch (e) {
        console.error(e);
      }
      return { ...state, collapsedList: state.collapsedList };
    }
    case ActionTypes.NOTEBOOK_SET_LIST:
      return { ...state, siteTree: action.payload.data };
    case ActionTypes.SYS_SET_MOUNT_CLOUD:
    case ActionTypes.SYS_SET_MOUNT_NAS:
      state.siteTree.list[action.payload.newSite.connectionid] = {
        type: 'site',
        subType: action.payload.newSite.type,
        id: action.payload.newSite.connectionid,
        name: action.payload.newSite.connection_name,
        actType: null,
        connId: action.payload.newSite.connectionid,
        list: {},
        order: [],
      };
      state.siteTree.order.push(action.payload.newSite.connectionid);
      return {
        ...state,
        siteTree: state.siteTree,
      };
    case ActionTypes.NOTEBOOK_REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        siteTree: removeItemFromTreeList(state.siteTree, action.payload.data),
      };
    case ActionTypes.NOTEBOOK_SET_BOOK_LIST:
      state.siteTree.list[action.payload.connId].list = convertTreeList(action.payload.data, 1, action.payload.connId);
      state.siteTree.list[action.payload.connId].order = setListOrder(action.payload.data, 'nb_id');
      state.siteTree.list[action.payload.connId].order.push(`${action.payload.connId}-trashcan`);
      if ('renameId' in action.payload) {
        state.siteTree.list[action.payload.connId].list[action.payload.renameId].actType = 'rename';
      }
      return {
        ...state,
        siteTree: { ...state.siteTree },
      };
    case ActionTypes.NOTEBOOK_SET_SITE_NOTE_LIST:
      return {
        ...state,
        siteNoteList: Object.assign(state.siteNoteList, convertSiteNoteList(action.payload.siteInfo, action.payload.noteList)),
      };
    case ActionTypes.NOTEBOOK_INIT_SITE_NOTE_LIST:
      return {
        ...state,
        siteNoteList: {},
      };
    case ActionTypes.NOTEBOOK_RENAME_ACTION:
      switch (action.payload.type) {
        case 'notebook':
          state.siteTree.list[action.payload.para.connId].list[action.payload.para.id].actType = 'rename';
          return {
            ...state,
            siteTree: Object.assign({}, state.siteTree),
          };
        case 'section':
          state.siteTree.list[action.payload.para.connId].list[action.payload.para.nbId].list[action.payload.para.id].actType = 'rename';
          return {
            ...state,
            siteTree: Object.assign({}, state.siteTree),
          };
        case 'note':
          return {
            ...state,
            noteRename: true,
          };
        default:
          return state;
      }
    case ActionTypes.NOTEBOOK_RENAME_CANCEL:
      switch (action.payload.type) {
        case 'notebook':
          state.siteTree.list[action.payload.para.connId].list[action.payload.para.id].actType = null;
          return { ...state };
        case 'section':
          state.siteTree.list[action.payload.para.connId].list[action.payload.para.nbId].list[action.payload.para.id].actType = null;
          return { ...state };
        case 'note':
          return { ...state, noteRename: false };
        default:
          return state;
      }
    case ActionTypes.NOTEBOOK_SET_RENAME:
      state.siteTree.list[action.payload.para.connId].list[action.payload.para.id].actType = null;
      if (action.payload.rename) {
        state.siteTree.list[action.payload.para.connId].list[action.payload.para.id].name = action.payload.para.name;
      }
      return {
        ...state,
        siteTree: Object.assign({}, state.siteTree),
      };
    case ActionTypes.NOTEBOOK_SET_RENAME_SECTION:
      state.siteTree.list[action.payload.para.connId].list[action.payload.para.nbId].list[action.payload.para.id].actType = null;
      if (action.payload.rename) {
        state.siteTree.list[action.payload.para.connId].list[action.payload.para.nbId].list[action.payload.para.id].name = action.payload.para.name;
      }
      return {
        ...state,
        siteTree: { ...state.siteTree },
      };
    case ActionTypes.NOTEBOOK_SET_RENAME_NOTE:
      if (action.payload.rename && state.noteList.order.length > 0 && action.payload.para.id in state.noteList.list) {
        state.noteList.list[action.payload.para.id].note_name = action.payload.para.name;
      }
      return {
        ...state,
        noteRename: false,
        noteList: Object.assign({}, state.noteList),
        noteInfo: Object.assign({}, state.noteInfo, { name: action.payload.para.name }),
      };
    case ActionTypes.NOTEBOOK_DELETE_SITENOTE:
      delete state.siteNoteList[action.payload.connId].list[action.payload.noteId];
      return {
        ...state,
        siteNoteList: { ...state.siteNoteList },
      };
    case ActionTypes.NOTEBOOK_SET_MOVE_TO_INIT:
      return {
        ...state,
        moveToList: {
          siteList: [],
          nbList: [],
          secList: [],
        },
      };
    case ActionTypes.NOTEBOOK_SET_MOVE_TO_BOOK_LIST:
      return {
        ...state,
        moveToList: {
          siteList: state.moveToList.siteList,
          nbList: action.payload.data.notebook_list,
          secList: [],
        },
      };
    case ActionTypes.NOTEBOOK_SET_MOVE_TO_SEC_LIST:
      return {
        ...state,
        moveToList: {
          siteList: state.moveToList.siteList,
          nbList: state.moveToList.nbList,
          secList: action.payload.data.section_list,
        },
      };
    case ActionTypes.NOTEBOOK_GET_SYNC_INFO:
      return Object.assign({}, state, { ...action.payload });
    default:
      return null;
  }
}
