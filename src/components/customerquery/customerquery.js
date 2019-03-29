import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createForm } from '../../store/actions/formActions'
const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

export class customerquery extends Component {
  state = {
    sel: '',
    email: '',
    txt: '',
    addFormVisible: false
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id] : e.target.value
    })

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
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createForm(this.state);
  }


  renderChatBot = () => {
  const { addFormVisible } = this.state;
  if (addFormVisible) {
    return (
      <div id="todo-add-form" className="col s10 offset-s1">
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/dabf61c4-4db6-44b3-9459-5517e7ad154e">
      </iframe>
      </div>
    );
  }
};

  render() {
    const { form } = this.props;
    return (
      <div className="container">
        <div style={divStyle}>
            <div>
              <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Contact Us</h5>
                <div class="row">
                  <div class ="col s3">
                      <label id= "category">Category:</label>
                      <select class="browser-default" id= "sel" onChange={this.handleChange}>
                        <option value="sel">Please Select One</option>
                        <option value="finance">Finance</option>
                        <option value="it">IT</option>
                        <option value="general">General</option>
                      </select>
                  </div>
                </div>

              <textarea id="txt" name="name" rows="8" cols="80" onChange={this.handleChange}></textarea>

              <button id="but">Submit</button>
              </form>
            </div>
            <div>
                <button id="open-chat-bot" onClick={this.handleClick}>Chat with AccenBot</button>
                {this.renderChatBot()}
            </div>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    createForm: (form) => dispatch(createForm(form))
  }
}

export default connect(null, mapDispatchToProps)(customerquery);
