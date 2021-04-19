import React, {Component} from 'react';

class RepoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.repoData.name;
        return <li>{name}</li>;
    }
}

export default RepoItem;