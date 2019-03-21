import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { projects, auth } = this.props;
    if (!auth.uid) return<Redirect to='/' />

    return (
      <div className="dashboard container">
        <div  className="col s6 m6">
          <p>
            <label>
              <input type="checkbox" />
              <span>IT</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>Finance</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>General</span>
            </label>
          </p>

        </div>



          <div className="col s12 m6">
            <ProjectList projects={projects}/>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
