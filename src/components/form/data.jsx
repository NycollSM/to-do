import React, { Component } from 'react';

class saveData extends Component {
  constructor (props) {
    super(props);
    this.state = {
      saved: false,

    }
  }
  modal () {
    return() => (
       <div>hola</div> 
    )
  
  }
   render(){
     const Modal = this.modal();
     return(
       <Modal />
       // <p>sdfghjk</p>
       
     )
   }

}

export default saveData;