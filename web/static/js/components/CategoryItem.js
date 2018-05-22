import React from 'react'
import { Query } from 'react-apollo'

import { SimpleNewsList } from './partials/NewsList'
import NewsPageTemplate from './partials/NewsPageTemplate'

import { CategoryItemQuery } from '../queries'

export default class CategoryItem extends React.Component {

	render() {
		const categoryId = +this.props.match.params.id

		return (
			<Query query={CategoryItemQuery} variables={{id: categoryId}}>
				{({loading, error, data}) => {
					if (loading || error) return null

					const { category } = data

					return (
						<NewsPageTemplate {...this.props}>
							<h3>{category.title}</h3>

							<div>
								<SimpleNewsList news={category.news} />
							</div>
						</NewsPageTemplate>
					)
				}}
			</Query>
		)
	}
}