// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from '../slices'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import mockStore from '../components/__mocks__/store'

function render (
  ui,
  {
    initialState = mockStore,
    store = createStore(combineReducers(reducer), initialState, compose(applyMiddleware(thunk))),
    ...renderOptions
  } = {}
) {
  function Wrapper ({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
