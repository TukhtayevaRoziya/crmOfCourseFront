import { ALL_STUDENTS_GET } from "../actions/types";
import { UNPAID_STUDENTS_GET } from "../actions/types";

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
    case ALL_STUDENTS_GET:
      return {
        allStudents: payload,
      };
    case UNPAID_STUDENTS_GET:
      return {
        unPaidStudents: payload,
      };

    default:
      return state;
  }
};
