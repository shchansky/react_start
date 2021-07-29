import { authAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //если null значит капча не обязательна
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }


        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })


export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })







export const getAuthUserData = () => async (dispatch) => {
    //getAuthUserData вызывается также в app-reducer, он диспатчить в sate isAuth: true , таким образом логизация подверждается
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

// export const login = (email, password, rememberMe) => (dispatch) => {
//     return authAPI.login(email, password, rememberMe).then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(setAuthUserData())
//         } else {
//             let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
//             dispatch(stopSubmit("login", { _error: message }))
//         }
//     });
// }
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        //response.data.resultCode === 0   ответ с сервера что мы авторизованы
        dispatch(setAuthUserData())
    } else {


        if (response.data.resultCode === 10) {
            //response.data.resultCode === 10 ----число 10 взято с докуиентации в пдф и применяется для капчи
            dispatch (getCaptchaUrl())
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: message }))
        //stopSubmit импопртируется из redux-form и необходим для останова отправки данных с формы; "login" это уникальное название формы в файле Login.js, которое приводится при оборачивании хоком reduxForm целевой компоненты возвращающей тег <form />; { _error: message }--- _error -форма получает ОБЩУЮ ОШИБКУ на всю систему(т.е. всю форму); в message прилетает текст ошибки с сервера потом этот message диспатчиьтся stopSubmit в форму "login" в файле Login.js
        //если вместо _error указать поле формы, соответсвующее атрибуту name и вместо message  указать в "" кастомный текст сообщения, то ошибка вылезет в этом поле, но так лучше делать т.к. это подсказка хакерам--ПОСМОТРИ ЕЩЕ КОД в FormControl
    }
}


export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}


export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
    //getCaptchaUrl дергается  в коде thunk-creator login

}


export default authReducer