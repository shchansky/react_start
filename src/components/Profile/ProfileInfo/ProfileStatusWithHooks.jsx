import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';


// let arr=[0, () => {}]
// let [a, setA]=arr 

const ProfileStatusWithHooks = (props) => {



    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    const activateEditMode = () => {
        setEditMode(true);
    }


    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }



    const onStatusChange = (e) => {

        setStatus(e.currentTarget.value)

    }





    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "---------"} YO </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                        onBlur={deactiveEditMode}
                        autoFocus={true}
                        value={status} />
                </div>
            }
        </div>
    )

}





export default ProfileStatusWithHooks