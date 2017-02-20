interface IProject {
    id: number,
    name: string,
    homepage: string,
    url: string
    description: string,
    updated_at: string,
    maintained: boolean
}

interface ProjectListState {
    projects: Array<IProject>,
    loading: boolean
}

interface Gist {
    files: {
        projects: {
            content: string
        }
    }
}
