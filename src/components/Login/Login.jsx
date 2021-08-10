import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators';
import { Input, CreateField } from '../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import style from "../common/FormsControl/FormsControl.module.css"


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>

            {CreateField("Email", "email", [required], Input)}
            {CreateField("Password", "password", [required], Input, { type: "password" })}
            {CreateField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && CreateField ("Symbols from image", "captcha", [required], Input, {}, {})}
           
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)