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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
  ));


window.__store__ = store;

export default store;