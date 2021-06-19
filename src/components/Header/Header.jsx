import React from 'react';
import './Header.module.css';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={css.header}>
            <img src="https://img.freepik.com/free-vector/colorful-market-logo-with-gradient_23-2148472540.jpg?size=338&ext=jpg" />
            <div className={css.loginBlog}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header

