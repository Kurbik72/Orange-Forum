import { useState } from 'react'
import post from './post.module.css'
import CreateBtn from '../../ui/button/button';
import CreateInput from '../../ui/createInput/createdInput';
import Avatar from '../../ui/profile/profile';
import PostItem from '../postItem/postItem';
import ModalWindow from '.././../ui/modalToCreate/ModalWindow';


const  postModule = () => {
    const [modalActive, setModalActive] = useState(false);
    const [text, setText] = useState('');
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter')
        { setModalActive(true)};
    }
    const onTextEdit = (e:React.ChangeEvent<HTMLInputElement>) => 
    {
setText(e.target.value)
    }
return (
    <div className={post.PostSectionStyles}>
        <div className={post.line}>
        <Avatar src = {''} alt = {''} />
        <CreateInput value = {text}  onChange={onTextEdit} onKeyDown={onKeyDown}/>
        <CreateBtn onClick ={() => setModalActive(true)} onChange = {() => {onTextEdit}} />
        </div>
        <div>
        <PostItem/>
        </div>

        <ModalWindow active = {modalActive} setActive = {setModalActive} >
            <div className={post.content}>
                <input type="text" value={text} onChange = {onTextEdit} />
            </div>
        </ModalWindow>
    </div>
    
)
}

export default postModule;
