import React from 'react';
import { CreateField, Input, Textarea } from '../../common/FormsControl/FormsControl';
import { reduxForm } from 'redux-form'
import classes from './ProfileInfo.module.css';


const ProfileDataForm = ({ handleSubmit, error, ...props }) => {
    //error в пропсах прокидывается напрямик в форму ProfileDataReduxForm (оборачивает целевую к-ту ProfileDataForm), минуя контейнерную компоненту, (см.санку saveProfile с методом stopSubmit в profileReducer) 
    return (
        <form >
            <div>
                <button type="submit" onClick={handleSubmit}>save</button>
            </div>


            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            

            <div>
                <b>Full name</b>: {CreateField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>:
                {CreateField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>


            <div>
                <b>My proffesional skills</b>:
                {CreateField("My proffesional skills", "lookingForAJobDescription", [], Textarea)}
            </div>


            <div>
                <b>About me</b>:
                {CreateField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>



                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key} className={classes.contact}>

                        <b>{key}</b>: {CreateField(key, `contacts.${key}`, [], Input)}


                    </div>
                })}


            </div>
        </form>
    )
}



const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm