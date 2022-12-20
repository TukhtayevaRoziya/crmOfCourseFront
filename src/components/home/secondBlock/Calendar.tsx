import React, { useState } from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

import './styles.css'

const Calendar = () => {
  const [date, setdata] = useState(new Date())

  return (
    <div className="calendar">
      <CalendarComponent onChange={setdata} value={date} />
    </div>
  )
}

export default Calendar
