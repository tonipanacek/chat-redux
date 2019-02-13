import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message.jsx';
import MessageForm from '../containers/message_form.jsx';


class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return(
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="messages-container">
          {this.props.messages.map((message) => <Message key={message.id} message={message}/>)}
        </div>
        <MessageForm />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
