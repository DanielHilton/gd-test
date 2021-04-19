import React, {Component} from 'react';
import RepoItem from './RepoItem';
import retrieveRepoData from '../helpers/repoData';

class RepoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errored: false,
            repoData: undefined
        };
    }

    componentDidMount() {
        this.retrieveAccountInfo(this.props.githubAccount);
    }

    componentDidUpdate(oldProps) {
        if(oldProps.githubAccount !== this.props.githubAccount) {
            this.retrieveAccountInfo(this.props.githubAccount);
        }
    }

    generateRepoItems(repoData) {
        return repoData.map(repo => <RepoItem key={repo.name} repoData={repo}/>);
    }

    async retrieveAccountInfo(githubAccount) {
        let transientState = {errored: false};

        try {
            const {status, body} = await retrieveRepoData(githubAccount) || [];

            if (status >= 400) {
                console.warn(`${status} received from github`);
                transientState.repoData = [];
            } else {
                transientState.repoData = body;
            }
        } catch (err) {
            transientState.errored = true;
        }

        this.setState(transientState);
    }

    render() {
        if (this.state.errored) {
            return <h2>Failed!</h2>
        }

        if(this.state.repoData === undefined)
            return <h3>Loading...</h3>;

        return this.state.repoData.length ?
            <ul>{this.generateRepoItems(this.state.repoData)}</ul> :
            <h2>No data for {this.props.githubAccount}</h2>
    }
}

export default RepoList;