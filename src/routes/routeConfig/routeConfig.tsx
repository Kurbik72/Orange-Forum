import { RouteProps } from "react-router-dom"
import { HomePageAsync } from "../../pagesRender/homepage/homepage.async";
import { LoginPageAsync } from "../../pagesRender/loginPage/loginPage.async";


export enum AppRoutes{
    HOME='home',
    LOGIN='login',  
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/', 
    [AppRoutes.LOGIN]: '/login',
    
}
export const routeConfig: Record<AppRoutes, RouteProps> ={
    [AppRoutes.HOME]: {
        path:RoutePath.home,
        element: <HomePageAsync />,
    },
    [AppRoutes.LOGIN]: {
        path:RoutePath.login, 
        element:<LoginPageAsync />,
    }


}