import { Post } from "../../../core/types/postItemProps";

export const savePostsData = async (): Promise<Post[]> => {
    const url = "http://localhost:8000/posts";
        const response  = await fetch(url);
        const posts = await response.json(); 
        if (!response.ok) {
            throw new Error(`HTTP ошибка: ${response.status}`);
        }
        // include id from backend and return newest-first (reverse order)
        return posts
            .map((post: { id?: any; tittle: string; tag: string[]; text: string }) => ({
                id: post.id,
                tittle: post.tittle,
                tag: post.tag,
                text: post.text,
            }))
            .reverse();
    
    
}
