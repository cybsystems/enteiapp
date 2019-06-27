
import { ON_SELECT_CATEGORY, ON_GET_VIDEOS } from '../actionTypes/actionTypes';
 


export const selectCategory=category=>({type:ON_SELECT_CATEGORY, ...category})


export const getVideos=()=>({type:ON_GET_VIDEOS})
