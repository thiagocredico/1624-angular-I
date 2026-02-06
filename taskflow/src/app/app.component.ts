import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { Pages } from './constants/pages.enum';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, MainPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage: Pages = Pages.DASHBOARD;

  handleRedirectToPages(page: Pages): void {
    this.currentPage = page;
    console.log(this.currentPage);
  }
}
