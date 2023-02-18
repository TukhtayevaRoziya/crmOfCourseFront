import { GET_ALL_STUDENTS, GET_UNPAID_STUDENTS, CREATE_STUDENT } from "../actions/types";

type initialStateType = {
  allStudents?: object,
  unPaidStudents?: object
}

const initialState:initialStateType = {
  allStudents: [],
  unPaidStudents: []
};

export const studentsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_STUDENTS:
      return {
        allStudents: payload,
      };
    case GET_UNPAID_STUDENTS:
      return {
        unPaidStudents: payload,
      };
      case CREATE_STUDENT:
        return {
          ...state,
          allStudents: payload
        };
    default:
      return state;
  }
};
