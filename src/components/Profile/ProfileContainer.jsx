import React from 'react';
import classes from './Profile.module.css';

import Profile from './Profile';
import { connect } from 'react-redux';

import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

import { Redirect } from 'react-router-dom';






class ProfileContainer extends React.Component {

  componentDidMount() {


    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }

    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    //   .then(response => {
    //     this.props.setUserProfile(response.data);
    //   });


    // usersAPI.getProfile (userId).then(response => {
    //     this.props.setUserProfile(response.data);
    //   });

    this.props.getUserProfile(userId)


  }

  render() {

    if (this.props.isAuth === false) return <Redirect to={'/login'} />


    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}


let mapStateToProps = (state) => ({

  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth

})


let WithUrlDataContatinerComponet = withRouter(ProfileContainer)

export default connect(mapStateToProps, {

  // setUserProfile 


  getUserProfile

})(WithUrlDataContatinerComponet);