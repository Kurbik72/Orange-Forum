import {createContext,useRef,ReactNode  } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
// @ts-ignore
import ColorPlugin from "editorjs-text-color-plugin";


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
            placeholder: "Type here",
            tools:{
                header: {
                    class: Header,
                    inlineToolbar: ["link", "marker", "color", "fontFamily"],
                    shortcut: "CMD+SHIFT+H",
                    tunes: ["alignmentTuneTool"]
                },
                image: {
                    class: SimpleImage,
                    inlineToolbar: true,
                    tunes: ["alignmentTuneTool"]
                },
                code: {
                    class: CodeTool,
                    inlineToolbar: true,
                    shortcut: "CMD+SHIFT+C"
                },
                delimiter: Delimiter,
                inlineCode: InlineCode,
                Color: {
                    class: ColorPlugin,
                    config: {
                        type: "text", // Определяет, где будет использоваться цвет (текст/фон)
                        colorCollections: [
                        "#FF5733",
                        "#33FF57",
                        "#3357FF",
                        "#F3FF33",
                        "#FF33F3",
                        "#33FFF3",
                        "#000000",
                        "#FFFFFF",
                        ],
                        defaultColor: '#FF1300',
                        customPicker: true ,
                    },
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