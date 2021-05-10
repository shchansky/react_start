import React from 'react';
import { updateSendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';





const DialogsContainer = () => {



  return <StoreContext.Consumer>
    {
      store => {
        let onSendMessageClick = () => {
          store.dispatch(updateSendMessageCreator());
        }
        let onSendMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        }
        return <Dialogs updateNewMessageBody={onSendMessageChange} sendMessage={onSendMessageClick} messagesPage={store.getState().messagesPage} />
      }
    }

  </StoreContext.Consumer>


}



export default DialogsContainer