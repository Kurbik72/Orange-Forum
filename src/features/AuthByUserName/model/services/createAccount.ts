import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from '../../../../entities/User';


interface loginByUsernameProps {
    username:string,
    password:string,
}
export const createAccount = createAsyncThunk<{token: string},loginByUsernameProps, {rejectValue:string}>(
    'signup/signUpByUsername',
    async (credentials, thunkAPI) => {
        try{
        const url = 'http://localhost:8000/register';
        const response = await axios.post<{token: string, user:User}>(url, credentials);
        
        if(!response.data){
            throw new Error();
        }
        localStorage.setItem('token', response.data.token);
        return response.data
        }
        catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },      
);


