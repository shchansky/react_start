import React from 'react';
import { updateSendMessageCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(updateSendMessageCreator(newMessageBody))
    },
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)