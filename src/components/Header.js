import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import { setComponentSize, setLocale } from '../slices/setting'
import { logout } from '../slices/auth'
import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import Logo from '../../assets/redSpotify.png'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

const { Header } = Layout

const HeaderComponent = () => {
  const dispatch = useDispatch()
  const locale = useSelector((state) => state?.setting?.locale?.locale)
  return (
    <Header>
      <Row justify="center">
        <StyledCol xs={24} lg={13}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="logo">
              <img src={Logo} width="24" />
            </Menu.Item>
            <SubMenu
              key="componentSize"
              icon={<DownOutlined />}
              title={
                locale === 'pt-br'
                  ? 'Tamanho dos componentes'
                  : 'Components Size'
              }
            >
              <Menu.ItemGroup title="Choose">
                <Menu.Item
                  key="componentSize:1"
                  onClick={() => dispatch(setComponentSize('small'))}
                >
                  {locale === 'pt-br' ? 'Pequeno' : 'Small'}
                </Menu.Item>
                <Menu.Item
                  key="componentSize:2"
                  onClick={() => dispatch(setComponentSize('medium'))}
                >
                  {locale === 'pt-br' ? 'Medio' : 'Medium'}
                </Menu.Item>
                <Menu.Item
                  key="componentSize:3"
                  onClick={() => dispatch(setComponentSize('large'))}
                >
                  {locale === 'pt-br' ? 'Grande' : 'Large'}
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="locale"
              icon={<DownOutlined />}
              title={locale === 'pt-br' ? 'Idioma' : 'Language'}
            >
              <Menu.ItemGroup title="Choose">
                <Menu.Item
                  key="language:1"
                  onClick={() => dispatch(setLocale('pt-br'))}
                >
                  Portuguese
                </Menu.Item>
                <Menu.Item
                  key="language:2"
                  onClick={() => dispatch(setLocale('en_US'))}
                >
                  English
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item
              key="logout"
              onClick={() => dispatch(logout())}
              icon={<LogoutOutlined />}
              style={{ marginLeft: 'auto' }}
            >
              {locale === 'pt-br' ? 'Sair' : 'Logout'}
            </Menu.Item>
          </Menu>
        </StyledCol>
      </Row>
    </Header>
  )
}

export default HeaderComponent

const StyledCol = styled(Col)`
  ul {
    display: flex;
  }
`
