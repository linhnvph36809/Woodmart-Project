import instance from "../axios/instance";

export const getAllCategorys = () => {
    return instance.get('/categorys'); 
}