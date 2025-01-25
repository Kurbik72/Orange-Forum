import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../../../../entities/User/model/slices/userSlice";







export const deleteAvatarThunk = createAsyncThunk(
    'user/avatar/delete',
    async (_, thunkAPI) => {
        try {
            const url = `http://localhost:8000/users/avatar`;
            const response = await axios.delete(url);

            if (!response.data) {
                throw new Error('No data received');
            }
            thunkAPI.dispatch(userActions.setAvatar(response.data.avatar));
            // Возвращаем данные пользователя, включая avatarUrl
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error delete avatar');
        }
    }
);
