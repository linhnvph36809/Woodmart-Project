import instance from "../axios/instance";

export const getAddressByUserId = async (user_id:string|number,token:string) => {
    return await instance.get('/address?user_id='+user_id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}


export const getUser = async (user_id:string|number,token:string) => {
    return await instance.get('/users/'+user_id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const getShiping = async (token:string) => {
    return await instance.get('/shipping',{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const getPayments = async (token:string) => {
    return await instance.get('/payment',{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}


export const postUrlPayMomo = async (data:any,token:string) => {
    return await instance.post('/momo',data,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const postUrlPayVnpay = async (data:any,token:string) => {
    return await instance.post('/vnpay',data,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}