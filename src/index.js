import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';


let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>

            <StoreContext.Provider value={store}>
                {/* <App state={store.getState()} dispatch={store.dispatch.bind(store)}  store={store} /> */}
                <App />
            </StoreContext.Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());




store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});


reportWebVitals();
