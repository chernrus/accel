import React, { Component } from 'react';

class FileMenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fileName: props.fileName,
        };
    }

  render() {
    return (
        <button className="nav-item" onClick={() => this.props.onClick(this.state.fileName)}>
           {this.state.fileName}
         </button>
    );
  }
}

export default FileMenuItem;
