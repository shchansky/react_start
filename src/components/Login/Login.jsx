import React from 'react';
import { Field, reduxForm } from 'redux-form'

import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';


// const maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <label>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </label>
            </div>
            <button>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => { console.log(formData) }
    //{console.log(formData)}---здесь имеются все данные собранные в форме, эти данные можно задиспатчить в санку чтобы отправить на сревер

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}




export default Login