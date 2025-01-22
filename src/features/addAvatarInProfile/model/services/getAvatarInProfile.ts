import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../../../../entities/User/model/slices/userSlice";
import { User } from "../../../../entities/User/model/types/User";
import { AvatarSchema } from "../types/AvatarSchema";


interface getAvatarInProfileProps {
    userId: string;
}


export const getAvatarInProfile = createAsyncThunk(
    'user/getAvatarUrl',
    async ({ userId }: getAvatarInProfileProps, thunkAPI) => {
        try {
            const url = `http://localhost:8000/users/${userId}?timestamp=${Date.now()}`;
            const response = await axios.get<User>(url);

            if (!response.data) {
                throw new Error('No data received');
            }
            thunkAPI.dispatch(userActions.setAvatar(response.data.avatar));
            // Возвращаем данные пользователя, включая avatarUrl
            return response.data;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('Error fetching user data');
        }
    }
);
