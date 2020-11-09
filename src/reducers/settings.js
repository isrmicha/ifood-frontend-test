const initialState = {
  componentSize: 'large', locale: 'enUS'
}

const reducer = (state = initialState, { type, payload }) => ({
  SET_SIZE: { componentSize: payload }
})[type] || state

export default reducer
