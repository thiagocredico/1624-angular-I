import { Component, inject, OnInit } from '@angular/core';
import { Pages } from '../constants/pages.enum';
import { RouterService } from '../core/services/router.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';

@Component({
  selector: 'app-main-panel',
  imports: [DashboardComponent, TransactionsListComponent],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.css',
})
export class MainPanelComponent implements OnInit {
  private readonly routerService = inject(RouterService);

  page!: Pages;
  pagesEnum = Pages;

  ngOnInit(): void {
    this.page = this.routerService.getCurrentPage();
  }
}
