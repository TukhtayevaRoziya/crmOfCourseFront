import React from 'react'

import SecondBlock from './secondBlock/SecondBlock';
import { ChartBox } from './chart/Chart'
import Info from './info/Info'
import UnPainStudents from './unPaidStudents/UnPainStudents';

const Home = () => {
  return (
    <div className='home_wrap'>
      <Info />
      <ChartBox />
      <SecondBlock/>
      <UnPainStudents/>
    </div>
  )
}

export default Home
