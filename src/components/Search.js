import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Book from "./Book"
import format from "../utils/format"
import {
	handleSwitchShelf,
	handleSearchAction,
} from "../actions/books"

import { debounce } from "lodash"

class Search extends Component {
	constructor(props) {
		super(props)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleBookSwitch = this.handleBookSwitch.bind(this)
		this.state = {
			text: "",
		}
	}

	handleSearch = debounce(() => {
		this.state.text.length > 0 &&
			this.props.dispatch(handleSearchAction(this.state.text))
	}, 1000)

	handleBookSwitch(book, shelf) {
		this.props.dispatch(handleSwitchShelf(book, shelf))
	}

	render() {
		const { results } = this.props

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search">Close</button>
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							onChange={(e) => {
								this.setState({ text: e.target.value.trim() })
								this.handleSearch()
							}}
						/>
					</div>
				</div>
				<div className="search-books-results">
					{this.state.text.length > 0 && (
						<ol className="books-grid">
							{results.length > 0 &&
								results.map((b) => (
									<li key={b.id}>
										{b && (
											<Book
												book={format(b)}
												handleBookSwitch={this.handleBookSwitch}
											/>
										)}
									</li>
								))}
						</ol>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		results: state.searchResults,
	}
}

export default connect(mapStateToProps)(Search)
