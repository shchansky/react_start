import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





const Dialogs = (props) => {

  let dialogsElements = props.statE.dialogs.map(d => <DialogItem name={d["name"]} id={d.id} />);
  let messagesElements = props.statE.messages.map(m => <Message message={m.message} />);


  let newMessageElement = React.createRef();

  let yourMessage = () => {
    let letter = newMessageElement.current.value;
    alert(letter)
  }

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

      <div>
      <textarea ref={newMessageElement}></textarea>
      </div>
      <button onClick={yourMessage}>add message</button>

    </div>
  );

}



export default Dialogs