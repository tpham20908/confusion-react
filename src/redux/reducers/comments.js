import { COMMENTS } from '../../shared/comments';
import { ADD_COMMENT } from '../actions/types';

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return [...state, comment];
    default:
      return state;
  }
}