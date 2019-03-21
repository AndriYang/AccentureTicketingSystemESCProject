import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createForm } from '../../store/actions/formActions'


class guesscustomerquery extends Component {
  state = {
    sel: '',
    email: '',
    txt: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })

  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createForm(this.state);
  }


  render() {
    const { form } = this.props;
    return (
      <div className="container">

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
                <div className="input_email">
                  <label htmlFor="email">Email Address:</label>
                  <input type="text" id="email" onChange={this.handleChange}/>
                </div>
              <textarea id="txt" name="name" rows="8" cols="80" onChange={this.handleChange}></textarea>

              <button id="but">Submit</button>
              </form>
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

export default connect(null, mapDispatchToProps)(guesscustomerquery);
