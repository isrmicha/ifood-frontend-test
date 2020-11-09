import React, { useEffect } from 'react'
import { Col, DatePicker, Input, Row, Select } from 'antd'
import { connect } from 'react-redux'
import { fetchFiltersList, setFilter, setTextFilter } from '../actions/filter'
import Loading from './Loading'
import Error from './Error'
import _deburr from 'lodash/deburr'
import styled from 'styled-components'
const { Option } = Select
const { Search } = Input
const MAX_OFFSET = 1000
export const Filter = ({ filter, setFilter, setTextFilter, fetchFiltersList }) => {
  useEffect(() => {
    fetchFiltersList()
  }, [])

  if (filter?.loading) return <Loading />
  if (filter?.error) return <Error />

  return (
    <Container>
      <Row gutter={[16, 16]}>
        {filter?.filtersList?.map(({ id, name, values, validation }) => {
          if (id === 'locale' || id === 'country') {
            return (
              <Col span={8} key={id}>
                <Select
                  style={{ width: '100%' }}
                  value={filter?.values?.[id]}
                  showSearch
                  placeholder={name}
                  filterOption={(input, option) =>
                    _deburr(option.children)
                      ?.toLowerCase()
                      .indexOf(_deburr(input)?.toLowerCase()) >= 0
                  }
                  defaultValue={values?.[0]?.value}
                  onChange={(value) => setFilter({ [id]: value })}
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
                  value={filter?.values?.[id]}
                  onChange={(value) => setFilter({ [id]: value })}
                />
              </Col>
            )
          }
          if (id === 'limit') {
            return (
              <Col span={12} key={id}>
                <Select
                  style={{ width: '100%' }}
                  value={filter?.values?.[id]}
                  showSearch
                  placeholder="Limit"
                  onChange={(value) => setFilter({ [id]: value })}
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
                  value={filter?.values?.[id]}
                  placeholder="Offset"
                  showSearch
                  onChange={(value) => setFilter({ [id]: value })}
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
            value={filter?.value}
            placeholder="Filter playlist name by text"
            onChange={(event) => setTextFilter(event?.target?.value)}
          />
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = ({ filter }) => ({ filter })

export default connect(mapStateToProps, {
  setFilter,
  fetchFiltersList,
  setTextFilter
})(Filter)

const Container = styled.div`
  margin: 20px 0;
`
