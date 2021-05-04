let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, likesCount: 324, message: "Hi, how are you" },
                { id: 2, likesCount: 33, message: "It's my first post!" },
                { id: 3, likesCount: 5343423, message: "goodbay" },
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: "Michail" },
                { id: 2, name: "Oxana" },
                { id: 3, name: "Slava" },
                { id: 4, name: "Lera" },
                { id: 5, name: "Lena" },
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
    },
    _callSubscriber() {
        // console.log('state changed')
    },




    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },





    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    // dispatch ()




}









export default store;
window.store = store;