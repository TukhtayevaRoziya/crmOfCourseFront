import { GET_ALL_TEACHER, CREATE_TEACHER } from "../actions/types";

type initialStateType = {
  data: object,
}

const initialState:initialStateType = {
  data: [],
};

export const teachersReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_TEACHER:
      return {
        data: payload,
      };
      case CREATE_TEACHER:
        return {
          ...state,
          data: payload
        };
    default:
      return state;
  }
};
