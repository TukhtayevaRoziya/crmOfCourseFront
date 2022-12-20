import React from 'react'

import SecondBlock from './secondBlock/SecondBlock';
import { ChartBox } from './chart/Chart'
import Info from './info/Info'

const Home = () => {
  return (
    <div style={{ width: 'calc(100% - 1px)' }}>
      <Info />
      <ChartBox />
      <SecondBlock/>
    </div>
  )
}

export default Home
