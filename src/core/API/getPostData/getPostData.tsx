


export const getPostData = async ({tittle, tag, text} : {tittle: string, tag: string[], text: string}) => {
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
        
        
    }
    catch{
        console.error("Ошибка при добавлении данных:");
    }
}