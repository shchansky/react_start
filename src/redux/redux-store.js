import { applyMiddleware, combineReducers, createStore, } from "redux";



import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form"
import { compose } from 'redux';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



//исх. код
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));


//вылетает бага из-за composeWithDevTools()- при уст. Redux Dev Tools
// let store = createStore(reducers, applyMiddleware(thunkMiddleware), composeWithDevTools());


//исправил ошибку, Redux Dev Tools работает
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
  ));


window.__store__ = store;
//window.__store__.getState()


export default store;