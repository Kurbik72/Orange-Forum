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
        { setModalActive(true)}
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
                <div className={post.inputTitle}>
                <label>
                    <h1>Enter a title</h1>
                <input className={post.input1__content} type="text" value={text} onChange = {onTextEdit} placeholder='Title' />
                </label>
                </div>
                <div className={post.textTitle}>
                <label>
                    <p>tell your story</p>
                <input className={post.yourStory} type="text" placeholder='your story' />
                </label>
                </div>
                <CreateBtn/>
                

            </div>
        </ModalWindow>
    </div>
    
)
}

export default postModule;
