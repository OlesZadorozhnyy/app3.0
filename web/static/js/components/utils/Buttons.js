import React from 'react'
import { Button } from 'react-bootstrap'

class MainPageButton extends React.Component {

	onClickButton() {
		this.props.history.push('/')
	}

	render() {
		return <Button onClick={this.onClickButton.bind(this)}>Home</Button>
	}
}

class CreateNewsButton extends React.Component {

	onClickButton() {
		this.props.history.push('/news/create')
	}

	render() {
		return <Button onClick={this.onClickButton.bind(this)}>Create news</Button>
	}
}

class BackButton extends React.Component {

	render() {
		return <Button onClick={this.props.history.goBack}>Go Back</Button>
	}
}

export {
	MainPageButton,
	CreateNewsButton,
	BackButton
}