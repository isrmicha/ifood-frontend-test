import React from 'react'
import { Menu, Layout, Row, Col, Tooltip } from 'antd'
import { setComponentSize, setLocale } from '../slices/setting'
import { logout } from '../slices/auth'
import {
  LineOutlined,
  LogoutOutlined,
  MenuOutlined,
  PauseOutlined
} from '@ant-design/icons'
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
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="logo">
              <img src={Logo} width="24" />
            </Menu.Item>
            <Menu.SubMenu
              onTitleClick={() => setLanguage('pt_BR')}
              title={
                <Tooltip title={t('Set language')}>
                  <span>🇧🇷 Portuguese</span>
                </Tooltip>
              }
            />
            <Menu.SubMenu
              onTitleClick={() => setLanguage('en_US')}
              title={
                <Tooltip title={t('Set language')}>
                  <span>🇺🇸 English</span>
                </Tooltip>
              }
            />
            <Menu.SubMenu
              onTitleClick={() => dispatch(setComponentSize('small'))}
              title={
                <Tooltip title={t('Set component size')}>
                  <LineOutlined />
                </Tooltip>
              }
            />
            <Menu.SubMenu
              onTitleClick={() => dispatch(setComponentSize('medium'))}
              title={
                <Tooltip title={t('Set component size')}>
                  <PauseOutlined rotate={90} />
                </Tooltip>
              }
            />
            <Menu.SubMenu
              onTitleClick={() => dispatch(setComponentSize('large'))}
              title={
                <Tooltip title={t('Set component size')}>
                  <MenuOutlined />
                </Tooltip>
              }
            />

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
