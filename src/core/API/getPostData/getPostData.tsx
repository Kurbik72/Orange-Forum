


import { Post } from "../../../core/types/postItemProps";

export const getPostData = async ({tittle, tag, text} : {tittle: string, tag: string[], text: string}): Promise<Post> => {
    const url = "http://localhost:8000/posts";
    const post = {
        tittle,
        tag,
        text,
    }
    try {
        const response  = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // json-server returns the created object (with id)
        const created: Post = await response.json();
        return created;
    }
    catch(err){
        console.error("Ошибка при добавлении данных:", err);
        throw err;
    }
}