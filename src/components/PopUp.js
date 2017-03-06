import React, {Component} from 'react';
import Modal from 'react-modal';
import Form from './Form';

const popUpStyles = {
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: 9999
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class PopUp extends Component{
  constructor(){
    super();

    this.afterOpenModal = this.afterOpenModal.bind(this);

  }
  //setting style to popup
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  render(){
    return(
      <div>
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.onRequestClose}
          closeTimeoutMS={300}
          style={popUpStyles}
          contentLabel="Modalsss"
        >
          <button onClick={this.props.onRequestClose}>close</button>
          <h2 ref="subtitle">What muscles did you exercises today?</h2>
    

          <Form/>
        </Modal>
      </div>

    );
  }
}
export default PopUp;
