import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import {userActions} from '../../../../entities/User/model/slices/userSlice';
import { USER_LOCAL_STORAGE_KEY } from "src/shared/consts/localstorage";


export const getProfileInfo = createAsyncThunk(
    'profile/getProfileInfo',
    async (_:{}, thunkAPI) => {  
        try{

        const token = localStorage.getItem('token');
        const url = 'http://localhost:8000/getProfileInfo';
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(url);
        
        if(!response.data){
            throw new Error();
        }

        thunkAPI.dispatch(userActions.setAuthData(response.data));


        return response.data;
        }
        catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('ошибка');
        }
    },      
);


