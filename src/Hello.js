import React, { Component } from 'react';

class Hello extends Component {
    render() {
        let name = this.props.match.params.id
        return (
            <div>
                <h1>Hello, {name}</h1>
            </div>
        )
    }
}