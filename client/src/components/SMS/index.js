import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';
import UserTitle from "../ModalTitle";

class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      submitting: false,
      error: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }

          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }
  render() {
    const { show, hide } = this.props;

    return (
      <Modal show={show}>
        <Modal.Header closeButton onClick={hide}>
          <Modal.Title>Send Reminder For: <UserTitle title={this.props.title} /></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            onSubmit={this.onSubmit}
            className={this.state.error ? 'error sms-form' : 'sms-form'}
          >
            <div>
              <label htmlFor="to" >Enter Your Phone Number:</label>
              <input
                placeholder="+1(___) ___-____"
                type="tel"
                name="to"
                id="to"
                value={this.state.message.to}
                onChange={this.onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Message:</label>
              <textarea
                placeholder="Send yourself a message so you don't forget about this activity!"
                name="body"
                id="body"
                value={this.state.message.body}
                onChange={this.onHandleChange}
              />
            </div>
            <button type="submit" onClick={this.props.changeSubmit} disabled={this.state.submitting}>Send Message</button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SMSForm;