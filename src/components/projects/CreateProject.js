import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject }  from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

export class CreateProject extends Component {
  state = {
    sel: '',
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state)
    this.props.createProject(this.state);
    //send to home page
    //this.props.history.push('/dashboard')
  }

  render() {
    const { auth } = this.props;
    //if (!auth.uid) return<Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" id="createForm">
          <h5 className="grey-text text-darken-3">Contact Us</h5>
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

const mapStateToProps =(state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
