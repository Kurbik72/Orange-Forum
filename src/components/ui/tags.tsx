import React, { useState } from 'react';
import modal from '../ui/modalToCreate/modal.module.css';

interface TittleInputProps {
    tag?: string[];
    setTag?: (value: string[]) => void
}

const Tags: React.FC<TittleInputProps> = ({ setTag, tag = [] }) => {
    const [renderTag, setRenderTag] = useState<string[]>(tag);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        const next = value.split(',').map(t => t.trim()).filter(Boolean);
        setRenderTag(next);
        if (setTag) setTag(next);
    };

    return (
        <div className={modal.modal__tags}>
            <textarea
                className={modal.tags__input}
                value={renderTag.join(', ')}
                onChange={handleChange}
                placeholder='Add your tags'
            />
        </div>
    );
}

export default Tags;
