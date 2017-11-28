import React, { Component } from 'react';
import FileMenuItem from './FileMenuItem';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'file1.csv',
        };
    }

    handleClick(name) {
        this.setState({current:name});
    }

    renderMenuItem(name) {
        return <FileMenuItem fileName={name} onClick={() => this.handleClick(name)}/>;
    }

    render() {
        return (
            <div>
                <p>Текущий <span>{this.state.current}</span></p>
                {this.renderMenuItem('file1.csv')}
                {this.renderMenuItem('file2.csv')}
                {this.renderMenuItem('file3.csv')}
            </div>
        );
    }
}

export default NavBar;
