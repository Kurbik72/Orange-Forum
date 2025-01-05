import React from 'react'
import postStyle from '../postItem/postItem.module.css';
import Profile from '../../ui/profile/profile';
import {Post } from '../../../core/types/postItemProps';
import {PostItemProps} from '../../../core/types/postItemProps';
const postItem: React.FC<PostItemProps> = ({post}) => {
return (
    <div className={postStyle.post}>
        <div className={postStyle.post__content}>
            <div className={postStyle.post__title}><h1>{post.tittle}</h1></div>
            <div className={postStyle.post__tag}><p>{post.tag}</p></div>
            <div className={postStyle.post__profile}>
                <div className={postStyle.post__avatar}>
            <Profile src = {''} alt = {''} username= {post.username}/> 
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
    </div>
)
}

export default postItem;
