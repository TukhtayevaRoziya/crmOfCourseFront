import React from 'react'

type PropsType = {
  id: number
  fullName: string
  payment: boolean | undefined
}

const Student = (props:PropsType) => {
  return (
    <div>
      <h1>ID: {props.id}</h1>
    </div>
  )
}

export default Student
