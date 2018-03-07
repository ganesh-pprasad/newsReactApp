import { FETCH_NEWS, RESET_NEWS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NEWS:
      return [action.payload.posts, ...state];
    case RESET_NEWS:
      return [action.payload, ...state];
    default:
      return state;
  }
}
