import { combineReducers, createStore, } from "redux";



import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./auth-reducer";



let reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore (reducers, composeWithDevTools());

window.store = store;

export default store;