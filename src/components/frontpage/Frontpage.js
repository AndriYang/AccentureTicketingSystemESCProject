import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const Frontpage = () => {

  return (
    <form >

      <div className="card-content">
        <div className="row ">
          <div class="col s12 m12 l12 offset-s6 center-align ">
            <Link to='/admin' id="admin" class="btn-large  purple darken-3"> Admin </Link>
          </div>
        </div>
          <div class="offset-s6 center-align z-depth-0">
            <Link to='/guesscustomerquery' id="customer" class="btn-large  purple darken-3"> Customer </Link>
          </div>

      </div>

    </form>

  )
}

export default Frontpage
