import React, { Component } from "react"
import { connect } from "react-redux"
import MainPage from "./MainPage"
import { BrowserRouter as Router } from "react-router-dom"

class App extends Component {
	render() {
		const { store } = this.props
		store.subscribe(() => this.forceUpdate())
		return (
			<Router>
				<div className="app">
					<div className="list-books">
						<MainPage />
					</div>
				</div>
			</Router>
		)
	}
}

export default connect()(App)
