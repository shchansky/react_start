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
    //addPost  дергает addPostActionCreator в profile-reducer
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


//вызов валидатора  maxLengthCreator(40) где 40-максимальное кол-во символов
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
//handleSubmit приходит в пропс из reduxForm. !!!Показывать всегда для любого <form /> !!!!!
//name={"newPostText"}  создаст поле newPostText(для конкретного <Field />)  в общем JSON-файле со всеми данными формы (филдов в форме м.б. несколько ) 
//этот JSON объект , через handleSubmit попадет в аргумент ф-ии onAddPost (аргумент показан как values), 
//ф-ия onAddPost вызвается onSubmit контейнерной компонентой AddNewPostFormRedux созданной через reduxForm
//onAddPost попадает в дочернюю клмпонету AddNewPostForm в качетсве callback ф-ии


//required и maxLengthCreator (его дергает maxLength10) в компоненте <Field ...

//!!!! validate={[required, maxLength10]}  --- в массиве передаем все необходимые валидаторы (это функции из файла validators.js ) Такой синтаксис принят соглано документации redux-form


//component={Textarea} создан в FormsControl.js показан вместо component="textarea". Детальное описание см. в FormsControl.js

}



let AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm)
//profileAddNewPostForm - уникальное название поля, в котором будут храниться данные этой компонеты(приходят из <form /> целевой компоненты) в ветке form глобального store----store.getState().form.profileAddNewPostForm

export default MyPosts;