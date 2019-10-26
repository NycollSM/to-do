import React from 'react';
import './styles.css';


const FormTodo = () => (
  <div className="wrapper-form">
    <form action="">
      <label htmlFor="">Task Name 
        <input type="text" name="Task Name" id="name"/>
      </label>
      <label htmlFor="">Dealine
        <input type="date" name="date" id="date"/>
      </label>
      <label htmlFor="">Time
        <input type="time" name="time" id="time"/>
      </label>
      <label htmlFor="">Task Description
        <input type="text"/>
      </label>
      <input type="button" className="btn-form" value="Create TO-DO"/>
    </form>
  </div>
);

export default FormTodo;