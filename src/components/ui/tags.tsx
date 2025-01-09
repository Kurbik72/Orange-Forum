import { useEffect } from 'react';
import modal from '../ui/modalToCreate/modal.module.css';
import { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import classNames from 'classnames';
import '../../styles/tags.css';
interface TittleInputProps {
    tag?: string[];
    setTag?: (value: string[]) => void
}

const tags: React.FC<TittleInputProps> = ({setTag, tag}) => {
return (
    <div className={modal.modal__tags}><TagsInput
                value={tag}
                onChange={setTag}
                placeHolder="Add your tags"
                /></div>
)
}

export default tags
