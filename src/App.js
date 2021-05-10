import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



import { BrowserRouter, Route } from 'react-router-dom';





const App = (props) => {




  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path='/profile' render={() => <Profile store ={props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />


        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
