/// <reference path="../interfaces.d.ts"/>

import moment from 'moment'

import { config } from '../../config'

export const getGistFromGithub = () : Promise<Array<IProject>> => (
    fetch(config.gistApi)
        .then((response: Response) => response.json() as Promise<Gist>)
        .then((gist: Gist) => JSON.parse(gist.files.projects.content).map(project => ({
            'id': project.name,
            'name': project.name,
            'homepage': project.homepage,
            'url': project.html_url,
            'description': project.description,
            'updated_at': moment(project.updated_at, 'D MMM YYYY').format()
        })))
)