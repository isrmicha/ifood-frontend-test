import React from 'react'
import { Menu, Layout, Row, Col, Tooltip } from 'antd'
import { setComponentSize, setLocale } from '../slices/setting'
import { logout } from '../slices/auth'
import {
  DownOutlined,
  LineOutlined,
  LogoutOutlined,
  MenuOutlined,
  PauseOutlined
} from '@ant-design/icons'
import Logo from '../../assets/redSpotify.png'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import SubMenu from 'antd/lib/menu/SubMenu'

const { Header } = Layout

const HeaderComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const setLanguage = (language) => {
    i18n.changeLanguage(language)
    dispatch(setLocale(language === 'pt_BR' ? 'pt-br' : language))
  }

  return (
    <Container isMobile={isMobile}>
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
                    <span>🇧🇷{!isMobile && ' Portuguese'}</span>
                  </Tooltip>
                }
              />
              <Menu.SubMenu
                onTitleClick={() => setLanguage('en_US')}
                title={
                  <Tooltip title={t('Set language')}>
                    <span>🇺🇸{!isMobile && ' English'}</span>
                  </Tooltip>
                }
              />
              {isMobile ? (
                <SubMenu
                  key="componentSize"
                  icon={<DownOutlined />}
                  title={t('Size')}
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
              ) : (
                <>
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
                </>
              )}

              <Menu.Item
                key="logout"
                onClick={() => dispatch(logout())}
                icon={<LogoutOutlined />}
                style={{ marginLeft: 'auto' }}
              >
                {!isMobile && t('Logout')}
              </Menu.Item>
            </Menu>
          </StyledCol>
        </Row>
      </Header>
    </Container>
  )
}

export default HeaderComponent

const StyledCol = styled(Col)`
  ul {
    display: flex;
  }
`
const Container = styled.div`
  ${({ isMobile }) =>
    isMobile &&
    `
      .ant-layout-header {
        padding: unset;
      }
      .ant-menu-submenu {
        padding: 0 10px !important;
      }
`}
`
