import { RouteProps } from "react-router-dom"
import { HomePageAsync } from "../../pagesRender/homepage/homepage.async";
import { LoginPageAsync } from "../../pagesRender/loginPage/loginPage.async";
import { ProfilePageAsync } from "../../pagesRender/Profile/Profile.async";
import { SignUpPageAsync } from "../../pagesRender/signupPage/signUpPage.async";


export enum AppRoutes{
    HOME='home',
    LOGIN='login', 
    PROFILE='profile',
    SIGNUP='signup',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/', 
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.SIGNUP]: '/signup',


    
}
export const routeConfig: Record<AppRoutes, RouteProps> ={
    [AppRoutes.HOME]: {
        path:RoutePath.home,
        element: <HomePageAsync />,
    },
    [AppRoutes.LOGIN]: {
        path:RoutePath.login, 
        element:<LoginPageAsync />,
    },
    [AppRoutes.PROFILE]: {
        path:RoutePath.profile, 
        element:<ProfilePageAsync />,
    },
    [AppRoutes.SIGNUP]:{
        path:RoutePath.signup,
        element:<SignUpPageAsync/>
    }


}