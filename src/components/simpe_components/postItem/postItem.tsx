import React from 'react'
import postStyle from '../postItem/postItem.module.css';
import Profile from '../../ui/profile/profile';

import {PostItemProps} from '../../../core/types/postItemProps';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '../../../entities/User';

const postItem: React.FC<PostItemProps> = ({post}) => {

    const isAuth = useSelector(getUserAuthData);

return (

    <div className={ postStyle.post}>
        {post.tittle && post.tittle.length > 0  &&(
        <div className={postStyle.post__content}>
            <div className={postStyle.post__title}><h1>{post.tittle}</h1></div>
            {post.tag && post.tag.length > 0 &&(
            <div className={postStyle.tag__content}>
                {post.tag.map(tag => (<div key={tag} className={postStyle.post__tag}><p>{tag}</p></div>))}
            </div>
            )
            }
            <div className={postStyle.post__profile}>
                <div className={postStyle.post__avatar}>
            <Profile  username= {isAuth?.username} /> 
            </div>
            <div className={postStyle.post__statistic}>
                <p>{post.views} Views </p>
                <p>{post.comments} Comments </p>

            </div>
            </div>
            <div className={postStyle.post__date}>
            <p>{post.date}</p>
            </div>
        </div>
        )}
    </div>
    
)
}

export default postItem;
