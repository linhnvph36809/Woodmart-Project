import instance from "../axios/instance";

export const getAllProducts = () => {
    return instance.get('/products'); 
}

export const getProductByCategoryId = async (id:string|number) => {
    return await instance.get('/products?category_id='+id).then(({data}) => data).catch(() => []); 
}

export const getProductBestsellers = async () => {
    return await instance.get('/products?best_seller=1').then(({data}) => data).catch(() => [])
}

export const getProductDetail = async (id:string|number) => {
    return await instance.get('/products/'+id).then(({data}) => data).catch(() => [])
}

export const filterByProducts = async (url:string) => {
    return await instance.get('/products'+url).then(({data}) => data).catch(() => []);
}

export const getProductCollections = async () => {
    return await instance.get('/products?popular_week=1').then(({data}) => data).catch(() => []);
}

export const getReviewProduct = async (id:string|number) => {
    return await instance.get('/reviews?product_id='+id).then(({data}) => data).catch(() => []);
}