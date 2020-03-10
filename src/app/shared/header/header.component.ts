import { Component, OnInit } from '@angular/core';
import { NavInterface } from './nav.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isCurrentPage(navLink) {
    return navLink === this.router.url;
  }

}
