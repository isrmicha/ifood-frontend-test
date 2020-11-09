import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import store from './store'
import { ConfigProvider } from 'antd'
import Main from './components/Main'

const Index = () => (
  <Provider store={store}>
    <ConnectedConfigProvider>
      <Main />
    </ConnectedConfigProvider>
  </Provider>
)

const mapStateToProps = ({ settings }) => ({
  componentSize: settings?.componentSize,
  locale: settings?.locale
})

const ConnectedConfigProvider = connect(mapStateToProps)(ConfigProvider)

ReactDOM.render(<Index />, document.getElementById('app'))
