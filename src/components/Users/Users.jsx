import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'






let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            

            props.setUsers(response.data.items)

        });


        // props.setUsers(
        //     [
        //         { id: 1, photoUrl: 'https://sun9-31.userapi.com/c`630423/v630423886/26b0/nGLPHwC5OAk.jpg?ava=1', followed: false, fullName: 'Misha', status: 'I am a boss', location: { city: 'Vladimir', country: 'Russia' } },
        //         { id: 2, photoUrl: 'https://sun9-31.userapi.com/c630423/v630423886/26b0/nGLPHwC5OAk.jpg?ava=1', followed: true, fullName: 'Vasya', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
        //         { id: 3, photoUrl: 'https://sun9-31.userapi.com/c630423/v630423886/26b0/nGLPHwC5OAk.jpg?ava=1', followed: false, fullName: 'Vova', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukrane' } },
        //     ]
        // )
    }

 

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;