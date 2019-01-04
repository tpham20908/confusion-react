import { ADD_PROMOS, PROMOS_FAILED, PROMOS_LOADING } from '../actions/types';

const initialState = {
  isLoading: true,
  errMess: null,
  promotions: []
}

export const Promotions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROMOS:
      return { ...state, isLoading: false, errMess: null, promotions: action.payload }

    case PROMOS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] }

    case PROMOS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, promotions: [] }

    default:
      return state;
  }
}