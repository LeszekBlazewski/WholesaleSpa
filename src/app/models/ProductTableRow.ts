import { Product } from './Product';
import { FormControl } from '@angular/forms';

export interface ProductTableRow {
    product: Product;
    amount?: FormControl;
    value?: number;
}