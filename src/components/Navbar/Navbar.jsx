import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
// console.log (classes)

// let classes = {
//   "nav": "Navbar_nav__2TYTk",
//   "item": "Navbar_nav__2TYTkNavbar_item__2OTN9",
// }


// // делаем 2 класса у тега
// let c1 ="item";
// let c1 ="active";
//     //item active
// let s= c1 + " " + c2;
//     //или так
// let sNew= `${c1} ${c2}`;//новая запись всвязи с появлением ECMAScript 6 (см.шаблонные строки)  ``-это шаблонная строка;  js код внедряется с пом.фигурных скобок, пробел между {}  воспринимается как сторка; с1 и с2 это переменные; браузер превращает выражение ${c1} и ${c2} в строку , на выходе имеем item active. НА ВЫХОДЕ КОНКАТЕНАЦИЯ СТРОК С ПРОБЕЛОМ!!!!

//{`${classes.item} ${classes.excretion}`}>  первые фигургые скобки говорят что внутри jsx будет строка js, вторые скобки говорят что внутри строки будет еще js код



const Navbar = () => {
  return (
    <nav className={classes.nav}>
      {/* <div className= {classes.item +" "+ classes.excretion}>   альтернативный вариант записи  {`${classes.item} ${classes.excretion}`}*/}
      <div className={`${classes.item} ${classes.excretion}`}> 
      
        {/* <a href="/profile">Profile</a>     если оставить ссылку страница будет перзагржаться  <NavLink to="/profile">Profile</NavLink>-страница не перезагружается  NavLink это компонета to-атрибут компонеты  атрибуты по итогк превращаются в props*/}

        <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
      </div>

      
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
      </div>


      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}
export default Navbar