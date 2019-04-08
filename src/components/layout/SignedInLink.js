import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

export const SignedInLink = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/changepassword' id="changePass">Change Password</NavLink></li>
      <li><NavLink to='/' id="logout" onClick={props.signOut}>Log Out</NavLink></li>
      <li><NavLink to='/newtodo' className='btn btn-floating pink lighten-1'>
        {props.profile.initials}
      </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLink)
