import React from 'react'

import { ProjectList } from './ProjectList'
import {config, configType, } from '../../config'

import '../styles/styles.css'

export default class App extends React.Component<{}, undefined> {
	render(): JSX.Element {
		const { description, contact } : configType = config

		return (
			<div>
				<h1>John Wiseheart</h1>
				<p>{description}</p>

				<ProjectList />

				<h2>Contact Me</h2>
				<p>{contact}</p>
			</div>
		)
	}
}