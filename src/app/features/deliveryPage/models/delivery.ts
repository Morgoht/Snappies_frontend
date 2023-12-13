import { Order } from "./order";

export interface Delivery {
    documentId : string;
    order : Order;
    delivered: boolean; 
}
