import React from 'react'
import { Query } from 'react-apollo'
import { Panel } from 'react-bootstrap'

import NewsPageTemplate from './partials/NewsPageTemplate'
import { NewsItemQuery } from '../queries'

export default class NewsItem extends React.Component {

	render() {
		const newsId = +this.props.match.params.id

		return (
			<Query query={NewsItemQuery} variables={{id: newsId}}>
				{({loading, error, data}) => {
					if (loading || error) return null

					const { newsItem } = data

					return (
						<NewsPageTemplate {...this.props}>
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
						</NewsPageTemplate>
					)
				}}
			</Query>
		)
	}
}