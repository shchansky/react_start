const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET__CURRENT_PAGE = 'SET__CURRENT_PAGE';
const SET__TOTAL_USERS_COUNT = 'SET__TOTAL_USERS_COUNT';



let initialState = {


    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 3,



}


const usersReducer = (state = initialState, action) => {



    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                // users: [...state.users]
                // users: state.users.map (u => u)
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }


        case SET__CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET__TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count}

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET__CURRENT_PAGE, currentPage:currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET__TOTAL_USERS_COUNT, count:totalUsersCount})


export default usersReducer