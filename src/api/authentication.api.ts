import instance from "../axios/instance";
import { ILogin } from "../interfaces/Iauthentication";

export const login = async (user: ILogin) => {
    return await instance.post('/auth/login',user).then(({data}) => data).catch((error) => error ); 
}

export const loginGoogle = async () => {
    return await instance.get('/auth/google',).then(({data}) => data).catch((error) => error ); 
}

export const logout = async (user: ILogin,token:string) => {
    return await instance.post('/auth/logout',user,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => error ); 
}

export const lostPassword = async (email: {email:string}) => {
    return await instance.post('/auth/reset-password',email).then(({data}) => data).catch((error) => error ); 
}

export const upadtePassword = async (password: any) => {
    return await instance.post('/auth/update-password',password).then(({data}) => data)
}


export const postRegister = async (user: ILogin) => {
    return await instance.post('/auth/register',user).then(({data}) => data).catch((error) => error ); 
}


export const getUserById = async (id: string|number,token:string) => {
    return await instance.get('/users/'+id,{headers:{ 'Authorization': `Bearer ${token}` }})
    .then(({data}) => data).catch((error) => alert(error)); 
}

