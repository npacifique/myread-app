import * as API from "../BooksAPI"
import { getBooks } from "./books"

export function initialLoad() {
	return (dispatch) => {
		return API.getAll()
			.then((res) => res)
			.then((books) => {
				dispatch(getBooks(books))
			})
	}
}
