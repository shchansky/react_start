import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto (e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}


                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>   */}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />


            </div>


        </div>
    )

}


export default ProfileInfo;