import { USER_LOCAL_STORAGE_KEY } from "../../../shared/consts/localstorage";



export const getPostData = async ({tittle, tag, text} : {tittle: string, tag: string[], text: string}) => {
    const url = "http://localhost:8000/posts";
    const post = {
        tittle,
        tag,
        text,
        ...(tag.length > 0 && { tag }),
    }
    try {
        const token = localStorage.getItem('token');
        const response  = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify(post),
            
        });
    }
    catch{
        console.error("Ошибка при добавлении данных:");
    }
}