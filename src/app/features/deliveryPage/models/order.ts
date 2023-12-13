import { Daycare } from './daycare';
import { OrderLine } from './orderLine';

export interface Order {
  documentId: string;
  orderLines: OrderLine[];
  daycare: Daycare;
}