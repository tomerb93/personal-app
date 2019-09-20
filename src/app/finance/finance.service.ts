import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Finance } from './finance.model';


const BACKEND_URL = environment.apiUrl + '/finance/';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private finances: Finance[] = [];
  private financesUpdated = new Subject<{ finances: Finance[] }>();

  constructor(private http: HttpClient) { }

  getFinancesUpdateListener() {
    return this.financesUpdated.asObservable();
  }

  createExpense(expenseAmount: number, expenseDescription: string) {
    const expense = {
      expenseAmount,
      expenseDescription,
      dateCreated: new Date()
    };
    this.http.post<{ message: string }>
      (BACKEND_URL, expense)
      .subscribe((message) => {
        console.log(message);
        this.getFinances();
      });
  }

  getFinances() {
    this.http.get<{ finances: Finance[] }>(BACKEND_URL)
      .subscribe((financesData) => {
        this.finances = financesData.finances;
        this.financesUpdated
          .next({ finances: [...this.finances] });
      });
  }
}
