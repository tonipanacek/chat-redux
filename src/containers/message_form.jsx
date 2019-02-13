import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.username, this.state.value);
    this.setState({ value: '' });
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="message-form">
        <input
        type="text"
        className="form-control"
        autoComplete="off"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    username: state.username
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
