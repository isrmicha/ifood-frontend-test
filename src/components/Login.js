import React from 'react'
import styled from 'styled-components'
import { Button, Typography, Layout } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { LOGIN_URL } from '../consts'
import Logo from '../../assets/redSpotify.png'
import { useTranslation } from 'react-i18next'

const { Content } = Layout

const { Title } = Typography

const Login = () => {
  const { t } = useTranslation()

  return (
    <Layout style={{ height: '100%' }}>
      <Content style={{ padding: '0 10px' }}>
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
            {t('Login with Spotify')}
          </Button>
        </CenteredDiv>
      </Content>
    </Layout>
  )
}

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
