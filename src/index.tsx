import {render} from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import EditorContextProvider from './components/EditorContext';
import { StoreProvider } from "./app/providers/StoreProvider";

render(
    <StoreProvider>
        <BrowserRouter>
            <EditorContextProvider>
                <App />
            </EditorContextProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
