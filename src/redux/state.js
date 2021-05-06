
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';




let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, likesCount: 324, message: "Hi, how are you" },
                { id: 2, likesCount: 33, message: "It's my first post!" },
                { id: 3, likesCount: 5343423, message: "goodbay" },
            ],
            newPostText: ""//если закомментировать бага не будет
        },
        messagesPage: {
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
            newMessageBody: "",//если закомментировать бага не будет
        },
    },
    _callSubscriber() {//если закомментировать бага не будет
        // console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // _addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // }, 

    dispatch(action) { //type:'ADD-POST' 
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

            //или так можно сделать:
            // this._addPost();

        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

            //или так можно сделать:
            // this._updateNewPostText (action.newText);
           


        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let body  = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id:6, message: body});
            this._callSubscriber(this._state);
        }
    },
}



// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   }
// }
//можно записать в таком синтаксисе
export const addPostActionCreator = () => ({ type: ADD_POST })


// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT, 
//     newText: text,
//   }
// }
//можно записать в таком синтаксисе
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, })



export const updateSendMessageCreator = () => ({ type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (bodyInfo) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: bodyInfo})

 
export default store;
window.store = store;