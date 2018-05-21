import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NewsList extends React.Component {

	renderNews() {
		return this.props.news.map((newsItem, index) => {
			return this.template(newsItem, index)
		})
	}

	template(newsItem, index) {
		return <div/>
	}

	getNewsItemRoute(id) {
		return '/news/' + id
	}

	render() {
		if (!this.props.news) return null

		return (
			<ListGroup>
				{this.renderNews()}
			</ListGroup>
		)
	}
}

class SimpleNewsList extends NewsList {

	template(newsItem, index) {
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
	}
}

class TopNewsList extends NewsList {

	template(newsItem, index) {
		const url = this.getNewsItemRoute(newsItem.id)

		return (
			<Link key={index} to={url}>
				<ListGroupItem header={newsItem.title} href={url}>
					<b>{newsItem.description}</b>
				</ListGroupItem>
			</Link>
		)
	}
}

export {
	SimpleNewsList,
	TopNewsList
}