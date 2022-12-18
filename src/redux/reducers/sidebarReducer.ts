import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { MdDateRange } from 'react-icons/md'

export type InitialStateObjType = {
  id: number
  path: string
  label: string
  icon: any
}

const initialState = [
  {
    id: 1,
    path: '',
    label: 'Dashboard',
    icon: AiOutlineHome,
  } as InitialStateObjType,
  {
    id: 2,
    path: 'students',
    label: 'Students',
    icon: BsPersonLinesFill,
  } as InitialStateObjType,
  {
    id: 3,
    path: 'teachers',
    label: 'Teachers',
    icon: GiTeacher,
  } as InitialStateObjType,
  {
    id: 4,
    path: 'events',
    label: 'Events',
    icon: MdDateRange,
  } as InitialStateObjType,
  {
    id: 5,
    path: 'settings',
    label: 'Settings',
    icon: MdDateRange,
  } as InitialStateObjType,
]

export const sidebarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIDEBAR':
      return state

    default:
      return state
  }
}
