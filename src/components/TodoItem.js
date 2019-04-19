import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
	return {
		background: (this.props.todo.completed) ? '#FF0' : '#0FF',
		textDecoration: (this.props.todo.completed) ? 'line-through' : 'none',
		padding: '15px',
		borderBottom: '1px #CCC dotted'
	}
  }
  
  render() {
	const {id, title} = this.props.todo;
    return (
    	<div style={this.getStyle()}>
    		<p>
    			<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
    			{title}
    			<button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}> Delete </button>
    		</p>
    	</div>
    )
  }
}


export default TodoItem;

//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
	background: '#F00',
	color: '#FFF',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}
