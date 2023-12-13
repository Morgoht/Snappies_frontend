import { Delivery } from './delivery';
import { User } from './user';

export interface DeliveryRound {
    documentId: string;
    name: string;
    driver: User;
    deliveries: Delivery[];
    roundEnded: boolean;
}
