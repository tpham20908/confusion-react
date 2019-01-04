import { ADD_LEADERS, LEADERS_FAILED, LEADERS_LOADING } from '../actions/types';

const initialState = {
  isLoading: true,
  errMess: null,
  leaders: []
}

export const Leaders = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LEADERS:
      return { ...state, isLoading: false, errMess: false, leaders: action.payload }
    case LEADERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, leaders: [] }
    case LEADERS_LOADING:
      return { ...state, isLoading: true, errMess: false, leaders: [] }
    default:
      return state;
  }
}