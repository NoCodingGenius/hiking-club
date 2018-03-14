import { FETCH_TRAILS } from '../actions';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_TRAILS:
      return [ action.payload.data, ...state]
  }
  return state;
}
