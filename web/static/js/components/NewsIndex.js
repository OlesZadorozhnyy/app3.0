import React from "react"
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CategoryList from './CategoryList'

class NewsIndex extends React.Component {

	renderTopNews(news) {
		return news.map((newsItem, index) => {
			const url = this.getNewsItemRoute(newsItem.id)

			return (
				<Link key={index} to={url}>
					<ListGroupItem header={newsItem.title} href={url}>
						<b>{newsItem.description}</b>
					</ListGroupItem>
				</Link>
			)
		})
	}

	renderSimpleNews(news) {
		return news.map((newsItem, index) => {
			const url = this.getNewsItemRoute(newsItem.id)

			return (
				<Link key={index} to={url}>
					<ListGroupItem href={url}>
						<Row>
							<Col xs={2}>
								<small>{newsItem.time}</small>
							</Col>

							<Col xs={10}>
								<span>{newsItem.title}</span>
							</Col>
						</Row>
					</ListGroupItem>
				</Link>
			)
		})
	}

	getNewsItemRoute(id) {
		return '/news/' + id
	}

	render() {
		const { topNews, simpleNews } = this.props.data

		if (!topNews || !simpleNews) return null

		return (
			<Grid>
				<Col xs={12} md={2} className="pull-left">
					<CategoryList />
				</Col>

				<Col xs={12} md={10} className="pull-right">
					<Col xs={12}>
						<ListGroup>{this.renderTopNews(topNews)}</ListGroup>
					</Col>

					<Col xs={12}>
						<ListGroup>{this.renderSimpleNews(simpleNews)}</ListGroup>
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