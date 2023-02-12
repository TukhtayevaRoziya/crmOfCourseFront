import { Dispatch } from "@reduxjs/toolkit";
import { ALL_STUDENTS_GET, UNPAID_STUDENTS_GET } from "./types";

export const allStudent = (data: any) => (dispatch: Dispatch) => {
  dispatch({ type: ALL_STUDENTS_GET, payload: data });
};
export const unpaidStudent = (data: any) => (dispatch: Dispatch) => {
  dispatch({ type: UNPAID_STUDENTS_GET, payload: data });
};
