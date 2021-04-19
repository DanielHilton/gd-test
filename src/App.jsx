import './App.css';
import React, {Component} from 'react';
import RepoList from './components/RepoList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: []
        };
    }

    componentDidMount() {

    }

    render() {
        return <div className="App">
            <header className="App-header">
                <h1>GitHub Repo List</h1>
            </header>
            <div className="App-body">
                <RepoList githubAccount="godaddy"/>
            </div>
        </div>
    };
}

export default App;
