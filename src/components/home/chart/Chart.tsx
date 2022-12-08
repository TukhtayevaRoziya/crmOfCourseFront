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
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'
import axios from 'axios'
import api from './../../../utility/api'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: '',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'bottom' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
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

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'This Week',
        data: chartData.data1,
        borderColor: '#FB7D5B',
        backgroundColor: '#fff',
        yAxisID: 'y',
      },
      {
        label: 'Last Week',
        data: chartData.data2,
        borderColor: '#FCC43E',
        backgroundColor: '#fff',
        yAxisID: 'y1',
      },
    ],
  }

  return <Line options={options} data={data} />
}
