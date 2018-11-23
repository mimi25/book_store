import { FETCH_BOOKS } from "./types";
import axios from "axios";

export const fetchBooks = () => dispatch => {
  axios
    .get("https://api.itbook.store/1.0/new")
    .then(res => res.json())
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        books
      })
    );
};
