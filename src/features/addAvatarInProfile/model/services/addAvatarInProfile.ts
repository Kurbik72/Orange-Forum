import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { AvatarSchema } from "../types/AvatarSchema";
import { USER_LOCAL_STORAGE_KEY } from "../../../../shared/consts/localstorage";
import { userActions } from "../../../../entities/User";


interface addAvatarInProfileProps {
    file: File; // Файл для загрузки
    userId: string; // ID пользователя
}



export const addAvatarInProfile = createAsyncThunk(
    'avatar/addAvatar',
    async ({file, userId}:addAvatarInProfileProps, thunkAPI) => {
        try{
        const url = 'http://localhost:8000/upload';


        const formData = new FormData();
        formData.append('file', file); // Ключ 'file' должен совпадать с тем, что ожидает сервер
        formData.append('userId', userId); // Добавляем userId
        const token = localStorage.getItem('token');
        const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`, 
                },
                withCredentials: true, // Если используются куки
            });
        if(!response.data.url){
            throw new Error();
        }

        return response.data.url
        }
        catch(e){
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },   
    
);


