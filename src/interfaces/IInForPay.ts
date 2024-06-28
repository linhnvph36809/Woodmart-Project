export interface IInForPay {
    user_id?: string|number
    fullName?: string;
    telephone?: string | number;
    email?: string;
    country: string;
    city: string;
    street_address: string;
    post_code: string;
    payment_id?: string | number;
    shipping_id?: string | number;
};