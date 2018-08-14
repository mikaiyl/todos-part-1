import React, { Component } from 'react'

class TodoItem extends Component {
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

class Todolist extends Component {
    constructor(props) {
        super( props )
    }

    render() {
        return (
            this.props.todos.map( todo =>
                <TodoItem class={ todo.completed ? "completed" : "" } label={ todo.title } id={ todo.id } userId={ todo.userId } />
            )
        )
    }
}

export default Todolist
