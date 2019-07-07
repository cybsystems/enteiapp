import { ON_SELECT_CATEGORY, ON_STORE_VIDEO, GET_USER, ON_SEARCH_VIDEO } from '../actionTypes/actionTypes'
import store from '../store/stores';

const initialState = {
  bgColor: '#0142ad',
  category: 'MARATHI_MED',
  videos: null,
  pdfs: null
}

let newState
let videos, videosForCategory, pdfs

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_SELECT_CATEGORY:
      newState = Object.assign({}, state)
      videos = state.videos
      newState.category = action.category
      newState.bgColor = action.bgColor
      videosForCategory = videos.filter(video => video.name == action.category)
      newState.videosForCategory = videosForCategory
      return newState

    case 'ON_STORE_PDF':
      newState = Object.assign({}, state)
      pdfs = action.pdfs
      newState.pdfsForCategory = pdfs
      newState.pdfsToShow = pdfs
      return newState

    case ON_STORE_VIDEO:
      newState = Object.assign({}, state)
      videos = action.videos
      newState.videosForCategory = videos
      newState.videosToShow = videos

      return newState

    case ON_SEARCH_VIDEO:
      const { videosForCategory } = state
      const { text } = action
      const videosToShow = videosForCategory.filter(
        video =>
          video &&
          video.videos_title &&
          (video.videos_title.toLowerCase().includes(text.toLowerCase()) ||
            video.videos_desc.toLowerCase().includes(text.toLowerCase()))
      )
      let newState = Object.assign({}, state)
      newState.videosToShow = videosToShow
      return newState

    default:
      return state
  }
}

export default categoryReducer
