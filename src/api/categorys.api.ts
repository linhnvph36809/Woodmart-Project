import instance from "../axios/instance";

export const getAllCategorys = async () => {
    return await instance.get('/category').then(({data}) => data); 
}

export  const getCategorysByCount = async () => {
    return await instance.get('/products?group_by_category=1').then(({data}) => data); 
}