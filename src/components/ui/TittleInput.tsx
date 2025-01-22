import React from 'react'
import modal from '../../components/ui/modalToCreate/modal.module.css';
import classNames from "classnames";

interface TittleInputProps {
    tittle?: string;
    setTittle?: (value: string) => void
}
const  TittleInput = ({tittle, setTittle}:TittleInputProps) => {
const maxLength =  120;


const  combinedChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    const text = e.target.value;

    // Обновляем значение текста
    setTittle(text);

    // Проверяем лимит символов
    if (text.length <= maxLength) {
        setTittle(text);
    }
};


return (
    <div>
    <textarea
            className={classNames(modal.input1__content, { [modal.error__content]: tittle.length > maxLength })}
                value={tittle}
                onChange={combinedChangeHandler}
                placeholder="Title"
            />
    <div className={modal.error__message}>
        {
            tittle.length > maxLength ? 
            <p>Maximum number of characters - 120</p> : ''
        }
    </div>
    </div>
)
}

export default TittleInput
