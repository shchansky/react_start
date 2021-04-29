import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
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
          {/* <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />    альтернатива записи кода вмнсто render*/}







          {/* <Route path='/profile' render={ () => <Profile posts={props.posts} />} />
          <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} /> */}







          {/* <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts} />} /> */}
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />} />
          {/* <Route path='/profile' render={ () => <Profile state={props["state"]["profilePage"]} />} />   ---альтернативное обращение к занчениям(данным) ассоциативного  масива (props) через ключи (свойсва) state и profilePage*/}





          {/* <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.dialogsPage.messages}/>} /> */}
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>} />





          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
          



        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
