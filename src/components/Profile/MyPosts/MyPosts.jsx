import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'




const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost()
    props.dispatch(addPostActionCreator());
  }

  let onPostCange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text)

    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }

    let action = updateNewPostTextActionCreator (text);
    props.dispatch(action);
  }



  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostCange} ref={newPostElement} value={props.newPostText} />
        </div>

        <button onClick={addPost}>add post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}


      </div>
    </div>
  )
}


export default MyPosts;