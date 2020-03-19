import { ADD, CLEAR } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case CLEAR:
      return {
        num: 0
      }
    default:
      return state
  }
}
