import React from 'react'

import Calendar from './Calendar';
import ChartBar from './ChartBar';

import styles from './SecondBlock.module.css'

const SecondBlock = () => {
  return (
    <div className={styles.body}>
      <div className={styles.block}>
        <Calendar />
      </div>
      <div className={styles.block2}><ChartBar/></div>
    </div>
  )
}

export default SecondBlock
