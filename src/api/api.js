import * as axios from 'axios';


// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6bf479bf-fcae-4561-a59e-07ba9dc0a182"
    }
});


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },


    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },


    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }



}





export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    // return axios.get(`https://social-network.samuraijs.com/api/1.0/follow?page=${currentPage}&count=${pageSize}`
    // return instance.get(baseUrl + `follow ? page = ${currentPage} & count=${pageSize}`)
    return instance.get(`follow ? page = ${currentPage} & count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}