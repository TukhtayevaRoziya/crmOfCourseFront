import { Dispatch } from "@reduxjs/toolkit";
import { GET_UNPAID_STUDENTS, GET_ALL_STUDENTS } from "./types";

export const allStudent = (data: any) => (dispatch: Dispatch) => {
  dispatch({ type: GET_ALL_STUDENTS, payload: data });
};
export const unpaidStudent = (data: any) => (dispatch: Dispatch) => {
  dispatch({ type: GET_UNPAID_STUDENTS, payload: data });
};
