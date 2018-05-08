import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

class ModalBox extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <div>
          <Button className="btn btn-info margin-right" onClick={this.handleShow}>
              <i className="fa fa-edit">Edit</i>
          </Button>
          <Button className="btn btn-danger" onClick={this.handleClose}>
              <i className="fa fa-minus">Delete</i>
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                           
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  

  export default ModalBox;