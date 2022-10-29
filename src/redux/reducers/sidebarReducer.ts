import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

export type InitialStateObjType = {
  id: number,
  path: string,
  label: string,
  icon: any
}

const initialState = [
  {id: 1, path:'', label:'Dashboard', icon:UploadOutlined} as InitialStateObjType,
  {id: 2, path:'teacher', label:'teacher', icon:UserOutlined} as InitialStateObjType,
  {id: 3, path:'people', label:'people', icon:VideoCameraOutlined} as InitialStateObjType,
  {id: 4, path:'student', label:'student', icon:UploadOutlined} as InitialStateObjType
]  


export const sidebarReducer = (state = initialState, action: any) =>{
  switch (action.type) {
    case 'SIDEBAR':
      return state
  
    default:
      return state
  }
}