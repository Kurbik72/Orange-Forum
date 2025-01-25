import { Post } from "../../../core/types/postItemProps";

export const savePostsData = async (): Promise<Post[]> => {
    const url = "http://localhost:8000/posts";
        const response  = await fetch(url);
        const posts = await response.json(); 
        if (!response.ok) {
            throw new Error(`HTTP ошибка: ${response.status}`);
        }
        return posts;
    
    
}
