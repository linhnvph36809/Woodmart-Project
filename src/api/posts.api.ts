import instance from "../axios/instance";

export async function getAllPost(){
    return await instance.get('/posts').then(({data}) => data).catch(() => []); 
}

export async function getPostDetail(slug:string){
    return await instance.get('/posts/'+slug).then(({data}) => data).catch(() => []); 
}

export async function getTopics(){
    return await instance.get('/topics').then(({data}) => data).catch(() => []); 
}