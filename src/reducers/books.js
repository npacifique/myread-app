import {
	GET_BOOKS,
	SWITCH_SHELF,
	SEARCH_BOOKS,
	SEARCH_RESULTS,
	CLEAR_RESULTS
} from "../actions/books"

export function books(state = [], action) {
	switch (action.type) {
		case GET_BOOKS:
			return (state = action.books)
		case SWITCH_SHELF:
			return (state = state.filter((b) => {
				return b.id === action.book.id ? (b.shelf = action.shelf) : b
			}))
		default:
			return state
	}
}

export function searchResults(state = [], action) {
	switch (action.type) {
		case SEARCH_RESULTS:
			return action.results
		case SEARCH_BOOKS:
			return state
		case CLEAR_RESULTS: 
			return state = []
		default:
			return state
	}
}
