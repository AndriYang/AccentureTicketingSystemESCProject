import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import NewToDoListItem from "./NewToDoListItem";
import _ from "lodash";

class NewToDoList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: "",
    checkedPassword: true,
    checkedRecruit: true,
    checkedTech: true
  };

  // handleInputChange = event => {
  //   this.setState({ addFormValue: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   const { addFormValue } = this.state;
  //   const { addToDo } = this.props;
  //   event.preventDefault();
  //   addToDo({ title: addFormValue });
  //   this.setState({ addFormValue: "" });
  // };

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
        <span>Tech</span>
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
        <span>Password</span>
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
        <span>Campus Recruit</span>
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
          checkedPassword={this.state.checkedPassword}/>
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

  // componentWillMount() {
  //   this.props.fetchToDos();
  // }

  render() {
    //console.log(this.props);
    const { projects, auth } = this.props;
    const { addFormVisible } = this.state;
    //console.log(this.state);
    if (!auth.uid) return<Redirect to='/' />

    return (
      <div className="to-do-list-container">
        <div className="row">
          <p>Showing categories:</p>
          {this.renderCheckboxTech()}
          {this.renderCheckboxPassword()}
          {this.renderCheckboxRecruit()}
          {this.renderToDos()}
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}


export default compose(connect(mapStateToProps),firestoreConnect([{ collection: 'projects' }]))(NewToDoList)
