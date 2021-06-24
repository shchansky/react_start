import { applyMiddleware, combineReducers, createStore, } from "redux";



import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

//вылетает бага из-за composeWithDevTools()
// let store = createStore(reducers, applyMiddleware(thunkMiddleware), composeWithDevTools());

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;