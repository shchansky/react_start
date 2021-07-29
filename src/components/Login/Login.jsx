import React from 'react';
import { Field, reduxForm } from 'redux-form'

import { required } from '../../utils/validators/validators';
import { Input, CreateField } from '../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import style from "../common/FormsControl/FormsControl.module.css"






// const LoginForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
//             </div>
//             <div>
//                 <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"} />
//             </div>
//             <div>
//                 <label>
//                     <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
//                 </label>
//             </div>
//             {props.error && <div className={style.formSummaryError}>{props.error }</div>}
//             <button>Login</button>
//         </form>
//     )
// }
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
//CreateField см. в файле FormsControl.js . CreateField оборачивает целевую компоненту <Field .Аргументы "Email", "email", [required], Input и прочеие в ф-ии CreateField прокидываются в атрибуты placeholder, name, validate, Input  соотвественно компоненты <Field .> что приведена в файле FormsControl
//error ---- с сервера прокидывается в пропс сообщение об общей ошибке  -смотри код в auth-reducer.js Прокидывание происходит благодаря методу stopSubmit (из библиотеки redux-form), указанному в auth-reducer.js с привязкой к уникальному имени формы 'login'
// required- функция валидации формы-см.код в validators!!!
//captchaUrl --- прокинута в форму благодаря методу connect





const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        //console.log(formData)
        //{console.log(formData)}---здесь имеются все данные собранные в форме, эти данные можно задиспатчить в санку чтобы отправить на сревер
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)


        //.email, .password, .rememberMe, .captcha ---это атрибуты name каждой из компонент <Field .> (они сидят в теге form), которые вызывает ф-ия CreateField переедавая эти данные в аргументах 
        //formData (можно объявить любое название) ---это JSON объект в котором сидят все данные с формы (обозначена тегом form). В этом JSON объекте сформированы поля с данными имеющие названия  .email, .password, .rememberMe, .captcha благодаря атрибутам name
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
    // captchaUrl в <LoginReduxForm onSubmit={onSubmit} props={}/> появились благодаря connect в которых из mstp прокинули  captchaUrl (т.е. в кач-ве пропс)     Далее из LoginReduxForm, благодаря метому reduxForm, captchaUrl будет прокинута в форму LoginForm
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
    //captchaUrl прокидывается в LoginReduxForm (а потом в ветку form гобального state) через ф-ию Login с методом connect
})

export default connect(mapStateToProps, { login })(Login)