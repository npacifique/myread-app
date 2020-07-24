import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./Header"
import Library from "./Library"
import AddButton from "./AddButton"
import Search from "./Search"
import { Route, Link } from "react-router-dom"

class MainPage extends Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={Header} />
				<Route path="/" exact component={Library} />
				<Link to="/search">
					<Route path="/" exact component={AddButton} />
				</Link>
				<Route path="/search" exact component={Search} />
			</div>
		)
	}
}

export default connect()(MainPage)
