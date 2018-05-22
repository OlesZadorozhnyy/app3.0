import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NewsIndex from './NewsIndex'
import NewsItem from './NewsItem'
import CategoryItem from './CategoryItem'
import CreateNewsItem from './CreateNewsItem'

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={NewsIndex} />
					<Route exact path="/news/:id(\d+)" component={NewsItem} />
					<Route exact path="/category/:id" component={CategoryItem} />
					<Route exact path="/news/create" component={CreateNewsItem} />
				</div>
			</Router>
		)
	}
}