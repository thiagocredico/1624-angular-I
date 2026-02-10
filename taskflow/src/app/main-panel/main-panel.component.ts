import { Component, Input, OnInit } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';
import { Pages } from '../constants/pages.enum';

@Component({
  selector: 'app-main-panel',
  imports: [DashboardComponent, TransactionsListComponent],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.css',
})
export class MainPanelComponent implements OnInit {
  @Input() page: Pages = Pages.DASHBOARD;

  pagesEnum = Pages;

  ngOnInit(): void {
    console.log(this.page);
  }
}
