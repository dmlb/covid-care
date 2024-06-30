import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Covid Care';
  currentLink = '/'
  private sub$!: Subscription

  constructor(private router: Router) { }

  ngOnInit() {
    this.updateCurrentLink()
  }

  /**
   * subscribe to navigation end event
   * update current link with router url at that time
   */
  updateCurrentLink(): void {
    this.sub$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentLink = this.router.url
    })
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe()
  }
}
