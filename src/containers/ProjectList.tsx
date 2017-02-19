/// <reference path="../interfaces.d.ts"/>

import React from 'react'

import { Project } from './Project'

import { getRepoListFromGithub} from '../util/github'
import { getGistFromGithub} from '../util/gist'

const sortProjects = (a, b) => {
    if (a.name < b.name)
        return -1
    if (a.name > b.name)
        return 1
    return 0
}

export class ProjectList extends React.Component<{}, ProjectListState> {
    state = { projects: [], loading: true }

    componentDidMount() {
        Promise.all([getRepoListFromGithub(), getGistFromGithub()]).then(projectGroups => {
            return [].concat.apply([], projectGroups).sort(sortProjects)
        }).then(projects => {
            this.setState({ projects, loading: false })
        })
    }

    renderProject(project: IProject): JSX.Element {
        return <Project key={project.id} {...project} />
    }

    render() : JSX.Element {
        return (
            <div>
            {!this.state.loading ? <div style={{display: 'flex'}}>
                <div>
                    {this.state.projects.map(this.renderProject)}
                </div>
            </div> : <div>Loading...</div>}
            </div>
        )
    }
}