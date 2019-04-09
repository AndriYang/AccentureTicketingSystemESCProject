import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import PreviewPicture from "../ToDo/PreviewPicture"
import {Widget, addResponseMessage, addUserMessage, dropMessages} from 'react-chat-widget';
import {CometChat} from '@cometchat-pro/chat';

import config from '../../config/real-time-chat-config';
import 'react-chat-widget/lib/styles.css';
import {storage,database,auth} from '../../config/firebaseConfig'
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";

const agentUID = config.agentUID;
const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";
const limit = 30;

var appID = "1424e7726e315b";
var apiKey = "8bc644764d77f50ef8661660302e0fd6623f4fb4";

export class NewToDoListItem extends Component {

  state = {
    caseId:0
  };
  renderContent = () => {
  const { todo } = this.props;
    return (
      <div id="todo-add-form" className="col s10 offset-s1">
        <div className="card-content">
          <p>{ todo.content}</p>
          <PreviewPicture todo={todo}/>
        </div>
      </div>
    );
  };

  render() {
    const { projects, auth } = this.props;
    const { todoId, todo, caseId } = this.props;
    //console.log(this.props);
    if (todo.caseId==caseId){
      return(
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div>
              <button className="card-title  btn-flat" onClick={this.handleClick}>{ todo.title }</button>
              {this.renderContent()}
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>Status: {todo.solveStatus}</div>
              <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
              <div>{moment(todo.createdAt.toDate()).format('LLL')}</div>
            </div>
          </div>
          <div>

          </div>
        </div>
        )
      }else{
        return null;
      }
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
  )(NewToDoListItem);
