import instance from "../axios/instance";
import { ILogin } from "../interfaces/Iauthentication";

export const login = async (user: ILogin) => {
    return await instance.post('/auth/login',user).then(({data}) => data).catch((error) => error ); 
}

export const postRegister = async (user: ILogin) => {
    return await instance.post('/auth/register',user).then(({data}) => data).catch((error) => error ); 
}


export const getUserById = async (id: string|number,token:string) => {
    return await instance.get('/users/'+id,{headers:{ 'Authorization': `Bearer ${token}` }})
    .then(({data}) => data).catch((error) => alert(error)); 
}


