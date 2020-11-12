import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import Home from './Home'
import { setAuthToken } from '../slices/auth'
import 'antd/dist/antd.css'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (window?.location?.search) dispatch(setAuthToken())
    window.history.replaceState(null, null, window.location.pathname)
  }, [])
  const authToken = useSelector(state => state?.auth?.token)
  if (!authToken) return <Login />
  return <Home />
}

export default Main
