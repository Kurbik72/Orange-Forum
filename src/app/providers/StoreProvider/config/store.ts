import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateShema';
import { loginReducer } from '../../../../features/AuthByUserName/model/slice/loginSlice';
import { userReducer } from '../../../../entities/User/model/slices/userSlice';







export function createReduxStore(initialState?:StateSchema){
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm:loginReducer,
        user:userReducer
    };
    return configureStore<StateSchema>({
        reducer:rootReducers,
        devTools: true,
        preloadedState: initialState, 
        })
}



// Типизируем RootState и AppDispatch
export type RootState = ReturnType<typeof createReduxStore>['getState'];
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];