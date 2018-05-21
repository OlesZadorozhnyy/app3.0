import React from "react"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Col, Panel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CategoryList from './CategoryList'

const NewsItemQuery = gql`
	query newsItem($id: Int!) {
		newsItem (id: $id) {
			title
			description
			text
		}
	}
`;

export default class NewsItem extends React.Component {

	renderBackButton() {
		return <Button onClick={this.props.history.goBack}>Go Back</Button>
	}

	render() {
		const newsId = this.props.match.params.id;

		return (
			<Query query={NewsItemQuery} variables={{id: +newsId}}>
				{({loading, error, data}) => {
					if (loading || error) return null

					const { newsItem } = data

					return (
						<Grid>
							<div>
								{this.renderBackButton()}
							</div>

							<hr/>

							<Col xs={12} md={2} className="pull-left">
								<CategoryList />
							</Col>

							<Col xs={12} md={10} className="pull-right">
								<Panel bsStyle="info">
									<Panel.Heading>
										<Panel.Title componentClass="h2">{newsItem.title}</Panel.Title>
									</Panel.Heading>
									<Panel.Body>
										<b>{newsItem.description}</b>
										<hr/>
										{newsItem.text}
									</Panel.Body>
								</Panel>
							</Col>
						</Grid>
					);
				}}
			</Query>
		);
	}
}