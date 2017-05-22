import * as ActionTypes from '../../constants/ActionTypes';
import { handleNotesData } from '../../common/Utils';

export function tag(state, action) {
  switch (action.type) {
    case ActionTypes.NOTE_GET_RECENT_USE_TAG_LIST:
      return {
        ...state,
        recentUseTagList: action.payload.tagList,
      };
    case ActionTypes.NOTE_SAVE_TAG_LIST:
      if (action.payload.notesInfo) return handleNotesData(action.payload, state);
      return {
        ...state,
        noteInfo: {
          ...state.noteInfo,
          tagList: action.payload.tagList,
        },
      };
    case ActionTypes.NOTE_SET_TAG_LIST:
      return {
        ...state,
        noteInfo: {
          ...state.noteInfo,
          tagList: action.payload.tagList,
        },
      };
    default:
      return null;
  }
}
