const initialState = {
  loading: false,
  error: false,
  values: {
    country: 'BR',
    locale: 'pt_BR'
  }
}

const reducer = (state = initialState, { type, payload }) => ({
  FETCH_FILTER_LIST_SUCCESS: { ...state, filtersList: payload, loading: false },
  FETCH_FILTER_LIST_REQUEST: { ...state, loading: true },
  FETCH_FILTER_LIST_FAILED: { ...state, error: payload, loading: false },
  SET_FILTER: { ...state, values: { ...state?.values, ...payload } },
  SET_TEXT_FILTER: { ...state, text: payload }

})[type] || state

export default reducer
