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
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { EvalSourceMapDevToolPlugin } from 'webpack';


const  postModule = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [tittle, setTittle] = useState('');
    const [text, setText] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [tag, setTag] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null);
    const isAuth = useSelector(getUserAuthData);

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
    

    const combinedChangeHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    const newPost = {
        id: Date.now(),
        text,
        tag,
        tittle,
        userId:Number(isAuth.id),
        
    }  
    setPosts([...posts, newPost]);
    getPostData({tittle, tag, text, userId:Number(isAuth.id)});
    setModalActive(false);
    
    }
    
    

    const onButtonClick = () => {
        if(isAuth){
            setModalActive(true);
        }else{
            alert('Вы не авторизованы');
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
        <Avatar />
        <CreateInput value = {tittle}  onChange={e=>setTittle(e.target.value)} onKeyDown={onKeyDown}/>
        <CreateBtn   onClick ={onButtonClick} />
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

