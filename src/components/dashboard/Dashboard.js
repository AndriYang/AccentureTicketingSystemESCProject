import React, { Component } from 'react'
import Notifcations from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import _ from "lodash";
import NewToDoListItem from "../ToDo/NewToDoListItem";

export class Dashboard extends Component {
  state = {
    addFormVisible: false,
    addFormValue: "",
    checkedPassword: true,
    checkedRecruit: true,
    checkedTech: true,
    checkedOther: true,
  };

  handleCheckTech = event =>{
    this.setState({checkedTech: !this.state.checkedTech});
  }

  renderCheckboxTech = () =>{
    return (<div>
      <form action="#">
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.checkedTech}
          onChange={this.handleCheckTech} />
        <span>IT</span>
      </label>
      <br />
    </form>
    </div>
  );
  }

  handleCheckPassword = event =>{
    this.setState({checkedPassword: !this.state.checkedPassword});
  }

  renderCheckboxPassword = () =>{
    return (<div>
      <form action="#">
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.checkedPassword}
          onChange={this.handleCheckPassword} />
        <span>Finance</span>
      </label>
      <br />
    </form>
    </div>
  );
  }

  handleCheckRecruit = event =>{
    this.setState({checkedRecruit: !this.state.checkedRecruit});
  }
  renderCheckboxRecruit = () =>{
    return (<div>
      <form action="#">
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.checkedRecruit}
          onChange={this.handleCheckRecruit} />
        <span>General</span>
      </label>
      <br />
    </form>
    </div>
  );
  }

  handleCheckOther = event =>{
    this.setState({checkedOther: !this.state.checkedOther});
  }
  renderCheckboxOther = () =>{
    return (<div>
      <form action="#">
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.checkedOther}
          onChange={this.handleCheckOther} />
        <span>Other</span>
      </label>
      <br />
    </form>
    </div>
  );
  }

  renderToDos() {
    const { projects } = this.props;
    const toDos = _.map(projects, (value, key) => {
      return(
      <div>
        <NewToDoListItem key={key} todoId={key} todo={value}
          checkedTech={this.state.checkedTech}
          checkedRecruit={this.state.checkedRecruit}
          checkedPassword={this.state.checkedPassword}
          checkedOther={this.state.checkedOther}/>
      </div>
    );});


    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <img
          alt="Nothing was found"
          id="nothing-was-found"
          src="/img/nothing.png"
        />
        <h4>You have completed all the tasks</h4>
        <p>Start by clicking add button in the bottom of the screen</p>
      </div>
    );
  }





  render() {
    //console.log(this.props);
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return<Redirect to='/' />

    return (
      <div className="dashboard container">
        <div class="row" >
            <div className="col s8 m2">
              <div className="text-deep-purple lighten-2"><span class="flow-text">Showing categories:</span></div>
              <div class="divider"></div>
            <div id="box1" class="col s3" onClick={this.handleCheckTech}>{this.renderCheckboxTech()}</div>
            <div id="box1" class="col s3" onClick={this.handleCheckPassword}>{this.renderCheckboxPassword()}</div>
            <div id="box1" class="col s3" onClick={this.handleCheckRecruit}>{this.renderCheckboxRecruit()}</div>
            <div id="box1" class="col s3" onClick={this.handleCheckOther}>{this.renderCheckboxOther()}</div>
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifcations notifications={notifications}/>
            </div>
          </div>

          <div class="divider"></div>
          <div><span class="flow-text">Tickets:</span></div>
          <div class="divider"></div>
          <div className="col s12 m6">
            {this.renderToDos()}
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
    {collection: 'notifications', limit:5, orderBy:['time', 'desc']}
  ])
)(Dashboard)
