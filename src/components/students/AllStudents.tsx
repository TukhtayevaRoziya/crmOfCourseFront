import React, { useEffect, useState } from 'react'

import api from '../../utility/api'
import { StudentType } from '../home/unPaidStudents/Pagination'

import styles from './Students.module.css'

const AllStudents = () => {
  const [data, setData] = useState<StudentType | any>([])
  const [data2, setData2] = useState<StudentType | any>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.get('/students').then((res) => {
      setData(res.data)
      setData2(res.data)
    })
  }, [])

  const onClick = () => {
    if (search) {
      const myData: StudentType[] = []
      data2.filter((item: StudentType) =>
        String(item.id).includes(search) ? myData.push(item) : null,
      )
      setData(myData)
    } else setData(data2)
  }

  const dataMap = data.map((d: StudentType, index: number) => (
    <div key={d.id} className={styles.dataWrap}>
      <strong>{d.id}.</strong>
      <h1>{d.fullName}</h1>
      <h2>{d.id}</h2>
      <h3>{d.class}</h3>
      <h4>{d.amount}</h4>
      {!d.payment ? (
        <button className={styles.noPaid}>NoPaid</button>
      ) : (
        <button className={styles.paid}>Paid</button>
      )}
    </div>
  ))

  return (
    <div className={styles.wrap}>
      <form className={styles.search}>
        <input
          type={'search'}
          placeholder="Search Student..."
          enterKeyHint='enter'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value)
            if (search) {
              const myData: StudentType[] = []
              data2.filter((item: StudentType) =>
                String(item.id).includes(e.target.value) ? myData.push(item) : null,
              )
              setData(myData)
            } else setData(data2)
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          }}

          // onAuxClick={onClick}
        />
        <button onClick={onClick}>Search</button>
      </form>
      <div className={styles.tableTH}>
        <strong>NO</strong>
        <h1>Fullname</h1>
        <h2>ID</h2>
        <h3>Class</h3>
        <h4>Amount</h4>
        <h5>Payment</h5>
      </div>
      {dataMap}
    </div>
  )
}

export default AllStudents
