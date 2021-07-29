import { usersAPI, profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


let initialState = {
    posts: [
        { id: 1, likesCount: 324, message: "Hi, how are you" },
        { id: 2, likesCount: 33, message: "It's my first post!" },
        { id: 3, likesCount: 5343423, message: "goodbay" },
    ],
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
                //затирает поле формы ввода текста
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }

        }



        default: return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })



// export const getUserProfile = (userId) => (dispatch) => {
//     usersAPI.getProfile(userId).then(response => {
//         dispatch(setUserProfile(response.data));
//     });
// }
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}



// export const getStatus = (userId) => (dispatch) => {
//     profileAPI.getStatus(userId).then(response => {
//         dispatch(setStatus(response.data));
//     });
// }
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}


// export const updateStatus = (status) => (dispatch) => {
//     profileAPI.updateStatus(status).then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(setStatus(status));
//         }
//     });
// }
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}





export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}





export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        //_error -это общее сообщение об ошибке в библиотеке (приходит в response от сетвера см. Network/Responce) в форму; edit-profile это название формы ProfileDataReduxForm котрая оборачивает целевую к-ту ProfileDataForm в файле ProfileDataForm.js 
        //"edit-profile" - это название у формы, в нее прилетит пропс error



        //альтернативный хардкодовый вариант-cообщение выводим в поле facebook при наличии в нем ошибки. Домашка -надо распарсить строку (contacts и facebook- то что содержится в атрибуте name у input-см.инспектор элементов )
        // dispatch(stopSubmit("edit-profile", { "contacts": {"facebook": response.data.messages[0] }   }))



        return Promise.reject (response.data.messages[0])
        //изменения в форме не сохраняются в случае ошибки
    }
}




export default profileReducer