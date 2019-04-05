import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import _ from "lodash";
import NewToDoListItem from "./customerDashboardItem";

class CustomerDashboard extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  renderToDos() {
    const { projects } = this.props;
    var caseId = this.props.history.location.state.caseId;
    const toDos = _.map(projects, (value, key) => {
      return(
      <div>
        <NewToDoListItem key={key} todoId={key} todo={value} caseId={caseId}/>
      </div>
    );});
    return toDos;
  }





  render() {
    //console.log(this.props);
    const { projects, auth } = this.props;
    // if (!auth.uid) return<Redirect to='/' />

    return (
      <div className="dashboard container">
        <div className="column">
          <div className="col s12 m6">
            {this.renderToDos()}
          </div>
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
)(CustomerDashboard)
