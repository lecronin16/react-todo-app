import React, { Component } from 'react';

export default class ShowToDo extends Component {
    render = () => (
        <tr>
            <td>{this.props.item.action}</td>
            <td><input type="checkbox" checked={this.props.item.done} onChange={() => this.props.callback(this.props.item)}/>
            </td>
            <td> <button className="btn btn-light"> remove </button>
            </td>
        </tr>
    )}