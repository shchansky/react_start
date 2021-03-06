import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../utils/validators/validators';




const Dialogs = (props) => {
  let state = props.messagesPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d["name"]} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
  let newMessageBody = state.newMessageBody;
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  if (props.isAuth === false) return <Redirect to={'/login'} />
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messages}>
          {messagesElements}
        </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );

}

const maxLength30 = maxLengthCreator(30)
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          name={"newMessageBody"}
          validate={[required, maxLength30]}
          placeholder={"Enter your message!!!"}
        />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)


export default Dialogs