import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  isFilePreviewMode: false,
  isToolbarShow: true,
  isFileListShow: false,
  isSizeBoxShow: false,
  isResizable: false,
  isWindowResized: false,
  fileList: [{
    fileId: '',
    originName: '',
    src: '',
    newTabSrc: '',
    attachmentSrc: '',
    thumbnailSrc: '',
    ext: '',
  }],
  fileIndex: 0,
  imgOriginSize: {
    height: 0,
    width: 0,
  },
  imgSize: {
    height: 0,
    width: 0,
  },
  imgScale: {
    scale: 0, // int scale := -5 ~ +7; step := 12;
    range: 41, // (processBarLength:=98/step)*5
  },
  imgOffset: {
    top: 0,
    left: 0,
  },
};

export function filePreview(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FILE_PREVIEW_SET_IMG_SIZE:
      return {
        ...state,
        imgSize: action.payload.imgSize,
      };
    case ActionTypes.FILE_PREVIEW_SET_IMG_ORIGIN_SIZE:
      return {
        ...state,
        imgOriginSize: action.payload.imgOriginSize,
      };
    case ActionTypes.FILE_PREVIEW_SET_IMG_SCALE:
      return {
        ...state,
        imgScale: action.payload.imgScale,
      };
    case ActionTypes.FILE_PREVIEW_SET_IMG_OFFSET:
      return {
        ...state,
        imgOffset: action.payload.imgOffset,
      };
    case ActionTypes.FILE_PREVIEW_SET_IS_RESIZABLE:
      return {
        ...state,
        isResizable: action.payload.isResizable,
      };
    case ActionTypes.FILE_PREVIEW_SET_IS_WINDOW_RESIZE:
      return {
        ...state,
        isWindowResized: action.payload.isWindowResized,
      };
    case ActionTypes.FILE_PREVIEW_SET_IS_TOOLBAR_SHOW:
      return {
        ...state,
        isToolbarShow: action.payload.isToolbarShow,
      };
    case ActionTypes.FILE_PREVIEW_TOGGLE_FILE_PREVIEW:
      return {
        ...state,
        isFilePreviewMode: !state.isFilePreviewMode,
      };
    case ActionTypes.FILE_PREVIEW_TOGGLE_TOOLBAR:
      return {
        ...state,
        isToolbarShow: !state.isToolbarShow,
      };
    case ActionTypes.FILE_PREVIEW_TOGGLE_FILE_LIST:
      return {
        ...state,
        isFileListShow: !state.isFileListShow,
      };
    case ActionTypes.FILE_PREVIEW_TOGGLE_SIZE_BOX:
      return {
        ...state,
        isSizeBoxShow: !state.isSizeBoxShow,
      };
    case ActionTypes.FILE_PREVIEW_SET_FILE_INDEX: {
      let index = action.payload.fileIndex;
      if (index < 0) {
        index = 0;
      } else if (index > state.fileList.length - 1) {
        index = state.fileList.length - 1;
      }
      return {
        ...state,
        fileIndex: index,
      };
    }
    case ActionTypes.FILE_PREVIEW_SET_FILE_LIST:
      return {
        ...state,
        fileList: action.payload.fileList,
      };
    case ActionTypes.FILE_PREVIEW_INITIALIZE_STATUS:
      return {
        ...state,
        isFilePreviewMode: false,
        isToolbarShow: true,
        isFileListShow: false,
        isSizeBoxShow: false,
        isResizable: false,
        isWindowResized: false,
        fileIndex: 0,
      };
    default:
      return state;
  }
}
