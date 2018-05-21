import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Col, Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CategoryList from './partials/CategoryList'
import { MainPageButton, BackButton } from './Helpers'

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

	render() {
		const newsId = +this.props.match.params.id;

		return (
			<Query query={NewsItemQuery} variables={{id: newsId}}>
				{({loading, error, data}) => {
					if (loading || error) return null

					const { newsItem } = data

					return (
						<Grid>
							<div>
								<MainPageButton history={this.props.history} />
								<BackButton history={this.props.history} />
							</div>

							<hr/>

							<Col xs={12} md={3} className="pull-left">
								<CategoryList />
							</Col>

							<Col xs={12} md={9} className="pull-right">
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