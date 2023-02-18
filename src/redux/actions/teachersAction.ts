import { Dispatch } from "@reduxjs/toolkit";
import { GET_ALL_TEACHER } from "./types";

export const allTeachers = (data: any) => (dispatch: Dispatch) => {
  dispatch({ type: GET_ALL_TEACHER, payload: data });
};
// export const unpaidStudent = (data: any) => (dispatch: Dispatch) => {
//   dispatch({ type: GET_UNPAID_STUDENTS, payload: data });
// };
