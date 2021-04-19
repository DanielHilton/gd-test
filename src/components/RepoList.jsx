import React, {Component} from 'react';
import Repo from './Repo';

class RepoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repoData: []
        };
    }

    async componentDidMount() {
        console.log(this.props.githubAccount);
        const req = new Request(`https://api.github.com/orgs/${this.props.githubAccount}/repos`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'GET'
            });

        try {
            const response = await fetch(req);
            const body = await response.text();

            this.setState({repoData: JSON.parse(body)})
        } catch (err) {
            console.log(`Error fetching repo data: ${JSON.stringify(err)}`);
            this.setState({errored: true});
        }
    }

    generateRepos(repoData) {
        return repoData.map(repo => <Repo repoData={repo}/>);
    }

    render() {
        if (this.state.errored) {
            return <h2>Failed!</h2>
        }

        return this.state.repoData.length ?
            <ul>{this.generateRepos(this.state.repoData)}</ul> :
            <h2>Loading...</h2>;
    }
}

export default RepoList;