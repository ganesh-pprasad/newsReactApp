import { FETCH_NEWS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NEWS:
      return [action.payload.posts, ...state];
    default:
      return state;
  }
}
