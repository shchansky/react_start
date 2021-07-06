import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (

        <div>


            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />

                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>   */}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>  
                
                
            </div>


        </div>
    )

}


export default ProfileInfo;