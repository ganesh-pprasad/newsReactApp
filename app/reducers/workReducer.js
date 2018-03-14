import { AUTHOR } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case AUTHOR:
      return [action.payload.posts, ...state];
    default:
      return state;
  }
}
