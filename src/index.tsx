import {render} from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import EditorContextProvider from './components/EditorContext';

render(
    
    <BrowserRouter>
    <EditorContextProvider>
    <App />
    </EditorContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
