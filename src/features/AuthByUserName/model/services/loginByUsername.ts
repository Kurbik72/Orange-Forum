import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from 'src/entities/User';
import {userActions} from '../../../../entities/User/model/slices/userSlice';
import { USER_LOCAL_STORAGE_KEY } from "../../../../shared/consts/localstorage";

interface loginByUsernameProps {
    username:string,
    password:string,
}
export const loginByUsername = createAsyncThunk<User,loginByUsernameProps, {rejectValue:string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try{
        const url = 'http://localhost:8000/login';
        const response = await axios.post<User>(url, authData);
        
        if(!response.data){
            throw new Error();
        }
        localStorage.setItem("USER_LOCAL_STORAGE_KEY", JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data
        }
        catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },      
);


