import React from 'react'
import MyPagination from './Pagination'
import styles from './UnPainStudents.module.css'

const UnPainStudents = () => {
  return (
    <div className={styles.body}>
      <h1>Unpaid Student Intuition</h1>
      <MyPagination />
    </div>
  )
}

export default UnPainStudents

