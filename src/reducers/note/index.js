import { noteInfo } from './noteInfoReducer';
import { section } from './sectionReducer';
import { tag } from './tagReducer';
import { common } from './commonReducer';

const reducers = [noteInfo, section, tag, common];
const initialState = {
  siteTree: {
    list: {},
    order: [],
  },
  noteList: {
    list: {},
    order: [],
  },
  moveToList: {
    siteList: [],
    nbList: [],
    secList: [],
  },
  siteNoteList: {},    // for search & favorit
  secInfo: {},
  noteInfo: {
    connId: '',
    nbId: null,
    secId: null,
    realNoteId: null,
    nbName: '',
    secName: '',
    id: '',
    name: '',
    userColors: {},
    tagList: [],
    creator: null,
    encrypt: null,
    updateTime: null,
    lastEditor: null,
    publicType: null,
    content: null,
    objContent: null,
    collaborator: [],
    shareInfo: null,
    tools: null,        // note toolbar permission
    enabled: 1,          // 0: trash   1: normal
    isDefault: null,
    version: 0,
    username: null,
    userId: null,
    needRemountEditor: Object.create(null),
  },
  isUploading: false,
  collapsedList: [],
  firstIn: true,
  recentUseTagList: [],
  tagList: [],
  selectItemData: null,
  noteRename: false,
    /* Fullscreen */
  isFullscreenMode: false,
  fullscreenModeButtons: {
    prev: false,
    next: true,
  },
  snapshotList: [],
  snapshotInfo: {
    id: '',
    name: '',
    creator: '',
    encrypt: null,
    createTime: null,
    content: null,
  },
  syncInfo: {},
};

export function note(state = initialState, action) {
  let result = null;
  for (let i = 0; i < reducers.length; i++) {
    result = reducers[i](state, action, initialState);
    if (result) return result;
  }
  return state;
}
