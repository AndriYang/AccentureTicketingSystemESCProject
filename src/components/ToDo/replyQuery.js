import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createReply } from '../../store/actions/replyActions'


class replyQuery extends Component {
  state = {
    txt: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })

  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createReply(this.state);
  }


  render() {
    const { reply } = this.props;
    return (
      <div className="container1">
            <div>
              <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Reply</h5>
                <div className="row">
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
    createReply: (reply) => dispatch(createReply(reply))
  }
}

export default connect(null, mapDispatchToProps)(replyQuery);
