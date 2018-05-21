import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Col, Panel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CategoryList from './partials/CategoryList'
import { MainPageButton, BackButton } from './Helpers'
import { SimpleNewsList } from './partials/NewsList'

const CategoryItemQuery = gql`
	query category($id: Int!) {
		category (id: $id) {
			title
			news {
				id
				title
				time
			}
		}
	}
`;

export default class CategoryItem extends React.Component {

	render() {
		const categoryId = this.props.match.params.id;

		return (
			<Query query={CategoryItemQuery} variables={{id: +categoryId}}>
				{({loading, error, data}) => {
					if (loading || error) return null

					const { category } = data

					return (
						<Grid>
							<div>
								<MainPageButton history={this.props.history} />
								<BackButton history={this.props.history} />
							</div>

							<hr/>

							<Col xs={12} md={2} className="pull-left">
								<CategoryList />
							</Col>

							<Col xs={12} md={10} className="pull-right">
								<h3>{category.title}</h3>

								<div>
									<SimpleNewsList news={category.news} />
								</div>
							</Col>
						</Grid>
					);
				}}
			</Query>
		);
	}
}