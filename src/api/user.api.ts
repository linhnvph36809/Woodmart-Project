import axios from "axios";
import instance from "../axios/instance";
import { IInForPay } from "../interfaces/IInForPay";

export const getAddressByUserId = async (user_id:string|number,token:string) => {    
    return await instance.get('/address?user_id='+user_id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const postAddressUser = async (address:IInForPay,token:string) => {
    return await instance.post('/address',address,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const patchAddressUser = async (address:any,token:string) => {
    return await axios.patch('https://woodmart.click/api/address',address,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const patchUser = async (id:string|number,user:any,token:string) => {
    return await axios.patch('https://woodmart.click/api/users/'+id,user,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => console.log(error) ); 
}

export const getUser = async (user_id:string|number,token:string) => {
    return await instance.get('/users/'+user_id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const getShippings = async (token:string) => {
    return await instance.get('/shipping',{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const getPayments = async (token:string) => {
    return await instance.get('/payment',{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}


export const postUrlPay = async (pay:string,data:any,token:string) => {
    return await instance.post('/'+pay,data,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

