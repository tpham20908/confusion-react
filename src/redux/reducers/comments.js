import { ADD_COMMENT, ADD_COMMENTS, COMMENTS_FAILED } from '../actions/types';

const initialState = {
  errMess: null,
  comments: []
}

export const Comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: [ ...state.comments, comment] };
    case ADD_COMMENTS:
      return { ...state, errMess: false, comments: action.payload};
    case COMMENTS_FAILED:
      return { ...state, errMess: action.payload, comments: [] }
    default:
      return state;
  }
}