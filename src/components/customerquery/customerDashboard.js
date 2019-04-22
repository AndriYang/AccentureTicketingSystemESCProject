import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import _ from "lodash";
import NewToDoListItem from "./customerDashboardItem";
import { Redirect } from 'react-router-dom'
import {Widget, addResponseMessage, addUserMessage, dropMessages} from 'react-chat-widget';
import {CometChat} from '@cometchat-pro/chat';
import config from '../../config/real-time-chat-config';
import 'react-chat-widget/lib/styles.css';
import {storage,database,auth} from '../../config/firebaseConfig'
import { firestoreConnect } from 'react-redux-firebase'
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";

const agentUID = config.agentUID;
const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";
const limit = 30;

var appID = "1424e7726e315b";
var apiKey = "8bc644764d77f50ef8661660302e0fd6623f4fb4";


export class CustomerDashboard extends Component {
  state = {
    addFormVisible: false,
    addFormValue: "",
    renderErrorMessage: false
  };

  componentDidMount() {
    addResponseMessage('Welcome to our store!');
    addResponseMessage('Are you looking for anything in particular?');

    let uid = localStorage.getItem("cc-uid");
    console.log("Component did mount.");
    console.log("uid in componentDidMount is ",uid);
    // check for uid, if exist then get auth token, login, create message listener and fetch previous messages
   if ( uid !== null) {
     console.log("in fetch auth token");
     this.fetchAuthToken(uid).then(
       result => {
         console.log('auth token fetched', result);
         CometChat.login(result.authToken)
         .then( user => {
           console.log("Login successfully:", { user });
           this.createMessageListener();
           this.fetchPreviousMessages();
        })
       },
       error => {
         console.log('Initialization failed with error:', error);
         this.setState({renderErrorMessage: true})
       }
     );
   }
  }

  fetchAuthToken = async uid => {
    console.log("in real fetchauthtoken");
    const response = await fetch(`/api/auth?uid=${uid}`)
    const result = await response.json()
    return result;
  }


  createMessageListener = () => {
    CometChat.addMessageListener(
      CUSTOMER_MESSAGE_LISTENER_KEY,
      new CometChat.MessageListener({
        onTextMessageReceived: message => {
          console.log("Incoming Message Log", { message });
          addResponseMessage(message.text);
        }
      })
    );
  }

  fetchPreviousMessages = () => {
    var messagesRequest = new CometChat.MessagesRequestBuilder()
    .setUID(agentUID)
    .setLimit(limit)
    .build();

    messagesRequest.fetchPrevious().then(
      messages => {
        console.log("Message list fetched:", messages);
        messages.forEach( message => {
          if(message.receiver !== agentUID){
            addResponseMessage(message.text);
          } else {
            addUserMessage(message.text)
          }
        });
      },
      error => {
        console.log("Message fetching failed with error:", error);
      }
    );
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    var textMessage = new CometChat.TextMessage(
      agentUID,
      newMessage,
      CometChat.MESSAGE_TYPE.TEXT,
      CometChat.RECEIVER_TYPE.USER
    );
    let uid = localStorage.getItem("cc-uid");
    console.log("uid in handleNewUserMessage is ",uid);

    if (uid === null) {
      console.log("creating a new user.");
      this.createUser().then(
        result => {
          console.log('auth token fetched', result);
          localStorage.setItem("cc-uid",result.uid)
          CometChat.login(result.authToken)
          .then(user => {
            console.log("Login successfully:", { user });
            CometChat.sendMessage(textMessage).then(
              message => {
                console.log('Message sent successfully:', message);
              },
              error => {
                console.log('Message sending failed with error:', error);
              }
            );
            CometChat.addMessageListener(
              CUSTOMER_MESSAGE_LISTENER_KEY,
              new CometChat.MessageListener({
                onTextMessageReceived: message => {
                  console.log("Incoming Message Log", { message });
                  addResponseMessage(message.text);
                }
              })
            );
          })
      },
      error => {
        console.log('Initialization failed with error:', error);
      })
    } else {
      // we have uid, do send
      CometChat.sendMessage(textMessage).then(
        message => {
          console.log('Message sent successfully:', message);
        },
        error => {
          console.log('Message sending failed with error:', error);
        }
      );
    }
  };

  componentWillUnmount() {
    CometChat.removeMessageListener(CUSTOMER_MESSAGE_LISTENER_KEY);
    CometChat.logout();
    dropMessages();
  }

  renderToDos() {
    const { projects } = this.props;
    var caseId = this.props.history.location.state.caseId;
    localStorage.setItem("cc-uid",caseId);
    var valid = false;
    if(projects!=undefined){
      for (var i = 0; i < projects.length; i++){
        if (projects[i].caseId==caseId){
          valid = true;
        }
      }
      if(!valid){
          return(<Redirect to='/invalidCaseId' />)
      }else{
        const toDos = _.map(projects, (value, key) => {
          return(
          <div>
            <NewToDoListItem key={key} todoId={key} todo={value} caseId={caseId}/>
            <Widget
              handleNewUserMessage={this.handleNewUserMessage}
              title='My E-commerce Live Chat'
              subtitle='Ready to help you'
            />
          </div>
        );});
        console.log(toDos)
        return toDos;
      }
    }
    else return null;
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
