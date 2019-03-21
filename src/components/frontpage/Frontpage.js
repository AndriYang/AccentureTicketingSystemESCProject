import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Frontpage = () => {

  return (
    <form c>

      <div className="card-content">
        <div className="row ">
          <div class="col s12 m12 l12 offset-s6 center-align ">
            <Link to='/admin' class="btn-large  purple darken-3"> Admin </Link>
          </div>
        </div>
        <div className="row">
          <div class="offset-s6 center-align">
            <Link to='/signin' class="btn-large  purple darken-3"> Existing Customer </Link>
          </div>
        </div>
        <div class="offset-s6 center-align z-depth-0">
          <Link to='/guesscustomerquery' class="btn-large  purple darken-3"> Guess </Link>
        </div>

      </div>

    </form>

  )
}

export default Frontpage
