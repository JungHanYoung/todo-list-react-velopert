import React from 'react';
import './TodoListTemplate.css';
import Form from './Form';
import Palette from './Palette';

const TodoListTemplate = ({ children, onKeyPress, onCreate, onChange, value, colors, onSetColor, selectedColor }) => {


        return (
            <main className="todo-list-template">
                <div className="title">오늘 할 일</div>
                <section class="palette-wrapper">
                    <Palette 
                        colors={colors}
                        selectedColor={selectedColor}
                        onSetColor={onSetColor}
                    />
                </section>
                <section className="form-wrapper">
                    <Form 
                        onKeyPress={onKeyPress}
                        onCreate={onCreate}
                        onChange={onChange}
                        value={value}
                    />
                </section>
                <section className="todos-wrapper">
                    { children }
                </section>
            </main>
        );
    
}

export default TodoListTemplate;
