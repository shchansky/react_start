import React from 'react';
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <label>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </label>
            </div>
            <button>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {

    const onSubmit = (formData) => {console.log(formData)}
    //{console.log(formData)}---здесь имеются все данные собранные в форме, эти данные можно задиспатчить в санку чтобы отправить на сревер

    return (
        <div> 
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


  

export default Login