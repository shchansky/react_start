import React, { PureComponent } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../../components/common/FormsControl/FormsControl'





const MyPosts = React.memo(props => {
  console.log("RenderYO")
  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
})


const maxLength40 = maxLengthCreator(40)
let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newPostText"} validate={[required, maxLength40]} placeholder={"Post message"} />
      </div>
      <button>Add post</button>
    </form>
  )
}


let AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm)
export default MyPosts;