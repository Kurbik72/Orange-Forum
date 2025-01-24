
import { useDispatch, useSelector } from 'react-redux';
import login from '.././../../styles/login.module.css';
import { memo, useCallback } from 'react';
import { loginActions } from '../model/slice/loginSlice';
import { getLoginState } from '../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../model/services/loginByUsername';
import { authByUsername } from '../model/services/authByUsername';
import { AppDispatch } from '../../../app/providers/StoreProvider/config/store';
import { useNavigate } from 'react-router-dom';
import { getProfileInfo } from '../model/services/getProfileInfo';

interface LoginFormProps {
    
}

const LoginForm: React.FC<LoginFormProps> = memo (() => {
    const navigate = useNavigate();
    const dispatch:AppDispatch = useDispatch();
    const LoginForm = useSelector(getLoginState)
    const {username, password, error, isLoading} = LoginForm
    
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onKeyDown = useCallback(async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            try{
                await dispatch(authByUsername({username,password})).unwrap();
                await dispatch(getProfileInfo({}));
                navigate('/');
            }
            catch(e){
                
            }
        }
    },[username, password, navigate, dispatch]);

    const onLoginClick =useCallback(async  () => {
        try{
        await dispatch(authByUsername({username,password})).unwrap();
        await dispatch(getProfileInfo({}));
        navigate('/');
    }
    catch(e){
        
    }
    },[ dispatch,  password, username, !error, navigate]);
    
    


    return (
        <div className={login.loginPage}>
    <div className = {login.logincontainer}>
    <h1>Вход в личный кабинет</h1>
    <label >E-mail</label>
    <input 
    type="email" 
    id="email" 
    placeholder="Enter your e-mail" 
    onChange={(e) => onChangeUsername(e.target.value)}
    value={username}
    onKeyDown={onKeyDown}
    />

    <label>Password</label>
    <input 
    type="password" 
    id="password" 
    placeholder="Enter your pasword" 
    onChange={(e) => onChangePassword(e.target.value)}
    value={password}
    onKeyDown={onKeyDown}
    />

    <div className={login.rememberme}>
    <div className={login.customcheckbox}>
        <input
        type="checkbox"
        id="remember" 
        />
        <span></span>
        <label>Запомнить меня</label>
    </div>
    </div>
    <button
    onClick={onLoginClick}
    
    disabled = {isLoading}>
    Войти
    </button>
    <div className={login.line}><a href="#">Забыли пароль?</a>
    </div>
    </div>
    {error && <div className={login.error}><p>Неправильный пароль или имя пользователя</p></div>}
    </div>
    )
    })
    
    export default LoginForm;