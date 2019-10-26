import React, { Component } from 'react';

class ls extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      task: [],

    }
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    this.fetchData;
  };
  fetchData() {
    console.log('localStorage working');
  };

  componentWillUpdate(newData, newState){
    localStorage.setItem('newTask', 'example');
  }
}
