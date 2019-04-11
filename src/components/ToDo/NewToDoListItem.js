import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import FileUploader from "react-firebase-file-uploader";
import PreviewPicture from "./PreviewPicture"
import { changeStatus } from '../../store/actions/statusActions'

class NewToDoListItem extends Component {
  state ={
    addFormVisible : false,
    redirect: false,
    authorFirstName: '',
    authorLastName: '',
    authorId: '',
    sel: '',
    title: '',
    content: '',
    email:'',
    image: '',
    imageURL: '',
    phone: '',
    caseId:0,
    toggle:false,
    solveStatus:'',
    createdAt:''
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

  handleStatus = (e) => {
    console.log("clicked");
    const {todo} = this.props;
    this.setState({
      addFormVisible : todo.addFormVisible,
      authorFirstName:  todo.authorFirstName,
      authorLastName: todo.authorLastName,
      authorId: todo.authorId,
      sel: todo.sel,
      title: todo.title,
      content: todo.content,
      email:todo.email,
      image: todo.image,
      imageURL: todo.imageURL,
      phone: todo.phone,
      caseId:todo.caseId,
      toggle:todo.toggle,
      solveStatus:todo.solveStatus,
      createdAt:todo.createdAt,
      id: todo.id
      }, function () {
      console.log(this.state.solveStatus);
      this.props.changeStatus(this.state);
    })
  }



  renderCard = ()=>{
    const { todoId, todo, checkedPassword, checkedTech, checkedRecruit, checkedOther } = this.props;
    return(
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div>
            <button className="card-title  btn-flat" id="titlename" onClick={this.handleClick}>{ todo.title }</button>
            {this.renderContent()}
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div id="solveStatus">Status: {todo.solveStatus}</div>
            <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
            <div>{moment(todo.createdAt.toDate()).format('LLL')}</div>
          </div>
          <div class="offset-s6 left-align z-depth-0">
            <button class="btn-small  purple darken-3" onClick={this.handleReply} id="replyButton">Reply</button>
            <button class="btn-small  purple darken-3" onClick={this.handleStatus} id="solveStatus">Solve</button>
          </div>
        </div>
      </div>
    )
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


handleReply=()=>{
  console.log("in handleReply")
  this.setState({redirect:true})
}

render() {
  if(this.state.redirect){
    const { todo, auth } = this.props;
    return(
      <Redirect to={{
  pathname: '/reply',
  state: { email: todo.email,
  authorFirstName: todo.authorFirstName,
  authorLastName: todo.authorLastName,
  content: todo.content,
  title: todo.title,
  image: todo.imageURL,
  phone: todo.phone,
  authEmail: auth.email,
  caseId: todo.caseId
  }
  }}
  />
    )
  }

  const { projects, auth } = this.props;
  if (!auth.uid) return<Redirect to='/' />
  const { todoId, todo, criteria, checkedProcessing, checkedSolved, checkedPassword, checkedTech, checkedRecruit, checkedOther, checkedRecruitment } = this.props;
  //console.log(this.props);
  if(criteria=="filtercategory"){
    if(todo.sel=="it"&&checkedTech==true){
        return(
          <div>
          {this.renderCard()}
          </div>
        );
    }else if (todo.sel=="general"&&checkedRecruit==true) {
          return (
            <div>
            {this.renderCard()}
            </div>
          );
      }else if (todo.sel=="finance"&&checkedPassword==true) {
          return (
            <div>
            {this.renderCard()}
            </div>
          );
      }else if (todo.sel=="recruitment"&&checkedRecruitment==true) {
          return (
            <div>
            {this.renderCard()}
            </div>
          );
      }else if (todo.sel=="other"&&checkedOther==true) {
          return (
            <div>
            {this.renderCard()}
            </div>
          );
      }else{
        return null
      }
  }else if(criteria=="filterprogress"){
    if(todo.solveStatus=="processing"&&checkedProcessing==true){
        return(
          <div>
          {this.renderCard()}
          </div>
        );
    }else if (todo.solveStatus=="solved"&&checkedSolved==true) {
          return(
            <div>
            {this.renderCard()}
            </div>
          );
      }else{
        return null
      }
  }else{
    return(
      <div>
      {this.renderCard()}
      </div>
    );
  }
}
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: (status) => dispatch(changeStatus(status))
  }
}
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(NewToDoListItem);
