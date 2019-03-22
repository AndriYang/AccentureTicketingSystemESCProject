import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTicket }  from '../../store/actions/ticketActions'
import { Redirect } from 'react-router-dom'


class guesscustomerquery extends Component {
  state = {
    authorFirstName: '',
    authorLastName: '',
    authorId: '',
    sel: '',
    title: '',
    content: '',
    email:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state)
    this.props.createTicket(this.state);
    //send to home page
    this.props.history.push('/aboutus')
  }

  render() {
    //if (!auth.uid) return<Redirect to='/signin' />
    return (
      <div className="container">
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
