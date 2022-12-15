import React, { useEffect, useState } from 'react'



import api from '../../utility/api'
import RightAdminNavbarIcons from './RightAdminNavbar_Icons'

import styles from './RightAdminNavbar.module.css'

const RightAdminNavbar = () => {
  const [data, setData] = useState({
    email: 'test@gmail.com',
    name: 'Nabila',
    password: '1234567',
    surname: 'Abbey',
    _id: 1,
    image:
      'https://www.kindpng.com/picc/m/247-2472302_admin-transparent-background-admin-icon-hd-png-download.png',
  })


  useEffect(() => {
    api.get('/').then((res: any) => {
      setData(res.data[0])
    })
  }, [])
  console.log({data}.data._id)

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        {/* @ts-ignore */}
        <RightAdminNavbarIcons data={data} />
        <div className={styles.header__adminInfo}>
          <h1>
            {data.name} {data.surname[0]}.
          </h1>
          <p>Admin</p>
        </div>
        <img className={styles.header__img} src={data.image} alt="" />
      </div>
    </div>
  )
}

export default RightAdminNavbar
