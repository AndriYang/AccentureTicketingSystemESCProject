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
    checkedRecruitment: true,
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
    console.log("checked finance")
    this.setState({checkedPassword: !this.state.checkedPassword});
  }
  handleCheckRecruit = event =>{
    console.log("checked general")
    this.setState({checkedRecruit: !this.state.checkedRecruit});
  }
  handleCheckRecruitment = event =>{
    console.log("checked recruitment")
    this.setState({checkedRecruitment: !this.state.checkedRecruitment});
  }
  handleCheckOther = event =>{
    console.log("checked other")
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
          checkedRecruitment={this.state.checkedRecruitment}
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

  renderRealtimeChat(){
    console.log("in realtimechat")
    if(this.state.selectedPath=="realTimeChat"){
      return(

        <Redirect to='/realtimechatagent' />

      )
    }else{
      return null
    }
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
        <button className={this.state.checkedTech ? "btn purple lighten-1 text-white":"btn purple lighten-3 text-white"} id="open-chat-bot" >
        IT
        </button></div>
        <div onClick={this.handleCheckPassword}>
        <button className={this.state.checkedPassword ? "btn purple lighten-1 text-white":"btn purple lighten-3 text-white"} id="open-chat-bot" >
        Finance
        </button></div>
        <div onClick={this.handleCheckRecruit}>
        <button className={this.state.checkedRecruit ? "btn purple lighten-1 text-white":"btn purple lighten-3 text-white"} id="open-chat-bot" >
        General
        </button></div>
        <div onClick={this.handleCheckRecruitment}>
        <button className={this.state.checkedRecruitment ? "btn purple lighten-1 text-white":"btn purple lighten-3 text-white"} id="open-chat-bot" >
        Recruitment
        </button></div>
        <div onClick={this.handleCheckOther}>
        <button className={this.state.checkedOther ? "btn purple lighten-1 text-white":"btn purple lighten-3 text-white"} id="open-chat-bot" >
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
        <div id="status" onClick={this.handleCheckProcessing}>
        <button className={this.state.checkedProcessing ? "btn purple lighten-1 text-white":"btn purple lighten-3 text-white"} >
        Processing
        </button></div>
        <div id="status" onClick={this.handleCheckSolved}>
        <button className={this.state.checkedSolved ? "btn purple lighten-1 text-white":"btn purple lighten-3 text-white"} >
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
        <Nav id="realTimeChat">
          <NavIcon>
            <Icon icon={render} />
          </NavIcon>
          <Text>RealTime Chat</Text>
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
      <Body class="col">
          <div className="dashboard container">
            <div class="row" >
            {this.renderRealtimeChat()}
            {this.renderCheckBoxesProg()}
            {this.renderCheckBoxesCat()}
            {this.renderNotifications()}
              </div>
              <div class="divider"></div>
              <div><span class="flow-text">Tickets:</span></div>
              <div class="divider"></div>
              <div class="card purple lighten-5">
                <div className="col s12 m6" >
                  {this.renderToDos()}
                </div>
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
