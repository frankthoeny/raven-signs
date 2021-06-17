import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import Modal from '../../utils/Modal'
import CreateAgent from './CreateAgent'
import ShowAgent from './ShowAgent'
import EditAgent from './EditAgent'

class AgentModals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }


  render() {
    return (
      < >
      {(this.props.modalType=='create')?(
        < >
        <button className="btn btn-primary mr-4" onClick={this.toggleModal}>Add New Agent</button>
        <Modal title={this.props.title} show={this.state.isOpen} onClose={this.toggleModal}>
           <CreateAgent onClose={this.toggleModal} />
        </Modal>
        </ >
      ):('')}

      {(this.props.modalType=='show')?(
        < >
        <button className="btn btn-sm btn-outline-info" onClick={this.toggleModal}>{this.props.title}</button>
        <Modal id={this.props.id} title={this.props.title} show={this.state.isOpen} onClose={this.toggleModal}>
           <ShowAgent id={this.props.id} onClose={this.toggleModal} />
        </Modal>
        </ >
      ):('')}

      {(this.props.modalType=='edit')?(
        < >
        <button className="btn btn-sm btn-outline-info mr-4" onClick={this.toggleModal}>Edit</button>
        <Modal id={this.props.id} title={this.props.title} show={this.state.isOpen} onClose={this.toggleModal}>
           <EditAgent id={this.props.id} onClose={this.toggleModal} />
        </Modal>
        </ >
      ):('')}


      </ >
     )
   }
 }

export default AgentModals
