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
            const data = await   savePostsData();
            setPosts(data); // Устанавливаем полученные данные
        }
        catch(error){
            setError("Ошибка при загрузке данных"+ error);
            
        }finally{
            setLoading(false);
        }
    };
        fetchPosts();
    }, []);
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    const combinedChangeHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    const newPost = {
        id: Date.now(),
        text,
        tag,
        tittle,
    }
    setPosts([...posts, newPost]);
    getPostData({tittle, tag, text});
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

        <div className={post.posts}>
        <PostList posts={posts}/>    
        </div>


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
