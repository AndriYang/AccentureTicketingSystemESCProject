import React, { Component } from 'react'
import { connect } from 'react-redux'
import { adminsignIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

export class AdminSignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.adminsignIn(this.state);
  }

  render() {
    const { authError, auth } = this.props;
    //if (auth.uid) return<Redirect to='/todo' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" id="adminLoginForm">
          <h5 className="grey-text text-darken-3">Sign in</h5>
          <div className="input-field">
            <label htmlFor="email">someone@accenture.com</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              { authError ? <p> {authError} </p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adminsignIn: (creds) => dispatch(adminsignIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn)
