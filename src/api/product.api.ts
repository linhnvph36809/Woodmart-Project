import instance from "../axios/instance";

export const getAllProducts = () => {
    return instance.get('/products'); 
}

export const getProducductByCategoryId = (id?:string|number) => {
    return instance.get('/products?category_id='+id); 
}

export const getProductBestsellers = async () => {
    return await instance.get('/products?best_seller=1').then(({data}) => data).catch(() => alert("Looi"))
}