import React, { useState, forwardRef, useRef } from 'react'

import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'

import styles from './Pagination.module.css'
import { NavLink } from 'react-router-dom'

const MyPagination = () => {
  type PrintType = {
    id: number
    fullName: string
    class: string
    amount: string
  }
  const pageSize = 5
  const [current, setCurrent] = useState(1)
  const [minIndex, setMinIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(pageSize)
  const [value, setValue] = useState<PrintType>({
    id: 0,
    fullName: 'Undefined',
    class: 'undefined',
    amount: 'undefined',
  })

  const ref = useRef<HTMLDivElement>(null)

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page)
    setMinIndex((page - 1) * pageSize)
    setMaxIndex(page * pageSize)
  }

  const data = [
    {
      id: 1,
      fullName: 'Tukhtayeva Roziya',
      class: 'VII 3',
      amount: '$ 30,036',
    },
    {
      id: 2,
      fullName: 'Alex Alex',
      class: 'VII 4',
      amount: '$ 60,036',
    },
    {
      id: 3,
      fullName: 'John Surname',
      class: 'VII 8',
      amount: '$ 90,036',
    },
    {
      id: 4,
      fullName: 'Falonchiyev Falonchi',
      class: 'VII 1',
      amount: '$ 10,036',
    },
    {
      id: 5,
      fullName: 'Alejandro Martín',
      class: 'VII 9',
      amount: '$ 50,980',
    },
    {
      id: 6,
      fullName: 'Agnieszka Murdoch',
      class: 'VII 2',
      amount: '$ 57,036',
    },
    {
      id: 7,
      fullName: 'Einar Montalvo',
      class: 'VII 7',
      amount: '$ 34,036',
    },
    {
      id: 8,
      fullName: 'Михаил Русаков',
      class: 'VII 7',
      amount: '$ 89,036',
    },
    {
      id: 9,
      fullName: 'Sarah Martín',
      class: 'VII 7',
      amount: '$ 56,036',
    },
    {
      id: 10,
      fullName: 'Михаил Montalvo',
      class: 'VII 7',
      amount: '$ 190,036',
    },
  ]

  const ComponentToPrint = forwardRef((props: PrintType, ref: any) => {
    return (
      <div ref={ref} className={styles.print_body}>
        <div className={styles.print_body__chWrap}>
          <div className={styles.print_body__chWrap__title}>
            {/* <h1>Name Academy</h1> */}
            <h3>Unpaid Student</h3>
          </div>
          <div>
            <h2>FullName:</h2>
            <h2>Class:</h2>
            <h2>Amount:</h2>
            <h2>ID:</h2>
          </div>
          <div>
            <p>{props?.fullName}</p>

            <p>{props?.class}</p>
            <p>{props?.amount}</p>
            <p>{props?.id}</p>
          </div>
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
            <h2 className={styles.tbody__student_h2}>
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
          <h3>
            ID:
            {d.id.toString().length > 8
              ? d.id.toString().slice(0, 6)
              : d.id.toString()}
          </h3>
          <div className={styles.tbody__class}>
            <div>
              <h4>Class</h4>
              <h5>{d.class}</h5>
            </div>
          </div>
          <h6>{d.amount}</h6>
          <div>
            <ReactToPrint content={() => ref.current}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <AiOutlinePrinter
                    onClick={() => {
                      if (value.id !== 0 && value.id === d.id) {
                        handlePrint()
                        return null
                      } else {
                        setValue(d)
                        alert('DB Click "' + index + '" index')
                      }
                    }}
                  ></AiOutlinePrinter>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
            {value.id !== 0 ? (
              <div style={{ display: 'none' }}>
                <ComponentToPrint
                  ref={ref}
                  id={value.id}
                  fullName={value.fullName}
                  amount={value.amount}
                  class={value.class}
                />
              </div>
            ) : null}

            <NavLink to={'/dashboard/students'}>
              <BsThreeDots />
            </NavLink>
          </div>
        </div>
      ),
  )

  return (
    <>
      {dataMap}
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
