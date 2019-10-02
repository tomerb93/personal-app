import { Component, OnInit } from '@angular/core';
import { FinanceService } from './finance.service';
import { Finance } from './finance.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { CreateDepositDialogComponent } from './create-deposit-dialog/create-deposit-dialog.component';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  finances: Finance[];
  financesSub: Subscription;
  balance: number;

  constructor(
    private financeService: FinanceService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.financeService.getFinances();
    this.financesSub = this.financeService.getFinancesUpdateListener()
      .subscribe((financesData: { finances: Finance[] }) => {
        this.finances = financesData.finances;
      });
  }

  openDepositDialog() {
    const depostDialogRef = this.dialog.open(
      CreateDepositDialogComponent,
      {
        width: '44vh',
        data: {
          depositAmount: '0',
          depositDescription: 'hey'
        }
      });

    depostDialogRef.afterClosed()
      .subscribe(data => {
        if (!data.depositAmount) {
          console.log('wow');
        }
        if (!data.depositDescription) {
          data.depositDescription = 'No description added';
        }
        this.financeService.createDeposit(data.depositDescription, data.depositAmount);
      });
  }

}
