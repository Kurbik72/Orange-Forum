import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/User";
import { USER_LOCAL_STORAGE_KEY } from "../../../../shared/consts/localstorage";
import { getAvatarInProfile } from "../../../../features/addAvatarInProfile/model/services/getAvatarInProfile";
import { addAvatarInProfile } from "../../../../features/addAvatarInProfile/model/services/addAvatarInProfile";
import { getProfileInfo } from "../../../../features/AuthByUserName/model/services/getProfileInfo";





const initialState : UserSchema = {
    authData:undefined,
    
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuthData:(state,action:PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem('token');
            if(user){
                state.authData
            }
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            if (state.authData) {
                state.authData.avatar = action.payload;
    
            }
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAvatarInProfile.fulfilled, (state, action: PayloadAction<User>) => {
            if (state.authData) {
                state.authData = action.payload;
            }
        })
        builder.addCase(addAvatarInProfile.fulfilled, (state, action: PayloadAction<string>) => {
            if (state.authData) {
                state.authData = { ...state.authData, avatar: action.payload }; // Обновляем объект
            }
        });
    },

})

export const {actions:userActions} = userSlice;
export const {reducer:userReducer} = userSlice;