import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Account } from './models/account.model';
import { DashboardService } from './services/dashboard.service';
import { TransactionsService } from '../transactions/services/transactions.service';
import { first } from 'rxjs';
import { Transaction } from '../transactions/models/transaction.model';
import { DatePipe, NgIf } from '@angular/common';
import { TransactionTypes } from '../transactions/constants/transaction-types.enum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    DatePipe,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  private readonly dashboardService = inject(DashboardService);
  private readonly transactionsService = inject(TransactionsService);

  account?: Account;
  transactions: Transaction[] = [];

  search: string = '';

  transactionTypesEnum = TransactionTypes;

  ngOnInit(): void {
    this.getAccount();
    this.getTransactions();
  }

  getAccount(): void {
    this.dashboardService
      .getAccount()
      .pipe(first())
      .subscribe({
        next: (res: Account) => {
          this.account = res;
          console.log(this.account);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getTransactions(): void {
    this.transactionsService
      .getTransactions()
      .pipe(first())
      .subscribe({
        next: (res: Transaction[]) => {
          this.transactions = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  filterTransactions(): Transaction[] {
    return this.transactions.filter((item) =>
      item.description.toLowerCase().includes(this.search.toLocaleLowerCase()),
    );
  }
}
