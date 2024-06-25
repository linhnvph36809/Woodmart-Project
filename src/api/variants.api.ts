import instance from "../axios/instance";

export const getAllColor = async () => {
    return await instance.get('/colors').then(({data}) => data).catch(() => []);; 
}

export const getAllMaterial = async () => {
    return await instance.get('/materials').then(({data}) => data).catch(() => []);
}
