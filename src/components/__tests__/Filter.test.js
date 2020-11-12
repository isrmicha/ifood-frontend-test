import React from 'react'
import { useSelector } from 'react-redux'
import { render } from '../../utils/test-utils'
import Filter from '../Filter'
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

describe('Filter', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockStore)
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })
  test('filter should render properly', async () => {
    const { container } = render(<Filter />)
    expect(container.querySelector('[class*="Filter__Container"]')).toBeTruthy()
  })
  test('filter should render properly Australia on filter', async () => {
    const { getByText } = render(<Filter />)
    expect(getByText('Australia')).toBeTruthy()
  })
  test('filter should render loading', async () => {
    useSelector.mockImplementation(callback => {
      return callback(Object.assign(mockStore, { filter: { loading: true } }))
    })
    const { container } = render(<Filter />)
    expect(container.querySelector('.ant-skeleton-paragraph')).toBeTruthy()
  })
})
