import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { LOGIN_URL } from '../consts'
import Logo from '../../assets/redSpotify.png'

const { Title } = Typography

const Login = () => (
  <CenteredDiv>
    <StyledImg src={Logo} />
    <Title>Spotifood</Title>
    <Button
      type="primary"
      shape="round"
      icon={<LoginOutlined />}
      size={'large'}
      href={LOGIN_URL}
    >
      Login with Spotify
    </Button>
  </CenteredDiv>
)

export default Login

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  fle
  width: 100;
  height: 100%;
  flex-direction: column;
  a.ant-btn-lg {
      line-height: unset;
  }
 `

const StyledImg = styled.img`
  width: 124px;
  margin-bottom: 40px;
`
