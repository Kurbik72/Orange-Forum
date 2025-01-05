import { useState } from 'react'
import post from './post.module.css'
import CreateBtn from '../../ui/button/button';
import CreateInput from '../../ui/createInput/createdInput';
import Avatar from '../../ui/profile/profile';
import ModalWindow from '.././../ui/modalToCreate/ModalWindow';
import PostList from '../postList/postList';
import {Post} from '../../../core/types/postItemProps';
const  postModule = () => {
    const [posts, setPosts] = useState<Post[]>([  
        {tittle: "Hi! I'm Mikhail",tag: "React",avatar: "/path/to/avatar.jpg",username: "Mikhail",views: "651,324",comments: "56",date: "3 weeks ago"},
    ]);
    const [tittle, setTittle] = useState('');
    const [text, setText] = useState('');
    const [modalActive, setModalActive] = useState(false);

    const addNewPost : (e:React.MouseEvent<HTMLButtonElement>) => void = (e) => {
        e.preventDefault();
    const newPost = {
        id: Date.now(),
        text,
        tittle,
    }
    setPosts([...posts, newPost]);
    }

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
        <CreateInput value = {tittle}  onChange={e=>setTittle(e.target.value)} onKeyDown={onKeyDown}/>
        <CreateBtn   onClick ={() => setModalActive(true)} onChange = {() => {onTextEdit}} />
        </div>

        <div className={post.posts}>
        <PostList posts={posts}/>    
        </div>


        <ModalWindow active = {modalActive} setActive = {setModalActive} >
            <div className={post.content}>
                <div className={post.inputTitle}>
                <label>
                    <h1>Enter a title</h1>
                <input
                className={post.input1__content} 
                type="text" 
                value={tittle} 
                onChange = {e => setTittle(e.target.value)} 
                placeholder='Title' />
                </label>
                </div>

                <div className={post.textTitle}>
                <label>
                    <p>tell your story</p>
                <input 
                className={post.yourStory}
                type="text" 
                placeholder='your story'
                value={text} 
                onChange={onTextEdit} />
                </label>
                </div>
                <CreateBtn onClick={addNewPost}/>
                

            </div>
        </ModalWindow>
    </div>
    
)
}

export default postModule;
