import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false, color: '#343a40' },
      { id: 1, text: 'JSX 사용하기!', checked: true, color: '#12b886' },
      { id: 2, text: '라이프 사이클 적용하기', checked: false, color: '#f03e3e' }
    ],
    colors:['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    selectedColor: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, selectedColor } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: selectedColor
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSetColor = (color) => {
    this.setState({
      selectedColor: color
    });
  }

  render() {
    const { input, todos, colors, selectedColor } = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSetColor
    } = this;
    return (
      <TodoListTemplate
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        onSetColor={handleSetColor}
        colors={colors}
        selectedColor={selectedColor}
      >
        <TodoItemList 
          todos={todos} 
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
