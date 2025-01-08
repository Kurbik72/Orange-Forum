import { useEffect } from 'react';
import modal from '../ui/modalToCreate/modal.module.css';
import { useState } from 'react';



interface TittleInputProps {
    tag?: string[];
    setTag?: (value: string[]) => void
}

const [renderTag, setRenderTag] = useState<string[]>([]);
const onAddTag = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    e.preventDefault(); 
    if(e.key === 'Enter' || e.code === 'NumpadEnter'){
        
        
    }

}

const tags: React.FC<TittleInputProps> = ({setTag, tag}) => {
return (
    <div className={modal.modal__tags}><textarea
            className={modal.tags__input}
                value={tag}
                onChange={(e) => setTag(e.target.value.split(',').map(t => t.trim()))}
                placeholder='Add your tags'
                /></div>
)
}

export default tags
