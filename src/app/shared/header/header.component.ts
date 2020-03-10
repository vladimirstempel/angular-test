import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavInterface } from './nav.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  navList: NavInterface[] = [
    {
      link: '/blocks',
      label: 'Blocks'
    },
    {
      link: '/table',
      label: 'Table'
    }
  ];

  isLoggedIn: boolean;

  user$: Observable<User>;

  componentDestroyed = new Subject();

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.user$ = this.authService.getUser();
  }

  get ghUserName() {
    return this.authService.ghData ? this.authService.ghData.username : null;
  }

  isCurrentPage(navLink) {
    return navLink === this.router.url;
  }

  onLogout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/auth']);
      });
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }

}
