 import { BehaviorSubject } from 'rxjs';

export class ObservableCollection<T> {
  private _items: BehaviorSubject<T[]>;

  constructor(initialItems: T[] = []) {
    this._items = new BehaviorSubject<T[]>(initialItems);
  }

  get items() {
    return this._items.asObservable();
  }

  addItem(item: T) {
    const currentItems = this._items.value;
    const newItems = [...currentItems, item];
    this._items.next(newItems);
  }

  removeItem(item: T) {
    const currentItems = this._items.value;
    const newItems = currentItems.filter(i => i !== item);
    this._items.next(newItems);
  }
}
