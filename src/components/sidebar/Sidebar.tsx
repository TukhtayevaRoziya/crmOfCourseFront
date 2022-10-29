import React from 'react'

import { Layout, Menu } from 'antd'

import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { InitialStateObjType } from '../../redux/reducers/sidebarReducer'

const { Header, Content, Sider } = Layout

const Sidebar: React.FC = () => {
  const data = useSelector((state: any) => state.sidebarReducer)
  console.log(data)

  const dataMap = data.map((d: InitialStateObjType) => ({
    key: String(d.id),
    icon: React.createElement(d.icon),
    label: <NavLink to={'/dashboard/#/' + d.path}>{d.label}</NavLink>,
  }))

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo">
          <h1 className={styles.logo}>
            <span>A</span>
            Akademi
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={dataMap}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <h1 className={styles.title}>Dashboard</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Sidebar
