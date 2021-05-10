import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateSendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';





const Dialogs = (props) => {

  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d["name"]} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} />);
  let newMessageBody = state.newMessageBody;





  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onSendMessageChange = (event) => {
    let body = event.target.value    
    props.updateNewMessageBody(body);
  }

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messages}>
          {messagesElements}
        </div>
      </div>

      <div>
        <div>
          <textarea value={newMessageBody} onChange={onSendMessageChange} placeholder="Enter your message" />
          </div>
        <div>
          <button onClick = { onSendMessageClick }>Send</button>
        </div>
      </div>



    </div>
  );

}



export default Dialogs