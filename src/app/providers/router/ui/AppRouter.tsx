import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from '../../../../routes/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        {Object.values(routeConfig).map(({element,path}) => (
        <Route 
        key = {path}
        element = {element}
        path = {path}
        />
        ))}
        </Routes>
        </Suspense>
    );
};
export default AppRouter;