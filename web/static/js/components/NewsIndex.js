import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CategoryList from './partials/CategoryList'
import { SimpleNewsList, TopNewsList } from './partials/NewsList'

class NewsIndex extends React.Component {

	render() {
		const { topNews, simpleNews } = this.props.data

		if (!topNews || !simpleNews) return null

		return (
			<Grid>
				<Col xs={12} md={3} className="pull-left">
					<CategoryList />
				</Col>

				<Col xs={12} md={9} className="pull-right">
					<Col xs={12}>
						<TopNewsList news={topNews} />
					</Col>

					<Col xs={12}>
						<SimpleNewsList news={simpleNews} />
					</Col>
				</Col>
			</Grid>
		)
	}
}

export default graphql(gql`
	query {
		topNews(limit: 3) {
			id
			title
			description,
			insertedAt
		}
		simpleNews(limit: 20) {
			id
			title,
			time
		}
	}
`)(NewsIndex);