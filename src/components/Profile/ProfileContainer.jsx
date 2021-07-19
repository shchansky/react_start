import React from 'react';
import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from 'react-redux';

import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';





class ProfileContainer extends React.Component {


  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.match.params.userId != prevProps.match.params.userId && this.refreshProfile()
  }

  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        savePhoto ={this.props.savePhoto}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth

})




export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)





// let AuthRedirectComponet = withAuthRedirect (ProfileContainer)
// let WithUrlDataContatinerComponet = withRouter(AuthRedirectComponet)
// export default connect(mapStateToProps, {
//   // setUserProfile 
//   getUserProfile
// })(WithUrlDataContatinerComponet);