import React from 'react';
import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from 'react-redux';

import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }

  render() {
    // if (this.props.isAuth === false) return <Redirect to={'/login'} />
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}


// let AuthRedirectComponet = (props) => {
//   if (props.isAuth === false) return <Redirect to={'/login'} />
//   return <ProfileContainer {...props}/>
// }

let AuthRedirectComponet = withAuthRedirect (ProfileContainer)

// let mapStateToPropsForRedirect = (state) => ({
//   isAuth: state.auth.isAuth
// })

// AuthRedirectComponet = connect (mapStateToPropsForRedirect) (AuthRedirectComponet)



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})






let WithUrlDataContatinerComponet = withRouter(AuthRedirectComponet)
export default connect(mapStateToProps, {
  // setUserProfile 
  getUserProfile
})(WithUrlDataContatinerComponet);