import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CategoryList extends React.Component {

	renderCategories(categories) {
		return categories.map((category, index) => {
			const url = this.getCategoryItemRoute(category.id)

			return (
				<Link key={index} to={url}>
					<ListGroupItem href={url}>
						{category.title}
					</ListGroupItem>
				</Link>
			)
		})
	}

	getCategoryItemRoute(id) {
		return '/category/' + id
	}

	render() {
		const { categories } = this.props.data

		if (!categories) return null

		return (
			<ListGroup>
				{this.renderCategories(categories)}
			</ListGroup>
		);
	}
}

export default graphql(gql`
	query {
		categories {
			id
			title
		}
	}
`)(CategoryList);