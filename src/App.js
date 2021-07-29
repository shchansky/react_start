import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';

import LoginPage from './components/Login/Login';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeAPP, initialized } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy (() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy (() => import('./components/Profile/ProfileContainer'));






class App extends React.Component {
  componentDidMount() {
    this.props.initializeAPP();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className='app-wrapper' >
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>

            <Route path='/profile/:userId?' render={() => {return <React.Suspense fallback ={ <Preloader/> }  > <ProfileContainer /> </React.Suspense> } } />

            
            {/* <Route path='/dialogs' render={() => {return <React.Suspense fallback ={ <Preloader/> }  > <DialogsContainer /> </React.Suspense> } } /> */}
            <Route path='/dialogs' render={withSuspense (DialogsContainer)} />



            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
        </div>
      )
    }
  }
}


let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeAPP }))(App)
//обертка из withRouter является фишкой кода, если не сделать Preloader будет крутиться даже когда данные придут с сервера





// const JSApp = (props) => {
//   return <BrowserRouter>
//     <Provider store={store} >
//       <AppContainer />
//     </Provider>
//   </BrowserRouter>
// }
const JSApp = (props) => {
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default JSApp