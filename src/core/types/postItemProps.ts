export interface Post {
    id?:number,
    tittle?: string;
    tag?: string;
    avatar?: string;
    username?: string;
    views?: string;
    comments?: string;
    date?: string;
}
export interface PostItemProps {
    post: Post;
    
}