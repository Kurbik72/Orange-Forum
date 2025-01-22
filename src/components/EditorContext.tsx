import {createContext,useRef,ReactNode  } from 'react'
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
import CodeTool from "@editorjs/code";
import Paragraph from '@editorjs/paragraph';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
// @ts-ignore   
import LinkTool from '@editorjs/link';
// @ts-ignore
import Raw from '@editorjs/raw';

import Quote from '@editorjs/quote';
// @ts-ignore
import Marker from '@editorjs/marker';
// @ts-ignore
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';



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
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                    config: {
                    placeholder:
                        'Lets write something',
                    },
                },
                embed: Embed,
                table: Table,
                list: List,
                warning: Warning,
                code: Code,
                linkTool: LinkTool,
                raw:Raw,
                quote: Quote,
                marker: Marker,
                checklist: CheckList,
                delimiter: Delimiter,
                inlineCode: InlineCode,
                simpleImage: SimpleImage,
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