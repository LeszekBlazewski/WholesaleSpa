import { OrderStatus } from './enums/OrderStatus';
import { OrderDetail } from './OrderDetail';
import { User } from './User';

export interface AvailableOrder {
    orderId?: number;
    client: User
    date: Date;
    status: OrderStatus;
    totalValue?: number,
    orderDetails: OrderDetail[];
}