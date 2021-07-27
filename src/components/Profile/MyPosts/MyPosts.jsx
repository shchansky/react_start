import React, { PureComponent } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../../components/common/FormsControl/FormsControl'






// class MyPosts extends PureComponent {

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps != this.props || nextState != this.state
//   // }

//   render() {
//     let postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
//     let onAddPost = (values) => {
//       this.props.addPost(values.newPostText)
//     }


//     return (
//       <div className={classes.postsBlock}>
//         <h3>My posts</h3>
//         <AddNewPostFormRedux onSubmit={onAddPost} />
//         <div className={classes.posts}>
//           {postsElements}
//         </div>
//       </div>
//     )
//   }
// }


const MyPosts = React.memo(props => {
console.log ("RenderYO")
  let postsElements = props.posts.map(p =>  <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
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



const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} placeholder={"Post message"} />
      </div>
      <button>Add post</button>
    </form>
  )
}



let AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;