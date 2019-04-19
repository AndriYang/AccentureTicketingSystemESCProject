import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createReply } from '../../store/actions/replyActions'


export class NewReplyQuery extends Component {
  state = {
    txt: '',
    email: {
      recipient: this.props.location.state.email,
      sender: this.props.location.state.authEmail,
      subject: 'RE: ' + this.props.location.state.title + " (CaseID: " + this.props.location.state.caseId + ")",
      text: ''
    },
    text: {
      recipient: this.props.location.state.phone,
      textmessage: ''
    }
  }


  sendEmail = _ => {
    const { email, text } = this.state;
    // fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
    //   .catch(err => console.error(err))
      // fetch(`https://ug-api.acnapiv3.io/swivel/email-services/api/mailer`) //query string url
      //   .catch(err => console.error(err))
      // const response = await fetch('/express_backend');
      // const body = await response.json();
      //
      // if (response.status !== 200) {
      //   throw Error(body.message)
      // }
      // return body;
      fetch(`http://localhost:4000/express_backend?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`).then(res=>console.log(res)).catch(err=>console.log(err));
      // this.callBackendAPI().then(res => console.log(res)).catch(err => console.log(err));
      fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
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
    console.log(this.props.location.state.email);
    console.log(this.props.location.state.authEmail);
    const { email, text } = this.state;
    const { reply } = this.props;
    return (
      <div className="container1">
            <div>
              <form onSubmit={this.handleSubmit} className="white">
                <h2 class="purple lighten-5">Feedback </h2>
                <label>Title</label>
                <h6>{this.props.location.state.title}</h6>
                <label>Description</label>
                <h6>{this.props.location.state.content}</h6>
                <div class="divider"></div>
                <h2 class="purple lighten-5"> Reply </h2>
                <label> Recipient </label>
                <h6>{this.props.location.state.email}</h6>
                <br />
                <label> Sender </label>
                <h6>{this.props.location.state.authEmail}</h6>
                <br />
                <label> Subject </label>
                <br />
                <input value={email.subject}
                  onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                <div  />
                <label> Your Phone Number </label>
                  <br/>
                  <h6>{this.props.location.state.phone}</h6>
                <label> Message </label>
                <br />
                <textarea id="textarea" rows={3} value={email.text, text.textmessage}
                  onChange={e => this.setState({
                    email: { ...email, text: "Hi " + this.props.location.state.authorFirstName +"," +'<br /><br />'
                      + e.target.value.replace(/(?:\r\n|\r|\n)/g, '<br />')
                      +"<br /><br /> Best regards, <br />" 
                      + this.props.profile.firstName + " " + this.props.profile.lastName },
                    text: {...text, textmessage: e.target.value} })} />
                <div  />
                <div class="row">
                  <div >
                    <button class="btn-small purple darken-3" id="emailBtn" onClick={this.sendEmail}><i class="large material-icons">mail_outline</i> Reply </button>
                  </div>
                </div>
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

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReplyQuery);
