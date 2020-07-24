import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./index.css"
import "./App.css"
import { createStore } from "redux"
import reducers from "./reducers"
import middleware from "./middleware"
import { initialLoad } from "./actions/initialLoad"
import { Provider } from "react-redux"

const store = createStore(reducers, middleware)
store.dispatch(initialLoad())

ReactDOM.render(
	<Provider store={store}>
		<App store={store} />
	</Provider>,
	document.getElementById("root")
)
