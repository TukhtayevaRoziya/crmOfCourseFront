import React, { useState } from 'react'

import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import { AiOutlinePrinter } from 'react-icons/ai'

import styles from './Pagination.module.css'

const PaginationBlock = () => {
  return (
    <div className={styles.tbody}>
      <div className={styles.tbody__student}>
        <img
          src="https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <h2>Name and Surname</h2>
      </div>
      <h3>ID:1234232423</h3>
      <div className={styles.tbody__class}>
        <img
          src="https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div>
          <h4>Class</h4>
          <h5>VII 3</h5>
        </div>
      </div>
      <h6>$ 50,036</h6>
      <AiOutlinePrinter />
    </div>
  )
}

const MyPagination = () => {
  const [current, setCurrent] = useState(3)

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page)
    setCurrent(page)
  }

  return (
    <>
      <PaginationBlock />
      <Pagination current={current} onChange={onChange} total={50} />
    </>
  )
}

export default MyPagination
