import { ON_SELECT_CATEGORY, ON_STORE_VIDEO } from "../actionTypes/actionTypes";

const initialState = {
  bgColor: "#0142ad",
  category: "MARATHI_MED",
  videos: null
};

let newState;
let videos, videosForCategory;

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_SELECT_CATEGORY:
      newState = Object.assign({}, state);
      videos = state.videos;
      

      newState.category = action.category;
      newState.bgColor = action.bgColor;
      videosForCategory = videos.filter(video => video.name == action.category);
      newState.videosForCategory = videosForCategory;

      return newState;

    case ON_STORE_VIDEO:
      newState = Object.assign({}, state);
      videos = action.videos;
      newState.videos = videos;
      videosForCategory = videos.filter(
        video => video.name == initialState.category
      );

      newState.videosForCategory = videosForCategory;

      return newState;

    default:
      return initialState;
  }
};

export default categoryReducer;
