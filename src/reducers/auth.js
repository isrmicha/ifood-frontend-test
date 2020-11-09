const initialState = { token: null, refreshToken: null }

const reducer = (state = initialState, { type, payload }) => ({
  SET_AUTH_TOKEN: payload,
  LOGOUT: initialState
})[type] || state

export default reducer
