import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import { setComponentSize } from '../slices/setting'
import { logout } from '../slices/auth'
import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import Logo from '../../assets/redSpotify.png'
import styled from 'styled-components'

const { Header } = Layout

const HeaderComponent = () => {
  return (
    <Header>
      <Row justify="center">
        <StyledCol xs={24} lg={13}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="logo">
              <img src={Logo} width="24" />
            </Menu.Item>
            <SubMenu
              key="SubMenu"
              icon={<DownOutlined />}
              title="Components Size"
            >
              <Menu.ItemGroup title="Choose">
                <Menu.Item key="setting:1" onClick={() => setComponentSize('small')}>
                  Small
                </Menu.Item>
                <Menu.Item key="setting:2" onClick={() => setComponentSize('medium')}>
                  Medium
                </Menu.Item>
                <Menu.Item key="setting:3" onClick={() => setComponentSize('large')}>
                  Large
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
  <Menu.Item key="logout" onClick={logout} icon={<LogoutOutlined />} style={{ marginLeft: 'auto' }}>
              Logout
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
