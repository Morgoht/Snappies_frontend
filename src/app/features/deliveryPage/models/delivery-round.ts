import { Delivery } from "./delivery";

export interface DeliveryRound {
    documentId : string;
    name : string;
    deliveries : Delivery[]
}
