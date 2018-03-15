import React, { Component } from 'react';
import './Form.css';

import { todo } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (text) => { return dispatch(todo.Create(text)); }
    }
}

class Form extends Component {

    state = {
        input: ''
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleCreate = () => {
        if(this.state.input === "undefined" && this.state.input === ''){
            return;
        }

        this.props.onCreate(this.state.input);
        this.setState({
            input: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleCreate();
        }
    }

    render() {
        const {
            handleKeyPress,
            handleChange
        } = this;
        return (
            <div className="form">
                <input value={this.state.input} onChange={handleChange} onKeyPress={handleKeyPress}/>
                <div className="create-button" onClick={this.handleCreate}>
                    추가
                </div>
            </div>
        );
    }
}

export default connect(undefined, mapDispatchToProps)(Form);
