import { Post } from "../../../core/types/postItemProps";

export const savePostsData = async (): Promise<Post[]> => {
    const url = "http://localhost:8000/posts";
    try {
        const response  = await fetch(url);
        const posts = await response.json(); 
        return posts.map((post: { tittle: string; tag: string[]; text: string }) => ({
            tittle: post.tittle,
            tag: post.tag,
            text: post.text,
        }));
    }
    catch(error){
        console.error("Ошибка при добавлении данных:",error);
        return [];
    }
}