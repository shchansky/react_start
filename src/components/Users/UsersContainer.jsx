import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,toggleFollowingProgress, getUsers } from '../../redux/users-reducer';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';





//контейнерная компонета 1-го уровня(иначе API-уровня, она является классовой) , которая делает ajaх запросы на сервер в методе componentDidMount() и непосредственно оборачивает призентационную компонету Users (через render() и return). Также через нее транзитом проходят пропсы от контейнерной компоненты 1-го уровня (connect)
class UsersContainer extends React.Component {
    componentDidMount() {

        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        //     this.props.toggleIsFetching(false);
        // });

        this.props.getUsers(this.props.currentPage, this.props.pageSize)


    }



    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.toggleIsFetching(false);
        //     });
    }
    render() {
        return <>

            {this.props.isFetching ? <Preloader /> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



// let withRedirect = withAuthRedirect (UsersContainer)
// export default connect(mapStateToProps,
//     {
//         follow, unfollow,
//         setCurrentPage,
//         toggleFollowingProgress,
//         getUsers
//     })
//     (withRedirect);




//альтернатива записи
// let withRedirect = withAuthRedirect (UsersContainer)
export default withAuthRedirect (connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers

    })
    (UsersContainer));