import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import api from './../../../utility/api'

import styles from './Chart.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ...registerables,
)

export const options = {
  responsive: true,
  plugins: {
    // title: {
    //   display: true,
    //   text: 'Custom Chart Title',
    // },
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      maxWidth: 100,
      padding: {
        bottom: 100,
      },
      labels: {
        boxWidth: 3,
        boxHeight: 3,
        borderWidth: 2,
        background: '#FFFFFF',
        pointStyle: 'circle',
      },
    },
  },
  borderJoinStyle: 'bevel',
}

export function ChartBox() {
  const [chartData, setChartData] = useState({
    data1: [20, 40, 60],
    data2: [40, 70, 10],
  })

  useEffect(() => {
    api.get('chart').then((res) => {
      setChartData(res.data)
    })
  }, [])

  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  var today = new Date()
  var last5Months = []

  for (var i = 0; i < 5; i++) {
    last5Months.push(monthNames[today.getMonth() - i])
  }

  const getLastMonths = last5Months.reverse()

  const data = {
    labels: getLastMonths,
    datasets: [
      {
        label: 'This Week',
        data: chartData.data2,
        borderColor: '#FCC43E',
        backgroundColor: '#fff',
        color: 'red',
        yAxisID: 'y',
        borderWidth: 6,
        borderRadius: 70,
        circular: true,
      },
      {
        label: 'Last Week',
        data: chartData.data1,
        borderColor: '#FB7D5B',
        backgroundColor: '#fff',
        color: 'red',
        borderRadius: 70,
        yAxisID: 'y',
        borderWidth: 6,
        circular: true,
      },
    ],
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>School Performance</h1>
      <Line style={{width: '100%'}} options={options} data={data} />
    </div>
  )
}
