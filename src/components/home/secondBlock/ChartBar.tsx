import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'School Finance',
    },
  },
}

const labels = ['Mon', 'Tue', 'Wen', 'Tu', 'Fri', 'Sat', 'Sun']

export const data = {
  labels,
  datasets: [
    {
      label: 'This Week',
      borderColor: '#FCC43E',
      backgroundColor: '#FCC43E',
      data: [65, 59, 80, 81, 56, 55, 40],
      color: 'red',
      yAxisID: 'y',
      borderRadius: 6,
      circular: true,
    },
    {
      label: 'Last Week',
      borderColor: '#FB7D5B',
      backgroundColor: '#FB7D5B',
      data: [34, 98, 23, 45, 34, 23, 56],
      // color: 'red',
      borderRadius: 6,
      yAxisID: 'y',
      circular: true,
    },
  ],
}

const ChartBar = () => {
  return <Bar options={options} data={data} />
}

export default ChartBar
