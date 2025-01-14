import React from 'react'
import modal from '../modalToCreate/modal.module.css';
import classNames from 'classnames';
const ModalWindow = ({active,setActive,children}:{active:boolean,  setActive: (value: boolean) => void , children: React.ReactNode}) => {
const onCloseModal = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Escape'){
        setActive(false);
        }
}
return (
    
    <div
    className={classNames(modal.modal, { [modal.active]: active })}
    onClick={() => setActive(false)} onKeyDown={onCloseModal}>
        <div className={classNames(modal.modal__content , { [modal.active]: active })} onClick={(e) => e.stopPropagation()}>
{children}
        </div>
    
    </div>
)
}

export default ModalWindow;
