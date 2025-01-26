import React from 'react'
import Header from '../../../components/simpe_components/header/header';
import Blocks from 'editorjs-blocks-react-renderer';
import { useLocation } from 'react-router-dom';




export const PostPage = () => {

    const location = useLocation();

return (    
    <div>
    <Header/>
    <div style ={{height: '100vh', backgroundColor: '#1e252b'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em'}}>
        <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '75vw', backgroundColor: '#7C8A95'}}>

        </div>
        </div>
    </div>
    </div>
)
}

