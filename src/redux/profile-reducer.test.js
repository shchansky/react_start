import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"
import { render, screen } from '@testing-library/react';
import React from 'react';



let state = {
    posts: [
        { id: 1, likesCount: 324, message: "Hi, how are you" },
        { id: 2, likesCount: 33, message: "It's my first post!" },
        { id: 3, likesCount: 5343423, message: "goodbay" },
    ]
}



it('new post should be added', () => {
    //1.test data
    let action = addPostActionCreator("my new post")
    //2.action
    let newState = profileReducer( state , action );
    //3.expectaction
    expect (newState.posts.length).toBe(4)
});


it('message of new post should be correct', () => {
    //1.test data
    let action = addPostActionCreator("my new post")
    //2.action
    let newState = profileReducer( state , action );
    //3.expectaction
    expect (newState.posts[3].message).toBe("my new post")
});




it('after deleting lenght of messages should be decrement', () => {
    //1.test data
    let action = deletePost(1)
    //2.action
    let newState = profileReducer( state , action );
    //3.expectaction
    expect (newState.posts.length).toBe(2)
});


it('after deleting lenght of messages should not be decrement if Id is incorrect', () => {
    //1.test data
    let action = deletePost(1000)
    //2.action
    let newState = profileReducer( state , action );
    //3.expectaction
    expect (newState.posts.length).toBe(3)
});