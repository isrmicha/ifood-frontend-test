import React from 'react'
import { render } from '@testing-library/react'
import { Filter } from '../Filter'
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
const fetchFiltersList = jest.fn()

test('filter should render loading', async () => {
  const { container } = render(<Filter fetchFiltersList={fetchFiltersList} filter={{ loading: true }}/>)
  expect(container.querySelector('.ant-skeleton-paragraph')).toBeTruthy()
})
test('filter should render properly', async () => {
  const { container } = render(<Filter fetchFiltersList={fetchFiltersList} {...storeMock}/>)
  expect(container.querySelector('[class*="Filter__Container"]')).toBeTruthy()
})
test('filter should render properly Brasil on filter', async () => {
  const { getByText } = render(<Filter fetchFiltersList={fetchFiltersList} {...storeMock}/>)
  expect(getByText('Brasil')).toBeTruthy()
})
