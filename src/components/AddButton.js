import React, { Component } from "react"
import {connect} from 'react-redux'
import {clearSearchResults} from '../actions/books'

class AddButton extends Component {

	constructor(props){
		super(props)
		this.handleClearSearchResults = this.handleClearSearchResults.bind(this)
	}

	handleClearSearchResults(){
		this.props.dispatch(clearSearchResults())
	}
	
	render() {
		return (
			<div className="open-search">
				<button onClick={this.handleClearSearchResults}>
					Add a book
				</button>
			</div>
		)
	}
}

export default connect() (AddButton)
