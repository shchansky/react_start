import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {

        // authAPI.me().then(response => {
        //     let { id, email, login } = response.data.data
        //     if (response.data.resultCode === 0) {
        //         this.props.setAuthUserData(id, email, login)
        //     }
        // });

        this.props.getAuthUserData();

    }


    render() {
        return < Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {
    //  setAuthUserData ,

    getAuthUserData



})(HeaderContainer)

