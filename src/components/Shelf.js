import React, { Component } from "react"
import { connect } from "react-redux"
import Book from "./Book"
import format from "../utils/format"
import { handleSwitchShelf } from "../actions/books"

class Shelf extends Component {
	constructor(props) {
		super(props)
		this.handleBookSwitch = this.handleBookSwitch.bind(this)
	}

	handleBookSwitch(book, shelf) {
		this.props.dispatch(handleSwitchShelf(book, shelf))
	}

	render() {
		const { name, books } = this.props
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.length > 0 &&
							books.map((book) => (
								<li key={book.id}>
									<Book
										book={format(book)}
										handleBookSwitch={this.handleBookSwitch}
									/>
								</li>
							))}
					</ol>
				</div>
			</div>
		)
	}
}

export default connect()(Shelf)
