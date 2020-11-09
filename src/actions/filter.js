import { FILTERS_ENDPOINT } from '../consts'

// Actions
const REQUEST = 'FETCH_FILTER_LIST_REQUEST'
const SUCCESS = 'FETCH_FILTER_LIST_SUCCESS'
const FAILED = 'FETCH_FILTER_LIST_FAILED'
const SET_TEXT_FILTER = 'SET_TEXT_FILTER'
const SET_FILTER = 'SET_FILTER'

// Action Creators
export const fetchFilterListRequest = () => ({ type: REQUEST })
export const fetchFilterListSuccess = (payload) => ({ type: SUCCESS, payload })
export const fetchFilterListFailed = (payload) => ({ type: FAILED, payload })
export const setTextFilter = (payload) => ({ type: SET_TEXT_FILTER, payload })
export const setFilter = (payload) => ({ type: SET_FILTER, payload })

export const fetchFiltersList = () => (dispatch, getState) => {
  if (getState()?.filters) return
  dispatch(fetchFilterListRequest())
  fetch(FILTERS_ENDPOINT)
    .then(response => response.json()
      .then(({ filters }) => dispatch(fetchFilterListSuccess(filters))))
    .catch(error => dispatch(fetchFilterListFailed(error)))
}
