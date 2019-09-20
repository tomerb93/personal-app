import { Component, OnInit } from '@angular/core';
import { FinanceService } from './finance.service';
import { Finance } from './finance.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  finances: Finance[];
  financesSub: Subscription;
  balance: number;

  constructor(private financeService: FinanceService) { }

  ngOnInit() {
    this.financeService.getFinances();
    this.financesSub = this.financeService.getFinancesUpdateListener()
      .subscribe((financesData: { finances: Finance[] }) => {
        this.finances = financesData.finances;
      });
  }
}
