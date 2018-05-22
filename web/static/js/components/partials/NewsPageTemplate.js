import React from 'react'
import { Grid, Col } from 'react-bootstrap'

import { MainPageButton, CreateNewsButton, BackButton } from '../utils/Buttons'
import CategoryList from './CategoryList'

export default class NewsPageTemplate extends React.Component {

	renderRouteButtons() {
		if (this.props.location.pathname == '/') return (
			<CreateNewsButton history={this.props.history} />
		)

		return (
			<div>
				<MainPageButton history={this.props.history} />
				<BackButton history={this.props.history} />
			</div>
		)
	}

	render() {
		return (
			<Grid>
				<div>
					{this.renderRouteButtons()}

					<hr/>
				</div>

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