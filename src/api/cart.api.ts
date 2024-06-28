import instance from "../axios/instance";
import axios from "axios";


export const postCart = async (product:any,token:string) => {
    return await instance.post('/cart',product,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => error ); 
}

export const putCart = async (product:any,token:string) => {      
    return await axios.patch('https://woodmart.click/api/cart/'+product.id,product,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error) ); 
}

export const getCartByUserId = async (user_id:string|number,token:string) => {
    return await instance.get('/cart?user_id='+user_id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => console.log(error) ); 
}

export const deleteCart = async (id:string|number,token:string) => {
    return await instance.delete('/cart/'+id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => error ); 
}
