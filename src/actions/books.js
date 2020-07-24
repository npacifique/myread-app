import * as API from "../BooksAPI"
import { initialLoad } from "./initialLoad"
export const GET_BOOKS = "GET_BOOKS"
export const SEARCH_BOOKS = "SEARCH_BOOKS"
export const SWITCH_SHELF = "SWITCH_SHELF"
export const SEARCH_RESULTS = "SEARCH_RESULTS"
export const CLEAR_RESULTS = "CLEAR_RESULTS"
export function getBooks(books) {
	return {
		type: GET_BOOKS,
		books,
	}
}

export function switchShelf(book, shelf) {
	return {
		type: SWITCH_SHELF,
		book,
		shelf,
	}
}

export function searchResults(results) {
	return {
		type: SEARCH_RESULTS,
		results,
	}
}

export function clearSearchResults(results) {
	return {
		type: CLEAR_RESULTS,
	}
}

export function handleSearchAction(query) {
	return (dispatch) => {
		return API.search(query)
			.then((res) => res)
			.then((books) => {
				dispatch(searchResults(books))
			})
			.catch((error) => {
				dispatch(searchResults([]))
			})
	}
}

export function handleSwitchShelf(book, shelf) {
	return (dispatch) => {
		dispatch(switchShelf(book, shelf))

		return API.update(book, shelf)
			.then((res) => res)
			.then((data) => {
				dispatch(initialLoad())
			})
	}
}
