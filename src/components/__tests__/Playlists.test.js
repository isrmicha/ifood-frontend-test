import React from 'react'
import { useSelector } from 'react-redux'
import { render } from '../../utils/test-utils'
import Playlists from '../Playlists'
import mockStore from '../__mocks__/store'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

describe('Playlist', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockStore)
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })
  test('playlist should render properly', async () => {
    const { container } = render(<Playlists />)
    expect(container.querySelector('[class*="Playlists__Container"]')).toBeTruthy()
  })
  test('playlist should render properly Hora de Dormir playlist', async () => {
    const { getByText } = render(<Playlists />)
    expect(getByText('Hora de Dormir')).toBeTruthy()
  })
  test('playlist should render loading', async () => {
    useSelector.mockImplementation(callback => {
      return callback(Object.assign(mockStore, { playlist: { loading: true } }))
    })
    const { container } = render(<Playlists />)
    expect(container.querySelector('.ant-skeleton-paragraph')).toBeTruthy()
  })
})
