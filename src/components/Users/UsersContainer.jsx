import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';


import * as axios from 'axios';
import Users from './Users';


import Preloader from '../common/Preloader/Preloader.jsx';






//контейнерная компонета 1-го уровня(иначе API-уровня, она является классовой) , которая делает ajaх запросы на сервер в методе componentDidMount() и непосредственно оборачивает призентационную компонету Users (через render() и return). Также через нее транзитом проходят пропсы от контейнерной компоненты 1-го уровня (connect)
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
            withCredentials: true
        })
            .then(response => {
               
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    }
    render() {
        return <>

            {this.props.isFetching ? <Preloader />  : null} 
                        
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow} />


        </>
    }
}


 



////контейнерная компонета 2-го уровня , которая через connect связывается со stor(обмен данными выполняется через параметры mapStateToProps и mapDispatchToProps)
//и оборачивает компоненту 1-го уровня UsersAPIComponent
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


//В целях оптимизации кода исключил let mapDispatchToProps. То что возвращала функция вставил напрямик в connect в виде объекта.
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },

//     }
// }





//оптимизируем код - вместо mapDispatchToProps в connect напрямик передаем объект из ссылок на action creator. 
//Action creatop переименовал в follow, unfollow, setUsers,setCurrentPage,  setTotalUsersCount, toggleIsFetching исключив в конце буквы АС
export default connect(mapStateToProps, 
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UsersContainer);