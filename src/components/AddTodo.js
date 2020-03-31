import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component{
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        // just like vanilla JS it's going to submit to the actual file so to stop that we write the above syntax
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >
                <input type="text"
                 name="title"
                 style={{flex: '10', padding: '5px'}} 
                 value={this.state.title}
                 placeholder="Add Todo"
                 onChange = {this.onChange} 
                />
                <input type="button" value="Submit" onClick={this.onSubmit} className="btn" style={{flex: '1'}} />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
