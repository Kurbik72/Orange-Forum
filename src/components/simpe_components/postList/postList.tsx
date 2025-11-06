import React from 'react';
import PostItem from '../postItem/postItem';
import { Post } from '../../../core/types/postItemProps';
import postlist from './postList.module.css';
interface PostListProps {
    posts: Post[];
}
const postList: React.FC<PostListProps> = ({posts})     => {
return (
    <div>
    <div className={postlist.postList}>
            {posts.map((post, idx) => (
                <PostItem
                    post={post}
                    key={post.id ?? post.tittle ?? idx}
                />
            ))}
        </div>
    </div>
)
}

export default postList
