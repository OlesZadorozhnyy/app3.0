import React from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NewsIndex from './NewsIndex'
import NewsItem from './NewsItem';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={NewsIndex} />
					<Route exact path="/news/:id" component={NewsItem} />
				</div>
			</Router>
		);
	}
}