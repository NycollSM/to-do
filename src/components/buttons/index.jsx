import React from 'react';
// import NewTask from './NewTask';
import './styles.css';

const BtnComponent = () => (
  <div className="wrapper-buttons">
    <button className="Btn-left">Create New Task</button>
    <button className="Btn-left">All Tasks</button>
    <button className="Btn-left">Pending Tasks</button>
    <button className="Btn-left">Completed Tasks</button>
  </div>
);

export default BtnComponent;