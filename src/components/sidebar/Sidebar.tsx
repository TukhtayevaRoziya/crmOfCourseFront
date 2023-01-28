import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { InitialStateObjType } from '../../redux/reducers/sidebarReducer'
import RightAdminNavbar from '../rightAdminNavbar/RightAdminNavbar'
import Settings from './../settings/Settings';
import Home from './../home/Home'

import styles from './Sidebar.module.css'
import AllStudents from '../students/AllStudents'

const { Header, Content, Sider } = Layout

const Sidebar: React.FC = () => {
  const data = useSelector((state: any) => state.sidebarReducer)
  const win = window.location.hash

  const dataMap = data.map((d: InitialStateObjType) => ({
    key: String(d.id),
    icon: React.createElement(d.icon),
    label: <NavLink to={'/dashboard/' + d.path}>{d.label}</NavLink>,
  }))

  return (
    <Layout  className={styles.mainWrap}>
      <Sider
      style={{grid: 'n1'}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type)
          if (collapsed) {
            document.getElementById('main')?.classList.remove('dark')
          } else {
            document.getElementById('main')?.classList.add('dark')
          }
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
          defaultSelectedKeys={[
            win === '#/dashboard/students/:id'
              ? '2'
              : win === '#/dashboard/teachers/*'
              ? '3'
              : win === '#/dashboard/events/*'
              ? '4'
              : win === '#/dashboard/settings/*'
              ? '5'
              : '1',
          ]}
          items={dataMap}
        />
      </Sider>
      <Layout style={{gridArea:'c', width:'calc(100% - 1px)'}}>
        <div >
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, width: 'calc(100% - 1px)' }}
        >
          <h1 className={styles.title}>Dashboard</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background "
            id="main"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/students/*" element={<AllStudents/>} />
            </Routes>
          </div>
        </Content>
        </div>
      </Layout>
        <RightAdminNavbar />
    </Layout>
  )
}

export default Sidebar
