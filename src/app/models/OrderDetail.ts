import { Product } from './Product';

export interface OrderDetail {
    product: Product;
    amount: number;
}