import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {

    initialized: false,

}


const appReducer = (state = initialState, action) => {


    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })


export const initializeAPP = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    // promise.then(() => {
    //     dispatch(initializedSuccess())
    // })
    //после того как промис dispatch(getAuthUserData()) зарезолвится  он вернет нам промис, у которого будет доступен метод then (в противном случае если у промиса resolve не было, то метод then не выполнится)  и только после этого будет задиспатчитена ф-я  initializedSuccess() через метод  у промиса который вернулся



    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
//если вдруг для аторизации нам необходимо сделать несколько независимых асинхронных диспатчей с асинхр. запросами на сервер и только после их завершения запустить инициализационный AC типа initializedSuccess(), применяем конструкцию Promise.all([promise]) вместо [promise] можно показать [promise1, promise2, promise3 .... ] заранее присвоив promise1, promise2, promise3 вызовы функций dispatch (.......)




}






export default appReducer