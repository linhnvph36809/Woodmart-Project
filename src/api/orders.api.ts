import instance from "../axios/instance";

export const getVoucher = async (voucher:string,token:string) => {
    return await instance.get('/vouchers?code='+voucher,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data)
}

export const postOrder = async (order:any,token:string) => {
    return await instance.post('/orders',order,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data).catch((error) => console.log(error))
}

export const getOrderDetail = async (id:string|number,token:string) => {
    return await instance.get('/orders/detail/'+id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data)
}

export const getOrders = async (id:string|number,token:string) => {
    return await instance.get('/orders?user_id='+id,{headers:{ 'Authorization': `Bearer ${token}` }}).then(({data}) => data)
}
