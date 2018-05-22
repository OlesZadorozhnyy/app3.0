import React from 'react'
import { Grid, Col } from 'react-bootstrap'

import { MainPageButton, BackButton } from '../utils/Helpers'
import CategoryList from './CategoryList'

export default class NewsPageTemplate extends React.Component {

	renderRouteButtons() {
		if (this.props.location.pathname == '/') return

		return (
			<div>
				<div>
					<MainPageButton history={this.props.history} />
					<BackButton history={this.props.history} />
				</div>

				<hr/>
			</div>
		)
	}

	render() {
		return (
			<Grid>
				{this.renderRouteButtons()}

				<Col xs={12} md={3} className="pull-left">
					<CategoryList />
				</Col>

				<Col xs={12} md={9} className="pull-right">
					{this.props.children}
				</Col>
			</Grid>
		)
	}
}