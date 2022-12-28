import React, {FC} from 'react'
import { useDispatch } from 'react-redux'
import { Dropdown, MenuProps } from 'antd'
import { NavLink } from 'react-router-dom';
import { IoIosSettings, IoMdNotificationsOutline, IoIosLogOut } from 'react-icons/io'

import { logout } from '../../redux/actions/authAction'
import { RightAdminNavbar_Icons__PropsType } from '../../utility/types'

import styles from './RightAdminNavbar.module.css'

const RightAdminNavbarIcons:FC<RightAdminNavbar_Icons__PropsType> = (data: any) => {
  const items2: MenuProps['items'] = [
    {
      key: '1',
      label: <p>You have no unread notifications</p>,
    },
  ]

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch<any>(logout());
    localStorage.removeItem("token");
  }  

  const items: MenuProps['items'] = [
    {
      key: '1',
      className:'RightAdminNavbarIcons1',
      label: (
        <p>
          Signed in as
          <br/>
          <strong>
            {data.data.name} {data.data.surname}
          </strong>
        </p>
      ),
    },
    {
      key: '2',
      
      label: (
        <NavLink
          to="settings"
        >
          Settings
        </NavLink>
      ),
    },
    {
      key: '3',
      className:'RightAdminNavbarIcons3',

      label: (
        <div
          onClick={logoutHandler}
        >
          Logout <IoIosLogOut />
        </div>
      ),
    },
  ]

  return (
    <div className={styles.wrap}>
        <div className={styles.header__icons + ' ' + styles.header__icons1}>
          <Dropdown menu={{ items: items2 }} placement="bottom">
            <IoMdNotificationsOutline />
          </Dropdown>
        </div>
        <div className={styles.header__icons}>
          <Dropdown menu={{ items }} placement="bottom">
            <IoIosSettings />
          </Dropdown>
        </div>
    </div>
  )
}

export default RightAdminNavbarIcons
