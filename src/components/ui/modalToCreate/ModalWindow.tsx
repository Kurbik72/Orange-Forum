import React from 'react'
import modal from '../modalToCreate/modal.module.css';
import classNames from 'classnames';
const ModalWindow = ({active,setActive,children}:{active:boolean,  setActive: (value: boolean) => void , children: React.ReactNode}) => {

return (
    
    <div
    className={classNames(modal.modal, { [modal.active]: active })}
    onClick={() => setActive(false)}
        >
        <div className={classNames(modal.modal__content , { [modal.active]: active })} onClick={(e) => e.stopPropagation()}>
{children}
        </div>
    
    </div>
)
}

export default ModalWindow;
