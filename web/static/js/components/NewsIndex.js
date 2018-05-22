import React from 'react'
import { graphql } from 'react-apollo'
import { Col } from 'react-bootstrap'

import { SimpleNewsList, TopNewsList } from './partials/NewsList'
import NewsPageTemplate from './partials/NewsPageTemplate'
import { SpecificNewsQuery } from '../queries'

class NewsIndex extends React.Component {

	componentDidMount() {
		this.props.data.refetch()
	}

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

export default graphql(SpecificNewsQuery)(NewsIndex)