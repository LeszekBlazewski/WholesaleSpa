import { OrderStatus } from './enums/OrderStatus';
import { OrderDetail } from './OrderDetail';

export interface Order {
    orderId?: number;
    clientId?: number;
    courierId?: number;
    date: Date;
    status: OrderStatus;
    totalValue?: number,
    orderDetails: OrderDetail[];
}