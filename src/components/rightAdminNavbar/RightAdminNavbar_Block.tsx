import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../utility/api'
import styles from './RightAdminNavbarBlock.module.css'

const RightAdminNavbarBlock = () => {
  const [data, setData] = useState(234)

  useEffect(() => {
    api.get('recent_students').then((res: any) => {
      setData(res.data.count)      
    })
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <div className={styles.title_text}>
          <h1>Recent Students</h1>
          <p>
            You have <strong> {data} </strong> students
          </p>
        </div>
        <NavLink to={'students'}>+</NavLink>
      </div>
    </div>
  )
}

export default RightAdminNavbarBlock
