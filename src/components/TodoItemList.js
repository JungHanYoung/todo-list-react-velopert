import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { todo } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggle: (id) => { return dispatch(todo.Toggle(id)); },
        onRemove: (id) => {return dispatch(todo.Remove(id)); }
    }
}

class TodoItemList extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todos !== nextProps.todos;
    // }
    render() {
        
        const { onToggle, onRemove } = this.props;
        //console.log(this.props.todos);
        const todoList = this.props.todos.map(
            ({ id, text, checked, color }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
            /**
             * ( todo ) => (
             *    <TodoItem
             *      {...todo}
             *      onToggle={onToggle}
             *      onRemove={onRemove}
             *      key={todo.id}
             *    />
             * )
             */
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemList);
