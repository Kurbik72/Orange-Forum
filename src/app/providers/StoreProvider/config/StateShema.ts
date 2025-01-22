import {UserSchema } from "src/entities/User";
import { LoginSchema } from "src/features/AuthByUserName";
import { AvatarSchema } from "src/features/addAvatarInProfile";



export interface StateSchema{
loginForm?:LoginSchema;
user:UserSchema;

}