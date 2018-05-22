import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Col } from 'react-bootstrap'

import { SimpleNewsList, TopNewsList } from './partials/NewsList'
import NewsPageTemplate from './partials/NewsPageTemplate'

class NewsIndex extends React.Component {

	render() {
		const { topNews, simpleNews } = this.props.data

		if (!topNews || !simpleNews) return null

		return (
			<NewsPageTemplate {...this.props}>
				<Col xs={12}>
					<TopNewsList news={topNews} />
				</Col>

				<Col xs={12}>
					<SimpleNewsList news={simpleNews} />
				</Col>
			</NewsPageTemplate>
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
`)(NewsIndex)