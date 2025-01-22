import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import {userActions} from '../../../../entities/User/model/slices/userSlice';
import { User } from "../../../../entities/User";

interface loginByUsernameProps {
    username:string,
    password:string
}
export const authByUsername = createAsyncThunk<{token: string},loginByUsernameProps, {rejectValue:string}>(
    'login/loginByUsername',
    async (credentials, thunkAPI) => {  
        try{
        const url = 'http://localhost:8000/login';
        const response = await axios.post<{token: string, user:User}>(url, credentials);
        
        if(!response.data){
            throw new Error();
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        localStorage.setItem("token", response.data.token);



        thunkAPI.dispatch(userActions.setAuthData(response.data.user));


        return { token: response.data.token };
        }
        catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('неправильный пароль или юзернейм');
        }
    },      
);


