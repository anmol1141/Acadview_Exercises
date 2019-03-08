import React, { Component } from 'react';


import Todo from './Todo.js';

class App extends Component {
 state ={
   todos: [
     {id:0, item:'Play badminton'},
     {id:1, item:'Evaluate Assinments'}


   ]
 }
 deleteTodo = (id) => {
   let todos = this.state.todos.filter( todo => {
     return todo.id !== id
   })
   this.setState({
     todos:todos
   })
 }

  render() {
    return (
      <div classname="App Container">
      <h3 className="center purple-text">My TODO</h3>
      <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}


export default App;
