import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-expense-add",
  templateUrl: "./expense-add.component.html",
  styleUrls: ["./expense-add.component.css"]
})
export class ExpenseAddComponent implements OnInit {
  expenseForm: FormGroup;

  constructor() {}

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

  addExpense() {
    if (this.expenseForm.invalid) {
      return;
    }
    console.log(
      `You spent ${this.expenseForm.value.expenseAmount} on ${this.expenseForm.value.expenseDescription}`
    );
    this.expenseForm.reset();
  }
}
