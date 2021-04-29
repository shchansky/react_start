import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (

        <div>

            <div>
                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Red_Donatello.jpg/250px-Red_Donatello.jpg" />
            </div>

            <div className={classes.descriptionBlock}>
                ava+description
            </div>


        </div>
    )

}


export default ProfileInfo;