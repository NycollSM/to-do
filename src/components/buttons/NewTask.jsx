import React, { Component } from 'react';
import Form from '../form';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  toggleHandler = () =>{
    const currentState = this.state.toggle; 
    this.setState({
      toggle: !currentState
    })
  }
  render() {
    let formTodo = null;
    if (this.state.toggle){
    }
    return (
      <button className="Btn-left" onClick={this.toggleHandler}>Create New Task</button>,
      <Form />
    )
  }

}


  export default CreateTask;