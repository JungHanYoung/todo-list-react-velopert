import React, { Component } from 'react';
import './TodoListTemplate.css';
import Palette from './Palette';
import Form from './Form';
import TodoItemList from './TodoItemList';

class TodoListTemplate extends Component {
    render() {
        return (
            <main className="todo-list-template">
                <div className="title">오늘 할 일</div>
                <section className="palette-wrapper">
                    <Palette 

                    />
                </section>
                <section className="form-wrapper">
                    <Form 

                    />
                </section>
                <section className="todos-wrapper">
                    <TodoItemList

                    />
                </section>
            </main>
        );
    }
}

export default TodoListTemplate;
