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
      dateCreated: new Date(),
      typeId: 1
    };
    this.http.post(BACKEND_URL, expense)
      .subscribe(() => {
        this.getFinances();
      });
  }

  createDeposit(depositDescription: string, depositAmount: number) {
    const deposit = {
      depositAmount,
      depositDescription,
      dateCreated: new Date(),
      typeId: 2
    };
    this.http.post(BACKEND_URL, deposit)
      .subscribe(() => {
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
