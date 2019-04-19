import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	state = {
			title: ''
	}
	
	onChange = (e) => this.setState({[e.target.name]: e.target.value});
	
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title: ''});
	}
	
  render() {
    return (
    	<form onSubmit={this.onSubmit} style={{display: "flex", padding: "20px 0px"}}>
    		<input type="text" 
    			value={this.state.title} 
    			onChange={this.onChange} name="title" style={{padding: "5px", flex: "10"}} placeholder="Add Todo..." />
    		<input type="submit" value="Submit" className="btn" style={{flex: "1"}}
    			/>
    	</form>
    )
  }
}
//PropTypes
AddTodo.propTypes = {
		addTodo: PropTypes.func.isRequired
}


export default AddTodo;
