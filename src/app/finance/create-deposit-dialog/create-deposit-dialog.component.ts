import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-deposit-dialog',
  templateUrl: './create-deposit-dialog.component.html',
  styleUrls: ['./create-deposit-dialog.component.css']
})
export class CreateDepositDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateDepositDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
