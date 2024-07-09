import instance from "../axios/instance";


export const getWishlistByUserId = async (id:string|number,token:string) => {
    return await instance.get('/wishlist?user_id='+id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data); 
}


export const postWishlist = async (data:{user_id:string|number,product_id:string|number},token:string) => {
    return await instance.post('/wishlist',data,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data); 
}

export const deleteWishlist= async (id:string|number,token:string) => {
    return await instance.delete('/wishlist/'+id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => error); 
}