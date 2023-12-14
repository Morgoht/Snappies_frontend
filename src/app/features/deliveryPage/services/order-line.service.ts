import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { OrderLine } from '../models/orderLine';
import { OrderLineClass } from '../models/orderLineClass';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor() { }
}
