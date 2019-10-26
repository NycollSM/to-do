import React from 'react';
import Form from './components/form';
import Buttons from './components/buttons/';
import Data from './components/form/data';
import LocalStorage from "./LocalStorage";
class App extends React.Component() {


  render () {
    return (
      <div className="App">
        <div className="container">
          <Buttons />
          <Form />
          <Data />
        </div>
        <LocalStorage />
      </div>
      
   );
  }

}


export default App;
