import React, { useState, useEffect } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm'


const ProfileInfo = ({ savePhoto, saveProfile, ...props }) => {


    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        const promise = saveProfile(formData)
        promise.then(() => { setEditMode(false) })
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
                {props.isOwner &&
                    <label className={classes.userPhotoLabel}>
                        <input className={classes.userPhotoFormInput} type={'file'} onChange={onMainPhotoSelected} />
                        <span className={classes.userPhotoFormBtn}>Load foto</span>
                    </label>}
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}


const ProfileData = ({ profile, goToEditMode, ...props }) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {!profile.lookingForAJob &&
                <div>
                    <b>My proffesional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)
                })}
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