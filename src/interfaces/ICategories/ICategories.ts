export interface ICategory {
    id?: number|string,
    category_name: string ,
    image_url: string
    parent_category_id: number|string,
    quantity?: number|string
    icon?:string
}