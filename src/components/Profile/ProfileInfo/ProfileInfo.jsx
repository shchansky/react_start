import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (

        <div>

            {/* <div>
                <img src="https://koteiki.com/wp-content/uploads/2018/02/cat-3-104.jpg" />
            </div> */}

            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />

                <ProfileStatus status={"Hello my friends!"}/>  
                
                
            </div>


        </div>
    )

}


export default ProfileInfo;