import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createReply } from '../../store/actions/replyActions'


class NewReplyQuery extends Component {
  state = {
    txt: '',
    email: {
      recipient: '',
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })

  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createReply(this.state);
  }


  render() {
    const { email } = this.state;
    const { reply } = this.props;
    return (
      <div className="container1">
            <div>
              <form onSubmit={this.handleSubmit} className="white">
              <h2> Send Email </h2>
              <label> Recipient </label>
              <br />
              <input value={email.recipient}
                onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
              <div  />
              <label> Sender </label>
              <br />
              <input value={email.sender}
                onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
              <div  />
              <label> Subject </label>
              <br />
              <input value={email.subject}
                onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
              <div  />
              <label> Message </label>
              <br />
              <textarea rows={3} value={email.text} 
                onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
              <div  />
              <button onClick={this.sendEmail}> Send Email </button>
              </form>
            </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    createReply: (reply) => dispatch(createReply(reply))
  }
}

export default connect(null, mapDispatchToProps)(NewReplyQuery);
