import './App.css';
import React, {Component} from 'react';
import RepoList from './components/RepoList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            githubAccount: 'godaddy',
            repoData: []
        };
    }

    updateAccount(accountName) {
        this.setState({githubAccount: accountName || 'godaddy'});
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <h1>GitHub Repo List</h1>

                <form>
                    <label htmlFor="accountInput">Enter a GitHub Account: </label>
                    <input id="accountInput" placeholder={this.state.githubAccount} onChange={event => {
                        this.dirtyAccountName = event.target.value
                    }}/>
                    <button onClick={e => {e.preventDefault(); this.updateAccount(this.dirtyAccountName);}}>Search</button>
                </form>
            </header>
            <div className="App-body">
                <table className="App-container">
                    <tr>
                        <td>
                            <h2>Repos for {this.state.githubAccount}</h2>
                            <RepoList githubAccount={this.state.githubAccount}/>
                        </td>
                        <td>
                            FUCK
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    };
}

export default App;
