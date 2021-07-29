export const required = value => {
    if (!!value)
        return undefined
    return "Field is required"
}
//value  это данные из <Field ... validate={[required, maxLength10]} .... /> , которые передаюся благодаря атрибуту validate={[required, maxLength10]}  (синтакис принят соглано документации redux-form 

//"Field is required" - подсвевается надписью input когда поле не заполнено


export const maxLengthCreator = (maxLength) => (value) => {

    if (value.length > maxLength)
        return `Max length is ${maxLength} symbols`
    return undefined
}

// аргумент maxLength-содержит максималное кол-во символов и передается при вызове maxLengthCreator в коде где объявлена форма <Field />
//value  это данные из <Field ... validate={[required, maxLength10]} .... /> , которые передаюся благодаря атрибуту validate={[required, maxLength10]}  (синтакис принят соглано документации redux-form )





// export const maxLength30 = value => {
//     if (value.length > 30)
//         return "Max length is 30 symbols"
//     return undefined
// }