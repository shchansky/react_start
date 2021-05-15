const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState = {


    users: [

        { id:1, photoUrl: 'https://sun9-31.userapi.com/c630423/v630423886/26b0/nGLPHwC5OAk.jpg?ava=1', followed: false, fullName: 'Misha', status: 'I am a boss', location: { city: 'Vladimir', country: 'Russia' } },
        { id:2, photoUrl: 'https://sun9-31.userapi.com/c630423/v630423886/26b0/nGLPHwC5OAk.jpg?ava=1', followed: true, fullName: 'Vasya', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
        { id:3, photoUrl: 'https://sun9-31.userapi.com/c630423/v630423886/26b0/nGLPHwC5OAk.jpg?ava=1', followed: false, fullName: 'Vova', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukrane' } },


    ],




}


const usersReducer = (state = initialState, action) => {



    switch (action.type) {
        case FOLLOW: 

        return {
            ...state, 
            // users: [...state.users]
            // users: state.users.map (u => u)
            users: state.users.map ( u => {
                if (u.id === action.userID) {
                    return {...u, followed: true}
                }
                return u;
            })
        }
        case UNFOLLOW: 
        return {
            ...state, 
            users: state.users.map ( u => {
                if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u;
            })
        }
        case SET_USERS: 
        return {...state, users: [...state.users, ...action.users]}
        default: return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer