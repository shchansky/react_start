const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const messagesReducer =(state, action) => {

     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        
        case SEND_MESSAGE: 
            let body  = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:6, message: body});
            return state;

        default:
            return state; 
     }
}


export const updateSendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (bodyInfo) => ({type: UPDATE_NEW_MESSAGE_BODY, body: bodyInfo})



export default messagesReducer