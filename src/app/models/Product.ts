import { Category } from './Category';

export interface Product {
    productId: number;
    name: string;
    price: number;
    stock: number;
    category: Category;
}