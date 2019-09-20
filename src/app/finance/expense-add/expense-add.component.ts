import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {
  expenseForm: FormGroup;

  constructor(private financeService: FinanceService) { }

  ngOnInit() {
    this.expenseForm = new FormGroup({
      expenseAmount: new FormControl(null, {
        validators: [Validators.required]
      }),
      expenseDescription: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }



  createExpense(expenseAmount: number, expenseDescription: string) {
    if (this.expenseForm.invalid) {
      return;
    }
    this.financeService.createExpense(expenseAmount, expenseDescription);
    this.expenseForm.reset();
  }
}
