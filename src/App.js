import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Layout/Header';
import About from './components/Pages/About';

class App extends Component {
  //Toggle complete 
  markComplete = (id) => {
	  this.setState({todos: this.state.todos.map(todo => {
		  if(todo.id === id) {
			  todo.completed = !todo.completed
		  }
		  return todo;
	  })});
  }
  
  deleteTodo = (id)  => {
	  axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
	  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  
  addTodo = (title) => {
	  axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
	  .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
  }
  
  state = {
	todos: []
  }
  
  componentDidMount() {
	  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
	  .then(res => this.setState({ todos: res.data }))
  }
  
  render() {
	//console.log(this.state.todos);
    return (
      <Router>
	      <div className="App">
	      	<div className="container">
		      	<Header />
		      	<Route exact path="/" render={props => (
		      		<React.Fragment>
			      		<AddTodo addTodo={this.addTodo} />
				        <Todos 
				        	todos={this.state.todos} 
					        markComplete={this.markComplete} 
				        	deleteTodo={this.deleteTodo}/>	
		      		</React.Fragment>
		      		)} />
		      	<Route path="/about" component={About} />
	        </div>
	      </div>
      </Router>
    );
  }
}

export default App;
