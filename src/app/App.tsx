
import app from './styles/app.module.css';
import {Route, Routes} from 'react-router-dom';
import { HomePageAsync } from '../pagesRender/homepage/homepage.async';
import { Suspense } from 'react';
import { AppRouter } from './providers/router/index';

const App = () => {
    return (
        <div className={app.app}>
            <AppRouter/>
        </div>
    );
};

export default App;
            