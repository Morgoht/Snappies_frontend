// graphql-types.ts

import { DeliveryRound } from "./deliveryRound";

export interface GraphQLResponse {
    data?: {
        allDeliveryRounds: DeliveryRound[];
    };
    loading: boolean;
    networkStatus: number;
}
