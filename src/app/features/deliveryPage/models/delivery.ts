import { Order } from "./order";
import { User } from "./user";

export interface Delivery {
    documentId : string;
    order : Order;
    driver : User;
    delivered: boolean; 
}
