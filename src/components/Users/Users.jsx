import React from 'react';
import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {


    return <div>
        <Paginator currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize} />

        {
            props.users.map(u => <User user={u}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
                key={u.id} />
            )
        }
    </div >
}

export default Users; 