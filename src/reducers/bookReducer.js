import { FETCH_BOOKS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
          ...state, books: action.books
      };

  default :
  return state
  }
}
