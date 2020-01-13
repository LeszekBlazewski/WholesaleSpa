import { OrderStatus } from './enums/OrderStatus';
import { OrderDetail } from './OrderDetail';
import { User } from './User';

export interface AvailableOrder {
    orderId?: number;
    date: Date;
    totalValue?: number,
    orderDetails: OrderDetail[];
    status: OrderStatus;
    client: User
}