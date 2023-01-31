import React, { useEffect, useState } from 'react'

import api from '../../utility/api';
import styles from './Settings.module.css'

type AdminData = {
  data:{
    name: string
    surname: string
    image: string
  }
}

const Settings = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    api.get('/').then((res:AdminData)=>{
      console.log(res.data)
    })
  }, []);
  return (
    <div className={styles.body}>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Settings
