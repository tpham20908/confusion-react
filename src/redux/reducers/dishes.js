import { DISHES_LOADING, DISHES_FAILED, ADD_DISHES } from '../actions/types';

const initialState = {
  isLoading: true,
  errMess: null,
  dishes: []
}

export const Dishes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISHES:
      return { ...state, isLoading: false, errMess: null, dishes: action.payload }

    case DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] }

    case DISHES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, dishes: [] }

    default:
      return state;
  }
}