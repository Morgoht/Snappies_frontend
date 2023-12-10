import { Delivery } from "./delivery";

export interface DeliveryRound {
    id : number;
    name : string;
    deliveries : Delivery[]
}
