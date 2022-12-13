import React, {FC} from 'react'
import { Dropdown } from 'antd'
import { IoIosSettings } from 'react-icons/io'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RightAdminNavbar_Icons__PropsType } from '../../utility/types'
import type { MenuProps } from 'antd'

import styles from './RightAdminNavbar.module.css'

const RightAdminNavbarIcons:FC<RightAdminNavbar_Icons__PropsType> = (data: RightAdminNavbar_Icons__PropsType) => {
  const items2: MenuProps['items'] = [
    {
      key: '1',
      label: <p>You have no unread notifications</p>,
    },
  ]

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p>
          Signed in as
          <strong>
            {data.name} {data.surname}
          </strong>
        </p>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ]

  return (
    <div>
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
