import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import { setComponentSize, setLocale } from '../slices/setting'
import { logout } from '../slices/auth'
import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import Logo from '../../assets/redSpotify.png'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const { Header } = Layout

const HeaderComponent = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const setLanguage = (language) => {
    i18n.changeLanguage(language)
    dispatch(setLocale(language === 'pt_BR' ? 'pt-br' : language))
  }

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
              title={t('Components Size')}
            >
              <Menu.ItemGroup title={t('Choose')}>
                <Menu.Item
                  key="componentSize:1"
                  onClick={() => dispatch(setComponentSize('small'))}
                >
                  {t('Small')}
                </Menu.Item>
                <Menu.Item
                  key="componentSize:2"
                  onClick={() => dispatch(setComponentSize('medium'))}
                >
                  {t('Medium')}
                </Menu.Item>
                <Menu.Item
                  key="componentSize:3"
                  onClick={() => dispatch(setComponentSize('large'))}
                >
                  {t('Large')}
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="locale" icon={<DownOutlined />} title={t('Language')}>
              <Menu.ItemGroup title="Choose">
                <Menu.Item
                  key="language:1"
                  onClick={() => setLanguage('pt_BR')}
                >
                  Portuguese
                </Menu.Item>
                <Menu.Item
                  key="language:2"
                  onClick={() => setLanguage('en_US')}
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
              {t('Logout')}
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
