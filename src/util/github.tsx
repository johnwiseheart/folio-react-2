/// <reference path="../interfaces.d.ts"/>

import { config } from '../../config'

export const getRepoListFromGithub = () : Promise<Array<IProject>> => (
    fetch(config.githubApi)
        .then((response: Response) => response.json() as Promise<Array<IProject>>)
        .then((repoList: Array<IProject>) => repoList.filter(isHostedProject))
)

const isHostedProject = (repo: IProject) : boolean => (
    repo.hasOwnProperty('homepage') && 
        repo.homepage !== null && 
        (
            repo.homepage.indexOf('jcaw.me') > -1 || 
            repo.homepage.indexOf('github.io') > -1
        )
)