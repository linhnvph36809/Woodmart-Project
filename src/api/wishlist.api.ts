import instance from "../axios/instance";


export const getWishlistByUserId = async (id:string|number) => {
    return await instance.get('/wishlist?user_id='+id).then(({data}) => data).catch(() => []); 
}


export const postWishlist = async (data:{user_id:string|number,product_id:string|number},token:string) => {
    return await instance.post('/wishlist',data,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => alert(error)); 
}