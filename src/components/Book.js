import React, { Component } from "react"
import { connect } from "react-redux"

class Book extends Component {
	findShelf(id) {
		let book = this.props.shelfBooks.find((b) => b.id === id)
		return book ? book.shelf : "none"
	}

	render() {
		const { id, title, imageLinks, authors, shelf } = this.props.book
		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${
								imageLinks ? imageLinks.smallThumbnail : imageLinks
							}")`,
						}}
					/>
					<div className="book-shelf-changer">
						<select
							onChange={(e) =>
								this.props.handleBookSwitch(
									this.props.book,
									e.target.value
								)
							}
							value={shelf ? shelf : this.findShelf(id)}
						>
							<option value="move" disabled>
								Move to...
							</option>
							<option value="currentlyReading">
								Currently Reading
							</option>
							<option value={"wantToRead"}>Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors}</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		shelfBooks: state.books,
	}
}

export default connect(mapStateToProps)(Book)
