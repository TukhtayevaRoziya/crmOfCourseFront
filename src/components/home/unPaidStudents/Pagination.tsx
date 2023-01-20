import React, { useState } from 'react'

import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

import styles from './Pagination.module.css'

const MyPagination = () => {
  const pageSize = 5
  const [current, setCurrent] = useState(3)
  const [minIndex, setMinIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(pageSize)

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page)
    setCurrent(page)
      setMinIndex((page - 1) * pageSize)
      setMaxIndex(page * pageSize)
    
  }

  const data = [
    {
      id: 1,
      img:
        'https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj',
      fullName: '3333333333333Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 2,
      img:
        'https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj',
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 3,
      img:
        'https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj',
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 4,
      img:
        'https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj',
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 5,
      img:
        'https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj',
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 6,
      img:
        'https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj',
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 7,
      img:
        'https://yt3.ggpht.com/VxCj3vvhudWs3ovMJXHbka3W05aSxFbBCbXZwpZ_WMVjNOy0D8pZLG5OGyRek_uAgKRQW4eE=s900-c-k-c0x00ffffff-no-rj',
      fullName: 'Name and Surname',
      class: 'VII 3333333333',
      amount: '$ 50,036',
    },
  ]

  const dataMap = data.map(
    (d, index) =>
      index >= minIndex &&
      index < maxIndex && (
        <div className={styles.tbody} key={d.id}>
          <div className={styles.tbody__student}>
            <img src={d.img} alt="" />
            <h2>{d.fullName}</h2>
          </div>
          <h3>ID:{d.id}</h3>
          <div className={styles.tbody__class}>
            <div>
              <h4>Class</h4>
              <h5>{d.class}</h5>
            </div>
          </div>
          <h6>{d.amount}</h6>
          <div>
            <AiOutlinePrinter />
            <BsThreeDots />
          </div>
        </div>
      ),
  )

  return (
    <>
      {dataMap}
      {/* <PaginationBlock /> */}
      <Pagination
        current={current}
        onChange={onChange}
        total={data.length}
        pageSize={pageSize}
      />
    </>
  )
}

export default MyPagination
