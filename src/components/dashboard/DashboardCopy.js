import React, { Component } from 'react'
import Notifcations from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import _ from "lodash";
import NewToDoListItem from "../ToDo/NewToDoListItem";

import styled from "styled-components";
import {SideNav, Nav, NavIcon } from "react-sidenav";
import { Icon } from "react-icons-kit";
import { ic_home as home } from "react-icons-kit/md/ic_home";
import { ic_reorder as simple } from "react-icons-kit/md/ic_reorder";
import { ic_donut_large as render } from "react-icons-kit/md/ic_donut_large";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer, Navigation, Body, Title } from "./containers";


const Text = styled.div`
  padding-left: 8px;
`;

const theme = {
  hoverBgColor: "#f5f5f5",
  selectionBgColor: "#f5f5f5",
  selectionIconColor: "#03A9F4"
};

export class Dashboard extends Component {
  state = {
    addFormVisible: false,
    addFormValue: "",
    checkedPassword: true,
    checkedRecruit: true,
    checkedTech: true,
    checkedOther: true,
    selectedPath:'',
    checkedProcessing:true,
    checkedSolved:true
  };

  onItemSelection = (arg) => {
        this.setState({ selectedPath: arg.path })
    }
  handleCheckTech = event =>{
    console.log("checked it")
    this.setState({checkedTech: !this.state.checkedTech});
  }
  handleCheckPassword = event =>{
    this.setState({checkedPassword: !this.state.checkedPassword});
  }
  handleCheckRecruit = event =>{
    this.setState({checkedRecruit: !this.state.checkedRecruit});
  }
  handleCheckOther = event =>{
    this.setState({checkedOther: !this.state.checkedOther});
  }
  handleCheckProcessing = event =>{
    this.setState({checkedProcessing: !this.state.checkedProcessing});
  }
  handleCheckSolved = event =>{
    this.setState({checkedSolved: !this.state.checkedSolved});
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
          checkedOther={this.state.checkedOther}
          checkedProcessing={this.state.checkedProcessing}
          checkedSolved={this.state.checkedSolved}
          criteria={this.state.selectedPath}/>
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

  renderNotifications(){
    if(this.state.selectedPath=="notifications"){
      const { projects, auth, notifications } = this.props;
      return(
        <div>
        <Notifcations notifications={notifications}/>
        </div>
      )
    }else{
      return null
    }
  }

  renderCheckBoxesCat(){
    if(this.state.selectedPath=="filtercategory"){
      return (
        <div className="row s8 m2" >
        <div onClick={this.handleCheckTech}>
        <button className="btn purple lighten-3 text-white" id="open-chat-bot" >
        IT
        </button></div>
        <div onClick={this.handleCheckPassword}>
        <button className="btn purple lighten-3 text-white" id="open-chat-bot" >
        Finance
        </button></div>
        <div onClick={this.handleCheckRecruit}>
        <button className="btn purple lighten-3 text-white" id="open-chat-bot" >
        General
        </button></div>
        <div onClick={this.handleCheckOther}>
        <button className="btn purple lighten-3 text-white" id="open-chat-bot" >
        Other
        </button></div>
        </div>
      )
    }
  }

  renderCheckBoxesProg(){
    if(this.state.selectedPath=="filterprogress"){
      return (
        <div className="row s8 m2" >
        <div onClick={this.handleCheckProcessing}>
        <button className="btn purple lighten-3 text-white" >
        Processing
        </button></div>
        <div onClick={this.handleCheckSolved}>
        <button className="btn purple lighten-3 text-white" >
        Solved
        </button></div>
        </div>
      )
    }
  }

  render() {
    //console.log(this.props);
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return<Redirect to='/' />

    return (
      <AppContainer>
      <Navigation>
      <SideNav theme={theme} defaultSelectedPath={"home"}
                onItemSelection={this.onItemSelection}>
        <Nav id="home">
          <NavIcon>
            <Icon icon={home} />
          </NavIcon>
          <Text>Home</Text>
        </Nav>
        <Nav id="basic">
          <NavIcon>
            <Icon icon={simple} />
          </NavIcon>
          <Text>All tickets</Text>
        </Nav>
        <Nav id="notifications">
          <NavIcon>
            <Icon icon={render} />
          </NavIcon>
          <Text>Notifications</Text>
        </Nav>
        <Nav id="filtercategory">
          <NavIcon>
            <Icon icon={render} />
          </NavIcon>
          <Text>Filter by Category</Text>
        </Nav>
        <Nav id="filterprogress">
          <NavIcon>
            <Icon icon={render} />
          </NavIcon>
          <Text>Filter by Progress</Text>
        </Nav>
      </SideNav>
      </Navigation>
      <Body>
          <div className="dashboard container">
            <div class="row" >
            {this.renderCheckBoxesProg()}
            {this.renderCheckBoxesCat()}
            {this.renderNotifications()}
              </div>
              <div class="divider"></div>
              <div><span class="flow-text">Tickets:</span></div>
              <div class="divider"></div>
              <div className="col s12 m6">
                {this.renderToDos()}
              </div>
          </div>
        </Body>
      </AppContainer>

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
