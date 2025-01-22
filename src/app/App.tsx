
import app from './styles/app.module.css';
import { AppRouter } from './providers/router/index';
import { useDispatch } from 'react-redux';
import {  useEffect } from 'react';
import { userActions } from '..//entities/User';
import { getProfileInfo } from '../features/AuthByUserName/model/services/getProfileInfo';

const App = () => {
    
    const dispatch = useDispatch();

    useEffect ( () => {
    const asyncProfileData = async () => {
        await  dispatch(userActions.initAuthData());
        await dispatch(getProfileInfo({}))
    }
    asyncProfileData();
    },[dispatch]);

    return (
        <div className={app.app}>
            <AppRouter/>
        </div>
    );
};

export default App;
            