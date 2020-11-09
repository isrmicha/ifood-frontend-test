import React from 'react'
import { render } from '@testing-library/react'
import { Playlists } from '../Playlists'
import storeMock from '../__mocks__/store'

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

const fetchFeaturedPlaylists = jest.fn()

test('filter should render loading', async () => {
  const { container } = render(<Playlists fetchFeaturedPlaylists={fetchFeaturedPlaylists} playlist={{ loading: true }}/>)
  expect(container.querySelector('.ant-skeleton-paragraph')).toBeTruthy()
})
test('filter should render properly', async () => {
  const { container } = render(<Playlists fetchFeaturedPlaylists={fetchFeaturedPlaylists} {...storeMock}/>)
  expect(container.querySelector('[class*="Playlists__Container"]')).toBeTruthy()
})
test('filter should render properly Hora de Dormir playlist', async () => {
  const { getByText } = render(<Playlists fetchFeaturedPlaylists={fetchFeaturedPlaylists} {...storeMock}/>)
  expect(getByText('Hora de Dormir')).toBeTruthy()
})
