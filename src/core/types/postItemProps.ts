export interface Post {
    id:number,
    tittle?: string;
    tag?: string[];
    user?:{username:string, avatar:string}
    views?: string;
    comments?: string;
    date?: string;
    userId:number;
}
export interface PostItemProps {
    post: Post;
    
}