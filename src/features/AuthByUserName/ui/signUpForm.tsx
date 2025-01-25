import { useDispatch, useSelector } from 'react-redux';
import login from '../../../styles/login.module.css';
import { useCallback } from 'react';
import { authByUsername } from '../model/services/authByUsername';
import { getProfileInfo } from '../model/services/getProfileInfo';
import { useNavigate } from 'react-router-dom';
import { getLoginState } from '../model/selectors/getLoginState/getLoginState';
import { AppDispatch } from 'src/app/providers/StoreProvider/config/store';
import { loginActions } from '../model/slice/loginSlice';
import { createAccount } from '../model/services/createAccount';





const SignUpForm = () => { 
    const navigate = useNavigate();
    const dispatch:AppDispatch = useDispatch();
    const SignupForm = useSelector(getLoginState)
    const {username, password, error, isLoading} =  SignupForm 

    const onClickSignUp = useCallback(async () => {
        try{
            await dispatch(createAccount({username,password})).unwrap();
            await dispatch(getProfileInfo({}));
            navigate('/');
        }catch(e){
            console.log('error',e);
        }

    },[dispatch,navigate,password,username]);

    const onChangeUsername = useCallback((value: string) => {
            dispatch(loginActions.setUsername(value));
        }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
            dispatch(loginActions.setPassword(value));
        }, [dispatch]);



    
return (
    <div>
    <div className={login.loginPage}>
    <div className = {login.logincontainer}>
    <h1>Создай свой аккаунт!</h1>
    <label >Username</label>
    <input 
    type="email" 
    id="email" 
    placeholder="Enter your username" 
    onChange={(e) => onChangeUsername(e.target.value)}
    />

    <label>Password</label>
    <input 
    type="password" 
    id="password" 
    placeholder="Enter your pasword" 
    onChange={(e) => onChangePassword(e.target.value)}
    />
    <button onClick={onClickSignUp}>
    Создать аккаунт
    </button>
    </div>
    </div>
    </div>

)
}

export default SignUpForm
