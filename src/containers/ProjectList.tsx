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

const style = {
    inlineTitle: {
        display: 'inline-block'
    },
    subtitle: {
        display: 'inline-block',
        color: '#bbb',
        paddingLeft: 10
    }
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
                <h2>Personal Projects</h2>
                {!this.state.loading 
                    ? <div>
                        {this.state.projects.filter(project => project.maintained === true || !project.hasOwnProperty('maintained')).map(this.renderProject)}
                      </div>
                    : <div>Loading...</div>}
                <h2 style={style.inlineTitle}>Other Projects</h2>
                <p style={style.subtitle}>Unmaintained, group or orphaned projects</p>
                {!this.state.loading 
                    ? <div>
                        {this.state.projects.filter(project => project.maintained === false).map(this.renderProject)}
                      </div>
                    : <div>Loading...</div>}
            </div>
        )
    }
}