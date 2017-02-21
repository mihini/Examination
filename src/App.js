import React, { Component } from 'react';
import './App.css';
import MyCalendar from './components/Calendar';
import PopUp from './components/PopUp';


class App extends Component {
  constructor(){
    super();

    this.state = {
      modalIsOpen:false
  };

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}

// Modal/PopUp functions
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
// End Modal/PopUp functions



  render() {
    return (
      <div className="App">
        <MyCalendar openModal={this.openModal}/>
        <PopUp
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
