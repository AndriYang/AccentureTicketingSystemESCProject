import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import FileUploader from "react-firebase-file-uploader";
import PreviewPicture from "./PreviewPicture"

class NewToDoListItem extends Component {
  state ={
    addFormVisible : false
  }

  handleClick = (e) =>{
    if(this.state.addFormVisible){
      this.setState({
        addFormVisible: false
      })
    }else{
      this.setState({
        addFormVisible: true
      })
    }

  }

  renderContent = () => {
  const { addFormVisible } = this.state;
  const { todo } = this.props;
  if (addFormVisible) {
    return (
      <div id="todo-add-form" className="col s10 offset-s1">
        <div className="card-content">
          <p>{ todo.content}</p>
          <PreviewPicture todo={todo}/>
        </div>
      </div>
    );
  }
};

  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return<Redirect to='/' />
    const { todoId, todo, checkedPassword, checkedTech, checkedRecruit, checkedOther } = this.props;
    //console.log(this.props);
    if(todo.sel=="it"){
      if(checkedTech==true){
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
                <div>{moment(todo.createdAt.toDate()).calendar()}</div>
              </div>
              <div class="offset-s6 left-align z-depth-0">
                <Link to='/reply' class="btn-small  purple darken-3"> Reply </Link>
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
                <div>
                  <button className="card-title  btn-flat" onClick={this.handleClick}>{ todo.title }</button>
                  {this.renderContent()}
                </div>
                <div className="card-action gret lighten-4 grey-text">
                  <div>Status: {todo.solveStatus}</div>
                  <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
                  <div>{moment(todo.createdAt.toDate()).calendar()}</div>
                </div>
                <div class="offset-s6 left-align z-depth-0">
                  <Link to='/reply' class="btn-small  purple darken-3"> Reply </Link>
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
                <div>
                  <button className="card-title  btn-flat" onClick={this.handleClick}>{ todo.title }</button>
                  {this.renderContent()}
                </div>
                <div className="card-action gret lighten-4 grey-text">
                  <div>Status: {todo.solveStatus}</div>
                  <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
                  <div>{moment(todo.createdAt.toDate()).calendar()}</div>
                </div>
                <div class="offset-s6 left-align z-depth-0">
                  <Link to='/reply' class="btn-small  purple darken-3"> Reply </Link>
                </div>
              </div>
            </div>
          );
        }else{return null}

      }else if (todo.sel=="other") {
        if(checkedOther==true){
          return (
            <div className="container section project-details">
              <div className="card z-depth-0">
                <div>
                  <button className="card-title  btn-flat" onClick={this.handleClick}>{ todo.title }</button>
                  {this.renderContent()}
                </div>
                <div className="card-action gret lighten-4 grey-text">
                  <div>Status: {todo.solveStatus}</div>
                  <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
                  <div>{moment(todo.createdAt.toDate()).calendar()}</div>
                </div>
                <div class="offset-s6 left-align z-depth-0">
                  <Link to='/reply' class="btn-small  purple darken-3"> Reply </Link>
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
