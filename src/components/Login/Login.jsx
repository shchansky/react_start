import React from 'react';
import { Field, reduxForm } from 'redux-form'

import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import style from "../common/FormsControl/FormsControl.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"} />
            </div>
            <div>
                <label>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
                </label>
            </div>


            {props.error && <div className={style.formSummaryError}>{props.error }</div>}








            <button>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        //console.log(formData)
        //{console.log(formData)}---здесь имеются все данные собранные в форме, эти данные можно задиспатчить в санку чтобы отправить на сревер
        props.login(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)