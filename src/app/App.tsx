
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
        try{
        await  dispatch(userActions.initAuthData());
        await dispatch(getProfileInfo({}))
    }
    catch(e){
        
    }
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
            