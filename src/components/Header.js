import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { setSize } from '../actions/settings'
import { logout } from '../actions/auth'
import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import Logo from '../../assets/redSpotify.png'
import styled from 'styled-components'

const { Header } = Layout
const HeaderComponent = ({ setSize, logout }) => {
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
                <Menu.Item key="setting:1" onClick={() => setSize('small')}>
                  Small
                </Menu.Item>
                <Menu.Item key="setting:2" onClick={() => setSize('medium')}>
                  Medium
                </Menu.Item>
                <Menu.Item key="setting:3" onClick={() => setSize('large')}>
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

const mapStateToProps = ({ settings }) => ({ settings })

export default connect(mapStateToProps, { setSize, logout })(HeaderComponent)

const StyledCol = styled(Col)`
    ul {
        display: flex;
    }
`
