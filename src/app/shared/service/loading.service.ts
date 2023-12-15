import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$ = this.loadingSubject.asObservable();
    // New BehaviorSubject to store the user's choice
    private userChoiceSubject = new BehaviorSubject<string>(''); // You can change the type as needed
    userChoice$ = this.userChoiceSubject.asObservable();

    setLoading(value: boolean): void {
        this.loadingSubject.next(value);
    }
    setUserChoice(choice: string): void {
        this.userChoiceSubject.next(choice);
    }
}
