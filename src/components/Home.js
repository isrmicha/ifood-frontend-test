import React, { Suspense } from 'react'
import Loading from './Loading'
import { Col, Layout, Row } from 'antd'
import Header from './Header'
const { Content, Footer } = Layout
const Filter = React.lazy(() =>
  import(/* webpackChunkName: "Filter" */ './Filter')
)
const Playlists = React.lazy(() =>
  import(/* webpackChunkName: "Playlists" */ './Playlists')
)

const Home = () => (
  <Layout style={{ height: '100%', overflow: 'auto' }}>
    <Header />
    <Content style={{ padding: '0 10px' }}>
      <Row justify="center">
        <Col xs={24} lg={12}>
          <Suspense fallback={<Loading />}>
            <Filter />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Playlists />
          </Suspense>
        </Col>
      </Row>
    <Footer style={{ textAlign: 'center', width: '100%', position: 'fixed', bottom: 0 }}>
      Spotifood ©{new Date().getFullYear()} Created by {' '}
      <a href="https://www.linkedin.com/in/israel-neves-micha-a78504118/" rel="noreferrer" target="_blank">
        Israel Neves Micha
      </a>
    </Footer>
    </Content>
  </Layout>
)

export default Home
