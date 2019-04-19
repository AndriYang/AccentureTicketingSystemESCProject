import React, { Component } from 'react'
import { connect } from 'react-redux'
import { adminsignIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

export class AdminSignIn extends Component {
  state = {
    email: '',
    emailError: false,
    password: '',
    passwordError: false,
    count: 1,
    countError: false,
    // time:0,
    // timeError: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    if(e.target.id==='email'){
    this.validateEmail(e.target.value);
   }

   if(e.target.id==='password'){
    if(e.target.value.length < 6 || e.target.value===null){
      this.setState({
        passwordError:true
      })
    } else {
      this.setState({
        passwordError:false,
        password:e.target.value
      })
    }
 }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.count);
    this.props.adminsignIn(this.state);
    if (this.state.count>2){
      this.setState({
        countError: true
      })
    }
    if (this.state.count <=3) {
      this.setState({
        count: this.state.count+1
      })
    }
    // const createdAt= new Date();
    // console.log(createdAt.getMinutes());
    // if (this.state.time==0){
    //   this.setState({
    //     time: createdAt.getMinutes()
    //   })
    // }
    // if (this.state.time !=0) {
    //   const elapse = (createdAt.getMinutes()-this.state.time)<2;
    //
    //   this.setState({
    //     timeError: elapse
    //   })
    // }
    // console.log("timeError: " + this.state.timeError);
    // console.log("time: " + this.state.time);

  }

  validateEmail(email){
   const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
   const result = pattern.test(email);
   if(result===true){
     this.setState({
       emailError:false,
       email : email
     })
   }else{
     this.setState({
       emailError:true
     })
   }
 }

  render() {
    const { authError, auth } = this.props;
    const {email, password} = this.state;
    const isEnabled = this.state.emailError == false && password.length >5 && this.state.countError == false;
    if (auth.uid) return<Redirect to='/dashboard' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white formQuery" id="adminLoginForm">
          <h5 className="text-white  purple darken-3">Sign in</h5>
          <div className="input-field">
            <label className="grey-text text-darken-3" htmlFor="email" name="emaillable">someone@accenture.com</label>
            <input type="email" name= "email" id= "email"  class="validate" onChange={this.handleChange}/>
            {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}
          </div>
          <div className="input-field">
            <label className="grey-text text-darken-3" htmlFor="password">Password</label>
            <input type="password" id="password" class="validate" onChange={this.handleChange}/>
            {this.state.passwordError ? <span style={{color: "red"}}>Wrong Password</span> : ''}
          </div>
          <div className="input-field">
            <button disabled={!isEnabled} className="btn purple darken-3 text-white z-depth-0" id="button">Login</button>
            <div className="red-text center">
              {this.state.countError ? <span style={{color: "red"}}>Denied Login. Please contact the security!</span> : ''}
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
