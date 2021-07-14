import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JSApp from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



let rerenderEntireTree = () => {
    ReactDOM.render(<JSApp />, document.getElementById('root'));
}

rerenderEntireTree();
reportWebVitals();
