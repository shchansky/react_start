import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateSendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {

  let state = props.store.getState().messagesPage;

 
 
  let onSendMessageClick = () => {
    props.store.dispatch(updateSendMessageCreator());
  }
  let onSendMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  

  return (
    
    <Dialogs updateNewMessageBody={onSendMessageChange}  sendMessage={onSendMessageClick} messagesPage={state}/>

  )

}



export default DialogsContainer