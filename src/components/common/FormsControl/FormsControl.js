import React from 'react';
import { Redirect } from 'react-router';
import styles from './FormsControl.module.css'
import { Field } from 'redux-form';



const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error
    
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
//в input----достаем поле name у props.input --необходимо для целевой компоненты которую оборачивает ф-я FormControl
//в объекте meta что в пропсах есть поле (св-во) error--- meta.error куда выводится сообщение об ошибке, а также поле touched ---meta.touched в нем информация был тронут тег input в DOM
//child что в пропсах, при debugger дает indefined. child ---им будут <textarea {...input} {...restProps} />  и  <input {...input} {...restProps} />  которые оборачиваются ф-ей FormControl. Т.е. child нужен для того чтобы что-то положить внутрь FormControl








// export const Textarea = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}
//input, meta, child, ...restProps  ---прокидываются в пропсах от компоненты <Field component={Textarea} /> у которой в есть атрибут {Textarea}. Если поставить debugger перед return в ф-ии Textarea то в окне Sources можно увидеть объект с этими props
//...input----достаем поле name у props.input 
//в объекте meta есть поле (св-во) error--- meta.error куда выводится сообщение об ошибке, а также поле touched ---meta.touched в нем информация был тронут тег input в DOM
//child что в пропсах, при debugger дает indefined. child ---им будут <textarea {...input} {...restProps} />  и  <input {...input} {...restProps} />  которые оборачиваются ф-ей FormControl. Т.е. child нужен для того чтобы что-то положить внутрь FormControl














// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}






export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)
