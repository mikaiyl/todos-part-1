import React, { Component } from 'react'

class Todolist extends Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <li class={ this.props.class }>
                <div class="view">
                    <input type="checkbox" name="checkbox" class="toggle" />
                    <label>{ this.props.label }</label>
                    <button class="destroy"></button>
                </div>
            </li>
        )
    }
}

export default Todolist
