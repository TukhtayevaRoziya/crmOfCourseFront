import React from 'react'
import { ChartBox } from './chart/Chart'
import Info from './info/Info'

const Home = () => {
  return (
    <div style={{ width: 'calc(100% - 1px)' }}>
      <Info />
      <ChartBox />
    </div>
  )
}

export default Home
