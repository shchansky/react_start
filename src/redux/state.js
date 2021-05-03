import {rerenderEntireTree} from "../render"

let state = {
    profilePage: {
        posts: [
            { id: 1, likesCount: 324, message: "Hi, how are you" },
            { id: 2, likesCount: 33, message: "It's my first post!" },
            { id: 3, likesCount: 5343423, message: "goodbay" },
        ],

    },

    messagesPage: {
        dialogs: [
            { id: 1, name: "Michail" },
            { id: 2, name: "Oxana" },
            { id: 3, name: "Slava" },
            { id: 4, name: "Lera" },
            { id: 5, name: "Lena" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "how are you?" },
            { id: 3, message: "Privet!!" },
            { id: 4, message: "Privet!!" },
            { id: 5, message: "Privet!!" },
        ],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5, 
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push (newPost);
    rerenderEntireTree(state);
}

export default state