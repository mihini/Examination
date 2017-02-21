import React, {Component} from 'react';
import Modal from 'react-modal';

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
          contentLabel="Modal"
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.props.onRequestClose}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>

    );
  }
}
export default PopUp;
