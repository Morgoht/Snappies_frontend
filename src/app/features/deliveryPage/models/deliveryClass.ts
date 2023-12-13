import { Delivery } from './delivery';
import { OrderClass } from './orderClass';

export class DeliveryClass {
    documentId: string;
    order: OrderClass;
    delivered: boolean;

    constructor(delivery: Delivery) {
        this.order = new OrderClass(delivery.order);
        this.documentId = delivery.documentId;
        this.delivered = delivery.delivered;
    }
}
