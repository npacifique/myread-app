import React, { Component } from "react"
import Shelf from "./Shelf"
import { connect } from "react-redux"

class Library extends Component {
	render() {
		const { shelf } = this.props
		const readShelf = shelf("read")
		const wantToReadShelf = shelf("wantToRead")
		const currentlyReadingShelf = shelf("currentlyReading")

		return (
			<div>
				{currentlyReadingShelf && (
					<Shelf
						books={currentlyReadingShelf}
						name={"Currently Reading"}
					/>
				)}

				{wantToReadShelf && (
					<Shelf books={wantToReadShelf} name={"Want To Read"} />
				)}
				{readShelf && <Shelf books={readShelf} name={"Read"} />}
			</div>
		)
	}
}

const mapStateToProps = ({ books }) => {
	return {
		shelf: (shelf) => books.filter((b) => b.shelf === shelf),
	}
}

export default connect(mapStateToProps)(Library)
