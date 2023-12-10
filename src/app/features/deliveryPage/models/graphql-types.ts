// graphql-types.ts

import { DeliveryRound } from "./delivery-round";

export interface GraphQLResponse {
    data?: {
        allDeliveryRounds: DeliveryRound[];
    };
    loading: boolean;
    networkStatus: number;
}
