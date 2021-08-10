
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogs: [
        { id: 1, name: "Michail" },
        { id: 2, name: "Oxana" },
        { id: 3, name: "Slava" },
        { id: 4, name: "Lera" },
        { id: 5, name: "Lena" },
        { id: 5, name: "Lena" },
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "how are you?" },
        { id: 3, message: "Privet!!" },
        { id: 4, message: "Privet!!" },
        { id: 5, message: "Privet!!" },
    ],
}


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            };

        default:
            return state;
    }
}


export const updateSendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default messagesReducer