import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTicket }  from '../../store/actions/ticketActions'
import { Redirect } from 'react-router-dom'
const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

class guesscustomerquery extends Component {
  state = {
    authorFirstName: '',
    authorLastName: '',
    authorId: '',
    sel: '',
    title: '',
    content: '',
    email:'',
    addFormVisible: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleClick = (e) =>{
    if(this.state.addFormVisible){
      this.setState({
        addFormVisible: false
      })
    }else{
      this.setState({
        addFormVisible: true
      })
    }

  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state)
    this.props.createTicket(this.state);
    //send to home page
    this.props.history.push('/aboutus')
  }

  renderChatBot = () => {
  const { addFormVisible } = this.state;
  if (addFormVisible) {
    return (
      <div id="todo-add-form" className="col s10 offset-s1">
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/dabf61c4-4db6-44b3-9459-5517e7ad154e">
      </iframe>
      </div>
    );
  }
};

  render() {
    //if (!auth.uid) return<Redirect to='/signin' />
    return (
      <div className="container">
        <div >
                <form onSubmit={this.handleSubmit} className="white" id="createForm">
                  <h5 className="grey-text text-darken-3">Contact Us</h5>
                    <div className="input-field">
                      <label htmlFor="authorFirstName">First Name</label>
                      <input type="text" id="authorFirstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                      <label htmlFor="authorLastName">Last Name</label>
                      <input type="text" id="authorLastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" onChange={this.handleChange}/>
                    </div>
                  <div class ="col s3">
                      <label id= "category">Category:</label>
                      <select class="browser-default" id= "sel" onChange={this.handleChange}>
                        <option value="sel">Please Select One</option>
                        <option value="finance">Finance</option>
                        <option value="it">IT</option>
                        <option value="general">General</option>
                      </select>
                  </div>
                  <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <label htmlFor="content">Ticket Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                  </div>
                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                  </div>
                </form>
                <div>
                  <button id="open-chat-bot" onClick={this.handleClick}>Chat with AccenBot</button>
                  {this.renderChatBot()}
                </div>
          </div>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    createTicket: (ticket) => dispatch(createTicket(ticket))
  }
}

export default connect(null, mapDispatchToProps)(guesscustomerquery);
