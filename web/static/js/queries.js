import gql from 'graphql-tag'

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
`

const CategoriesQuery = gql`
	query {
		categories {
			id
			title
		}
	}
`

const CreateNewsItemMutation = gql`
	mutation createNews($data: NewsData!) {
		createNews(data: $data) {
			id
			title
			description
			text
			isTop
			insertedAt
		}
	}
`

const SpecificNewsQuery = gql`
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
`

const NewsItemQuery = gql`
	query newsItem($id: Int!) {
		newsItem (id: $id) {
			title
			description
			text
		}
	}
`

export {
	CategoryItemQuery,
	CategoriesQuery,
	CreateNewsItemMutation,
	SpecificNewsQuery,
	NewsItemQuery,
}