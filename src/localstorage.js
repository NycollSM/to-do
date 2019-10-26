import React, { Component } from 'react';

class LocalStorage extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      task: [],
    };
  }
  componentDidMount() {
    this.fetchData;
  }
  ;
  fetchData() {
    console.log('localStorage working');
  } 
  componentWillUpdate(newData, newState) {
    localStorage.setItem('newTask', 'example');
  }
}

export default LocalStorage;
