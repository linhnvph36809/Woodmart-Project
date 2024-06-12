import instance from "../axios/instance";

export async function getAllPost(){
    return await instance.get('/posts').then(({data}) => data).catch(() => []); 
}