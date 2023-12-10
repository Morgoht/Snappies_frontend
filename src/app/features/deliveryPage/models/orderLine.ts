import { Article } from './article';

export interface OrderLine {
  documentId: string;
  article: Article;
  quantity: number;
}