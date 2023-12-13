import { DeliveryClass } from './deliveryClass';
import { DeliveryRound } from './deliveryRound';
import { User } from './user';

export class DeliveryRoundClass {
    documentId: string;
    name: string;
    driver: User;
    deliveriesMap: Map<string, DeliveryClass>;
    roundEnded: boolean;

    constructor(deliveryRound: DeliveryRound) {
        this.documentId = deliveryRound.documentId;
        this.name = deliveryRound.name;
        this.driver = deliveryRound.driver;
        this.deliveriesMap = new Map<string, DeliveryClass>();
        this.roundEnded = deliveryRound.roundEnded;

        deliveryRound.deliveries.forEach((element) => {
            this.deliveriesMap.set(element.documentId, new DeliveryClass(element));
        });
    }
}
