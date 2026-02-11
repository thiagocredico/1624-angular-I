import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, MainPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  obs = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      // if (count === 3) {
      //   observer.error('Houve um erro');
      // }]

      if (count === 10) {
        observer.complete();
      }
      observer.next(count);
      count++;
    }, 1000);
  });

  ngOnInit(): void {
    this.obs.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Finalizou');
      },
    });
  }
}
