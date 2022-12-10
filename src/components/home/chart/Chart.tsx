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
  registerables
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import api from './../../../utility/api'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
...registerables
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
}

export function ChartBox() {
  const [chartData, setChartData] = useState({
    data1: [20, 40, 60],
    data2: [40, 70, 10],
  })

  useEffect(() => {
    api.get('chart').then((res) => {
      setChartData(res.data)
      console.log(res.data)
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
    labels:getLastMonths,
    datasets: [
      {
        label: 'This Week',
        data: chartData.data2,
        borderColor: '#FCC43E',
        backgroundColor: '#fff',
        yAxisID: 'y',
      },
      {
        label: 'Last Week',
        data: chartData.data1,
        borderColor: '#FB7D5B',
        backgroundColor: '#fff',
        yAxisID: 'y',
      },
      
    ],
  }

  return <Line options={options} data={data} />
}
