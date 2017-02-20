import React from 'react'

import { ProjectList } from './ProjectList'
import {config, configType, } from '../../config'

const style = { body: {
	fontFamily: 'monospace',
	padding: '20px 50px', 
	maxWidth: 720
}}

export default class App extends React.Component<{}, undefined> {
	render(): JSX.Element {
		const { description, contact } : configType = config

		return (
			<div style={style.body}>
				<h1>John Wiseheart</h1>
				<p>{description}</p>

				<ProjectList />

				<h2>Contact Me</h2>
				<p>{contact}</p>
			</div>
		)
	}
}