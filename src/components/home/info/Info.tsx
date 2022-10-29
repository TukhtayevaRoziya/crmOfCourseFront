import React, { useEffect, useState } from 'react'

import { BsFillPersonFill } from 'react-icons/bs'
import { GiTeacher } from "react-icons/gi";

import api from '../../../utility/api'

import styles from './Info.module.css'

const Info = () => {
  type ResType = {
    id: number
    // logo: JSX.Element
    logo_color: string
    title: string
    text: number
  }

  const [data, setData] = useState([])

  useEffect(() => {
    api.get('info').then((res) => {
      setData(res.data)
      console.log(res.data); 
    })
  }, [])

  // const data = [
  //   {
  //     id: 1,
  //     logo: <BsFillPersonFill />,
  //     logo_color: '#4d44b5',
  //     title: 'Students',
  //     text: info.studentsNum,
  //   } as ResType, 
  //   {
  //     id: 2,
  //     logo: <GiTeacher />,
  //     logo_color: '#FB7D5B',

  //     title: 'Teachers',
  //     text: info.teachersNum,
  //   } as ResType, 
  //   {
  //     id: 3,
  //     logo: <GiTeacher />,
  //     logo_color: '#FCC43E',

  //     title: 'Events',
  //     text: info.eventsNum,
  //   } as ResType, 
  //   {
  //     id: 3,
  //     logo: <GiTeacher />,
  //     logo_color: '#FCC43E',

  //     title: 'Food',
  //     text: info.eventsNum,
  //   } as ResType, 
  // ]

  const dataMap = data.map((d: ResType) => {
    return (
      <div className={styles.block} key={d.id}>
        <div className={styles.block__icon} style={{
          background: d.logo_color
        }}>{d.id === 1 ? <BsFillPersonFill/> : d.id === 2 ? <GiTeacher/> : <GiTeacher/>}</div>
        <h1 className={styles.block__title}>{d.title}</h1>
        <h1 className={styles.block__text}>{d.text}</h1>
      </div>
    )
  })

  return <div className={styles.wrapper}>{dataMap}</div>
}

export default Info
