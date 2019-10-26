import React from 'react';
import Form from './components/form';
import Buttons from './components/buttons/';
import Data from './components/form/data';
import Ls from 'local-storage';

class App extends React.Component() {


  render () {
    return (
        <div className="App">
        <div className="container">
          <Buttons />
          <Form />
          <Data />
        </div>
      </div>
      <Ls />
   );
  }

}

 
  
  

export default App;
