import { useState, useEffect } from 'react'
import post from './post.module.css'
import CreateBtn from '../../ui/button/button';
import CreateInput from '../../ui/createInput/createdInput';
import Avatar from '../../ui/profile/profile';
import PostList from '../postList/postList';
import {Post} from '../../../core/types/postItemProps';
import PostModal from '../PostModal/PostModal';
import { getPostData } from '../../../core/API/getPostData/getPostData';
import { savePostsData } from '../../../core/API/savePostsData/savePostsData';
import Loading from '../../../assets/icons/loading.gif';

const  postModule = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [tittle, setTittle] = useState('');
    const [text, setText] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [tag, setTag] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
            const data = await  savePostsData();
            setPosts(data);
        }
        catch(error){
            setError(`Ошибка при загрузке данных: ${error.message || error}`);   
        }finally{
            setLoading(false);
        }
    };
        fetchPosts();
    }, []);
    

    const combinedChangeHandler = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try{
            // persist to backend and get created post
            const created = await getPostData({tittle, tag, text});

            // prepend server-created post to state so UI updates immediately
            setPosts(prev => [created, ...prev]);

            // close modal and reset inputs
            setModalActive(false);
            setTittle('');
            setText('');
            setTag([]);
        } catch (err) {
            // keep previous local state; report error
            setError(`Ошибка при добавлении поста: ${err?.message || err}`);
            console.error('Post create error:', err);
        }
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
        <CreateBtn   onClick ={() => setModalActive(true)} />
        </div>

        {loading ?
        ( <div className={post.loading}> <img src={Loading} alt="Loading" /></div>)
        : error ? (
            <div className={post.error}><h1>Произошла ошибка при отображении постов</h1></div>)
            :(
        <div className={post.posts}>
    <PostList posts={posts}/>    
        </div>
        )}
        

        <PostModal
        active={modalActive}
        setActive={setModalActive}
        tittle={tittle}
        tag = {tag}
        setTag = {setTag}
        setTittle={setTittle}
        text={text}
        onTextEdit={onTextEdit}
        combinedChangeHandler={combinedChangeHandler}
        />
    </div>
    
)
}

export default postModule;
