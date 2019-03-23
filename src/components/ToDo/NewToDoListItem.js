import React, { Component } from "react";
import { connect } from "react-redux";
//import { completeToDo } from "../../store/newtodoactions";
import { Link } from 'react-router-dom'
import ProjectList from '../projects/ProjectList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


class NewToDoListItem extends Component {


  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return<Redirect to='/' />
    const { todoId, todo, checkedPassword, checkedTech, checkedRecruit } = this.props;
    //console.log(this.props);
    if(todo.sel=="it"){
      if(checkedTech==true){
        return(
          <div className="container section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{ todo.title }</span>
                <p>{ todo.content}</p>
              </div>
              <div className="card-action gret lighten-4 grey-text">
                <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
                <div>{moment(todo.createdAt.toDate()).calendar()}</div>
              </div>
              <div class="offset-s6 left-align z-depth-0">
                <Link to='/replyquery' class="btn-small  purple darken-3"> Reply </Link>
              </div>
            </div>
          </div>
        )
      }else{return null}

    }else if (todo.sel=="general") {
        if(checkedRecruit==true){
          return (
            <div className="container section project-details">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">{ todo.title }</span>
                  <p>{ todo.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                  <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
                  <div>{moment(todo.createdAt.toDate()).calendar()}</div>
                </div>
                <div class="offset-s6 left-align z-depth-0">
                  <Link to='/replyquery' class="btn-small  purple darken-3"> Reply </Link>
                </div>
              </div>
            </div>
          );
        }else{return null}
      }else if (todo.sel=="finance") {
        if(checkedPassword==true){
          return (
            <div className="container section project-details">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">{ todo.title }</span>
                  <p>{ todo.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                  <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
                  <div>{moment(todo.createdAt.toDate()).calendar()}</div>
                </div>
                <div class="offset-s6 left-align z-depth-0">
                  <Link to='/replyquery' class="btn-small  purple darken-3"> Reply </Link>
                </div>
              </div>
            </div>
          );
        }else{return null}
      }else{
        return (
          <div>
            <p>This should not happen. This means the request has an invalid category.</p>
          </div>
        )
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
