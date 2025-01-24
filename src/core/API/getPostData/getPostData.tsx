


export const getPostData = async ({tittle, tag, text,userId} : {tittle: string, tag: string[], text: string,userId:number}) => {
    const url = "http://localhost:8000/posts";
    const post = {
        tittle,
        tag,
        text,
        userId,
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