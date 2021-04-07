import React, { Component } from 'react';

export default class Paragraph extends Component {
    render() {
        return (
            <div className="paragraphs">
                {this.props.data.map(paragraph => (
                    <div key={paragraph.id}>{paragraph.text}</div>
                ))}
            </div>
        )
    }
}