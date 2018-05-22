import React from 'react'
import { Query } from 'react-apollo'
import { graphql, withApollo } from 'react-apollo'
import { Grid, Col, FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap'

import { MainPageButton } from './utils/Buttons'

import { CategoriesQuery, CreateNewsItemMutation } from '../queries'

class CreateNewsItem extends React.Component {

	constructor(props) {
		super(props)

		this.inputs = {}
	}

	renderCategoryOptions(categories) {
		return categories.map((category, index) => {
			return <option key={index} value={category.id}>{category.title}</option>
		})
	}

	onSubmit(e) {
		e.preventDefault()

		let data = {}

		for (let name in this.inputs) {
			const currentInput = this.inputs[name]

			if (currentInput.type == 'checkbox') {
				data[currentInput.name] = currentInput.checked
			} else {
				data[currentInput.name] = currentInput.value
			}
		}

		this.props.client.mutate({
			mutation: CreateNewsItemMutation,
			variables: { data: data }
		})

		this.props.history.goBack()
	}

	render() {
		const { categories } = this.props.data

		if (!categories) return null

		return (
			<Grid>
				<div>
					<MainPageButton history={this.props.history} />
					<hr/>
				</div>

				<h2 className="text-center">Create news</h2>

				<form action="/news/create" method="POST" onSubmit={this.onSubmit.bind(this)}>
					<FormGroup controlId="formBasicText">
						<ControlLabel>Title</ControlLabel>
						<FormControl inputRef={e => this.inputs.title = e} type="text" name="title" required />
					</FormGroup>

					<FormGroup controlId="formControlsSelectMultiple">
						<ControlLabel>Category</ControlLabel>
						<FormControl inputRef={e => this.inputs.categoryId = e} componentClass="select" name="category_id" required>
							<option value="">Select from list</option>
							{this.renderCategoryOptions(categories)}
						</FormControl>
					</FormGroup>

					<FormGroup controlId="formBasicText">
						<ControlLabel>Description</ControlLabel>
						<FormControl inputRef={e => this.inputs.description = e} type="text" name="description" required />
					</FormGroup>

					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Text</ControlLabel>
						<FormControl inputRef={e => this.inputs.text = e} componentClass="textarea" name="text" rows="10" required />
					</FormGroup>

					<FormGroup>
						<Checkbox inputRef={e => this.inputs.isTop = e} name="is_top" inline>Top News</Checkbox>
					</FormGroup>

					<Button type="submit" bsStyle="primary">Save</Button>
				</form>
			</Grid>
		)
	}
}

export default withApollo(
	graphql(CategoriesQuery)(CreateNewsItem)
)