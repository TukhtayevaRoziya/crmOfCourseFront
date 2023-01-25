import React, { useState, forwardRef, useRef } from 'react'

import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'

import styles from './Pagination.module.css'

const MyPagination = () => {
  const pageSize = 5
  const [current, setCurrent] = useState(3)
  const [minIndex, setMinIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(pageSize)
  const ref = useRef<HTMLDivElement>(null)

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page)
    setMinIndex((page - 1) * pageSize)
    setMaxIndex(page * pageSize)
  }

  const data = [
    {
      id: 1,
      fullName: '33333333333333 and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 2,
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 3,
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 4,
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 5,
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 6,
      fullName: 'Name and Surname',
      class: 'VII 3',
      amount: '$ 50,036',
    },
    {
      id: 7,
      fullName: 'Name and Surname',
      class: 'VII 3333333333',
      amount: '$ 50,036',
    },
  ]

  type PrintType = {
    data: { id: number; fullName: string; class: string; amount: string }
  }

  const ComponentToPrint = forwardRef((props: PrintType, ref: any) => {
    return (
      <div ref={ref} className={styles.print_body}>
        <h1>Name Academy</h1>
        <div>
          <h2>Name: </h2>
        </div>
      </div>
    )
  })
  const dataMap = data.map(
    (d, index) =>
      index >= minIndex &&
      index < maxIndex && (
        <div className={styles.tbody} key={index}>
          <div className={styles.tbody__student}>
            <h1>{++index}.</h1>
            <h2>
              {window.innerWidth <= 800
                ? d.fullName.split(' ', 1).toString().slice(0, 6) ===
                  d.fullName.split(' ', 1).toString()
                  ? d.fullName.split(' ', 1).toString()
                  : d.fullName.split(' ', 1).toString().slice(0, 6) + '...'
                : window.innerWidth <= 1400
                ? d.fullName.length > 15
                  ? d.fullName.slice(0, 14) + '...'
                  : d.fullName
                : d.fullName.length > 18
                ? d.fullName.slice(0, 17) + '...'
                : d.fullName}
            </h2>
          </div>
          <h3>ID:{d.id.toString().length > 8}</h3>
          <div className={styles.tbody__class}>
            <div>
              <h4>Class</h4>
              <h5>{d.class}</h5>
            </div>
          </div>
          <h6>{d.amount}</h6>
          <div>
            {/* @ts-ignore */}
            <ReactToPrint content={() => ref.current}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <AiOutlinePrinter onClick={handlePrint}></AiOutlinePrinter>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
            <div style={{ display: 'none' }}>
              {/* // eslint-disable-next-line no-sequences, no-sequences */}
              <ComponentToPrint ref={ref} data={d} />
            </div>
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
