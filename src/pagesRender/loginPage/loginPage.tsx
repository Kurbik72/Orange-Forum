import React from 'react';
import login from '.././../styles/login.module.css'
import logo from '../../assets/icons/Logo.png'

const LoginPage = () => {
    return (
        <div className={login.loginPage}>
    <div className = {login.logincontainer}>
    <h1>Вход в личный кабинет</h1>
    <label >E-mail</label>
    <input type="email" id="email" placeholder="Enter your e-mail"/>

    <label>Password</label>
    <input type="password" id="password" placeholder="Enter your pasword"/>

    <div className={login.rememberme}>
    <div className={login.customcheckbox}>
        <input type="checkbox" id="remember"/>
        <span></span>
        <label>Запомнить меня</label>
    </div>
    </div>
    <button>Войти</button>
    <div className={login.line}><a href="#">Забыли пароль?</a>
    </div>
    </div>
    </div>
    )
    }
    
    export default LoginPage;