import React, { useEffect } from 'react'
import { Col, DatePicker, Input, Row, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'
import Error from './Error'
import _deburr from 'lodash/deburr'
import styled from 'styled-components'
import { fetchFilters, setFilter, setTextFilter } from '../slices/filter'
const { Option } = Select
const { Search } = Input

const MAX_OFFSET = 1000

const Filter = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFilters())
  }, [])
  const { loading, error, filters, values: currentValues, text } = useSelector(state => state.filter)
  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <Container>
      <Row gutter={[16, 16]}>
        {filters?.map?.(({ id, name, values, validation }) => {
          if (id === 'locale' || id === 'country') {
            return (
              <Col span={8} key={id}>
                <Select
                  style={{ width: '100%' }}
                  value={currentValues?.values?.[id]}
                  showSearch
                  placeholder={name}
                  filterOption={(input, option) =>
                    _deburr(option.children)
                      ?.toLowerCase()
                      .indexOf(_deburr(input)?.toLowerCase()) >= 0
                  }
                  defaultValue={values?.[0]?.value}
                  onChange={(value) => dispatch(setFilter({ [id]: value }))}
                >
                  {values?.map(({ value, name }) => (
                    <Option key={value} value={value}>
                      {name}
                    </Option>
                  ))}
                </Select>
              </Col>
            )
          }
          if (id === 'timestamp') {
            return (
              <Col span={8} key={id}>
                <DatePicker
                  style={{ width: '100%' }}
                  showTime
                  value={currentValues?.[id]}
                  onChange={(value) => dispatch(setFilter({ [id]: value }))}
                />
              </Col>
            )
          }
          if (id === 'limit') {
            return (
              <Col span={12} key={id}>
                <Select
                  style={{ width: '100%' }}
                  value={currentValues?.[id]}
                  showSearch
                  placeholder="Limit"
                  onChange={(value) => dispatch(setFilter({ [id]: value }))}
                >
                  {Array(validation?.max)
                    .fill()
                    .map((_, index) => index)
                    .filter((number) => number % 5 === 0 && number)
                    .map((value) => (
                      <Option key={value} value={value}>
                        {value}
                      </Option>
                    ))}
                </Select>
              </Col>
            )
          }
          if (id === 'offset') {
            return (
              <Col span={12} key={id}>
                <Select
                  style={{ width: '100%' }}
                  value={currentValues?.[id]}
                  placeholder="Offset"
                  showSearch
                  onChange={(value) => dispatch(setFilter({ [id]: value }))}
                >
                  {Array(MAX_OFFSET)
                    .fill()
                    .map((_, index) => index)
                    .filter((number) => number % 50 === 0)
                    .map((value) => (
                      <Option key={value} value={value}>
                        {value}
                      </Option>
                    ))}
                </Select>
              </Col>
            )
          }
        })}
      </Row>
      <Row>
        <Col span={24}>
          <Search
            value={text}
            placeholder="Filter playlist name by text"
            onChange={(event) => dispatch(setTextFilter(event?.target?.value))}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Filter

const Container = styled.div`
  margin: 20px 0;
`
