import { Daycare } from './daycare';
import { Order } from './order';
import { OrderLine } from './orderLine';

export class OrderClass {
    documentId: string;
    orderLinesMap: Map<string, OrderLine>;
    daycare: Daycare;

    constructor(order: Order) {
        this.documentId = order.documentId;
        this.daycare = order.daycare;

        // Convertir le tableau d'OrderLine en une Map avec documentId comme clé
        this.orderLinesMap = new Map<string, OrderLine>();
        if(order.orderLines != undefined){
            order.orderLines.forEach((orderLine) => {
                this.orderLinesMap.set(orderLine.documentId, orderLine);
            });
        }
    }
}
