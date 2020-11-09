import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import 'antd/dist/antd.css'
import Home from './Home'
import { setToken } from '../actions/auth'

const Main = ({ auth, setToken }) => {
  useEffect(() => {
    if (window?.location?.search) setToken()
    window.history.replaceState(null, null, window.location.pathname)
  }, [])

  if (!auth?.token) return <Login />
  return <Home />
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps, { setToken })(Main)
