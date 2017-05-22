import * as ActionTypes from '../../constants/ActionTypes';
import { converNoteList } from '../../common/Utils';

function setNoteInfo(state, data, initialState) {
  const noteList = { ...state.noteList };
  const siteNoteList = { ...state.siteNoteList };
  const updateListContent = {};
  state.noteInfo.connId = 'connId' in data ? data.connId : state.noteInfo.connId;
  state.noteInfo.id = 'id' in data ? data.id : state.noteInfo.id;

  if (data.summary !== undefined) {
    const noteText = data.summary;
    updateListContent.summary = noteText.length < 200 ? noteText : noteText.substring(0, 200);
  }
  if (data.coverUrl !== undefined) {
    updateListContent.cover_url = data.coverUrl;
    delete data.coverUrl;
  }

  if (noteList.list[state.noteInfo.id]) {
    noteList.list[state.noteInfo.id] = {
      ...state.noteList.list[state.noteInfo.id],
      ...updateListContent,
    };
  }
  if (siteNoteList[state.noteInfo.connId] && siteNoteList[state.noteInfo.connId].list[state.noteInfo.id]) {
    siteNoteList[state.noteInfo.connId].list[state.noteInfo.id] = {
      ...siteNoteList[state.noteInfo.connId].list[state.noteInfo.id],
      ...updateListContent,
    };
  }

  return {
    ...state,
    noteInfo: {
      ...initialState.noteInfo,
      ...state.noteInfo,
      ...data,
      needRemountEditor: state.noteInfo.needRemountEditor,
    },
    noteList,
    siteNoteList,
  };
}


export function noteInfo(state, action, initialState) {
  switch (action.type) {
    case ActionTypes.NOTE_GET_INFO:
      return {
        ...state,
        noteInfo: {
          ...state.noteInfo,
          ...action.payload.noteInfo,
          needRemountEditor: action.payload.noteInfo.needRemountEditor ?
            Object.create(null) : state.noteInfo.needRemountEditor,
        },
      };
    case ActionTypes.USER_SET_INIT_DATA:
      if (action.payload.noteInfo) {
        return {
          ...state,
          noteInfo: { ...action.payload.noteInfo },
        };
      }
      return state;
    case ActionTypes.NOTEBOOK_SET_SELECT_NOTE:
      return {
        ...state,
        noteInfo: {
          ...state.noteInfo,
          id: action.payload.noteId,
          connId: action.payload.connId,
        },
      };
    case ActionTypes.NOTEBOOK_SET_SELECTED_NOTE:
      return setNoteInfo(state, action.payload, initialState);
    case ActionTypes.NOTEBOOK_DELETE_NOTE:
    case ActionTypes.NOTEBOOK_DELETE_TRASH_NOTE:
      if (action.payload.noteId === state.noteInfo.id) {
        return {
          ...state,
          noteInfo: { ...initialState.noteInfo },
        };
      }
      return state;
    case ActionTypes.NOTE_SET_INFO:
    case ActionTypes.NOTE_SET_IMPORTANT:
    case ActionTypes.NOTE_CANCEL_IMPORTANT:
      return setNoteInfo(state, action.payload, initialState);
    case ActionTypes.NOTEBOOK_SET_NOTE_LIST: {
      const newNoteList = converNoteList(action.payload.data.note_list, action.payload.connId);
      return {
        ...state,
        secInfo: action.payload.data.sec_info,
        noteList: newNoteList,
        noteRename: action.payload.rename ? action.payload.rename : state.noteRename,
      };
    }
    case ActionTypes.NOTEBOOK_INIT_NOTE_LIST:
    case ActionTypes.NOTEBOOK_INIT_TRASH_NOTE_LIST:
    case ActionTypes.NOTEBOOK_INIT_TRASH_RESTORE_NOTE_LIST:
      return {
        ...state,
        noteList: {
          list: {},
          order: [],
        },
      };
    case ActionTypes.NOTE_CHANGE_UPLOAD_STATUS:
      return { ...state, ...action.payload };
      /* Fullscreen*/
    case ActionTypes.NOTEBOOK_TOGGLE_FULLSCREEN:
    case ActionTypes.NOTEBOOK_SHOW_NEXTCONTENT:
    case ActionTypes.NOTEBOOK_SHOW_PREVCONTENT:
      return Object.assign({}, state, action.payload);
    case ActionTypes.NOTE_SET_SNAPSHOT_LIST:
    case ActionTypes.NOTE_INIT_SNAPSHOT_INFO:
      return Object.assign({}, state, { ...action.payload });
    case ActionTypes.NOTE_GET_SNAPSHOT:
      return Object.assign({}, state, {
        snapshotInfo: {
          id: action.payload.data.snapshot_info.snapshot_id,
          name: action.payload.data.snapshot_info.note_name,
          creator: action.payload.data.snapshot_info.creator,
          encrypt: action.payload.data.snapshot_info.encrypt,
          createTime: action.payload.data.snapshot_info.create_time,
          content: action.payload.data.snapshot_info.content,
        },
      });
    default:
      return null;
  }
}
