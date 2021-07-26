import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = ({ savePhoto, ...props }) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }




    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
                {props.isOwner && <label className={classes.userPhotoLabel}>
                    <input className={classes.userPhotoFormInput} type={'file'} onChange={onMainPhotoSelected} />
                    <span className={classes.userPhotoFormBtn}>Load foto</span>
                </label>}
                <div>
                    <div>
                        <b>Full name</b>: {props.profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {!props.profile.lookingForAJob &&
                        <div>
                            <b>My proffesional skills</b>: {props.profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                            return (
                                <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />)
                        })}
                    </div>
                </div>

                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>   */}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

            </div>
        </div>
    )
}




const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}


export default ProfileInfo;