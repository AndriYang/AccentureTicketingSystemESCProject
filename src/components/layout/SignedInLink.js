import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLink = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Ticket</NavLink></li>
      <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
      <li><NavLink to='/todo' className='btn btn-floating pink lighten-1'>
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
