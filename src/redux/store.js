import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";



// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, likesCount: 324, message: "Hi, how are you" },
//                 { id: 2, likesCount: 33, message: "It's my first post!" },
//                 { id: 3, likesCount: 5343423, message: "goodbay" },
//             ],
//             newPostText: ""
//         },
//         messagesPage: {
//             dialogs: [
//                 { id: 1, name: "Michail" },
//                 { id: 2, name: "Oxana" },
//                 { id: 3, name: "Slava" },
//                 { id: 4, name: "Lera" },
//                 { id: 5, name: "Lena" },
//                 { id: 5, name: "Lena" },
//             ],
//             messages: [
//                 { id: 1, message: "Hi" },
//                 { id: 2, message: "how are you?" },
//                 { id: 3, message: "Privet!!" },
//                 { id: 4, message: "Privet!!" },
//                 { id: 5, message: "Privet!!" },
//             ],
//             newMessageBody: "",
//         },
//         sidebar: {},
//     },
//     _callSubscriber() {//если закомментировать бага не будет
//         // console.log('state changed')
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },


//     dispatch(action) { 

//         this._state.profilePage = profileReducer (this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer (this._state.messagesPage, action);
//         this._state.sidebar = sidebarReducer (this._state.sidebar, action);

//         this._callSubscriber(this._state);

//     },
// }








 
// export default store;
// window.store = store;