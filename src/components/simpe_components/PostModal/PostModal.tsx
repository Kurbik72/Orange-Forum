import React from 'react';
import modal from '../../ui/modalToCreate/modal.module.css';
import classNames from 'classnames';
import Avatar from '../../ui/profile/profile';
import CreateBtn from '../../ui/button/button';
import cross from '../../../assets/icons/remove.png';
import { useContext, useEffect, useRef } from 'react';
import { EditorContext } from '../../EditorContext';
import TittleInput from '../../ui/TittleInput';



type PostModalProps = {
    active: boolean;
    setActive: (value: boolean) => void;
    tittle: string;
    setTittle: (value: string) => void;
    text: string;
    onTextEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
    combinedChangeHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    tag: string[],
    setTag: (value: string[]) => void,
};
const maxLength =  120;
const PostModal: React.FC<PostModalProps> = ({
    active,
    setActive,
    tittle,
    setTittle,
    text,
    combinedChangeHandler,
    tag,
    setTag,
}) => {
    const {initEditor} = useContext(EditorContext);
    const editorRef = useRef(null);


    const onCloseModal = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
        setActive(false);
    }
    };
    useEffect(() => {
        if(!editorRef.current){
            initEditor();
            editorRef.current = true;
        }
        
    })
    

    return (
    <div
        className={classNames(modal.modal, { [modal.active]: active })}
        onClick={() => setActive(false)}
        onKeyDown={onCloseModal}
    >
        <div
        className={classNames(modal.modal__content, { [modal.active]: active })}
        onClick={(e) => e.stopPropagation()}
        >
        <div className={modal.modal__Header}>
            <h1>Post Editor</h1>
            <img src={cross} alt="cross" onClick={() => setActive(false)} />
        </div>
        <hr className={modal.modal__line} />
        <div className={modal.content}>
            <div  className={modal.modal__profile}>
            <Avatar src={''} alt={''} username={'Mikhail'} />
            </div>
            <div  className={modal.inputTitle}>
            <TittleInput tittle={tittle} setTittle={setTittle} />
            </div>
            <div className={modal.modal__tags}><textarea
            className={modal.tags__input}
                value={tag}
                onChange={(e) => setTag(e.target.value.split(',').map(t => t.trim()))}
                placeholder='Add your tags'
                /></div>
            <div  id = "editorjs" className={modal.textTitle} >
            </div>
            <div className={modal.modal__button}>
            <CreateBtn onClick={combinedChangeHandler} disabled ={tittle.length > maxLength || tittle.length === 0} />
            </div>
        </div>
        </div>
    </div>
    );
};

export default PostModal;