import { usersAPI, profileAPI } from '../api/api'



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {


    posts: [
        { id: 1, likesCount: 324, message: "Hi, how are you" },
        { id: 2, likesCount: 33, message: "It's my first post!" },
        { id: 3, likesCount: 5343423, message: "goodbay" },
    ],
    newPostText: "",
    profile: null,
    status: ""


}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        };

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }


        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

 

// export const getUserProfile = (userId) => {
//     return (dispatch) => {
//         usersAPI.getProfile(userId).then(response => {
//             dispatch(setUserProfile(response.data));
//         });
//     }
// }


//или так
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}


export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}


export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    });
}



















export default profileReducer