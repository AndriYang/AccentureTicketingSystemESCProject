import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePassword } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

export class ChangePassword extends Component {
  state = {
    newPassword: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changePassword(this.state);
    this.props.history.push('/dashboard')
  }



  render() {

    const { authError, auth } = this.props;
    if (!auth.uid) return<Redirect to='/' />

    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" id='loginForm'>
        <div className="input-field">
          <label htmlFor="password"> Current Password</label>
          <input type="password" id="password" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password"> New Password</label>
          <input type="password" id="newPassword" onChange={this.handleChange}/>
        </div>

        <div className="input-field">
          <button className="btn purple darken-3 text-white">Confirm</button>
        </div>
        </form>
      </div>

    )

  }
}



const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (creds) => dispatch(changePassword(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
