import { SET_RECOMMEND, GET_RECOMMEND, REMOVE_RECOMMEND } from "./types"

export const setRecommend = (recommend) => {
  return {
    type: SET_RECOMMEND,
    recommend,
  }
}

export const removeRecommend = () => {
  return {
    type: REMOVE_RECOMMEND
  }
}

export const getRecommend = () => {
  return {
    type: GET_RECOMMEND
  }
}