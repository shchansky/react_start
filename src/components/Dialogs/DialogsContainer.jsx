import React from 'react';
import { updateSendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';






let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    // isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(updateSendMessageCreator())
    },
    updateNewMessageBody : (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}


// let AuthRedirectComponet = (props) => {
//   if (props.isAuth === false) return <Redirect to={'/login'} />
//   return <Dialogs {...props}/>
// }
let AuthRedirectComponet = withAuthRedirect (Dialogs)




const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponet);


export default DialogsContainer;