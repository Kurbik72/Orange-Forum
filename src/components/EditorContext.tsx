import {createContext,useRef,ReactNode  } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

interface EditorContextType {
    initEditor: () => void;
    editorInstance: React.RefObject<EditorJS | null>;
}
export const EditorContext = createContext<EditorContextType | undefined>(undefined);

interface EditorContextProviderProps {
    children: ReactNode;
}
export  default function EditorContextProvider({children}: EditorContextProviderProps) {
    const editorInstance = useRef(null)
    const initEditor = () => {
        const editor = new EditorJS({
            holder:'editorjs',
            tools:{
                header: {
                    class: Header,
                    config: {
                        placeholder:'Tittle',
                    }
                },
            },
            
            
        })
        editorInstance.current = editor
    }
    return (
        <EditorContext.Provider value={{initEditor,editorInstance}}>
            {children}
        </EditorContext.Provider>
    );
}