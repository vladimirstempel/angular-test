import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public user$: Observable<any>;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        if ('username' in params) {
          this.getUser(params['username']);
        }
      });
  }

  getUser(userName) {
    this.user$ = this.apiService.getUserDetails(userName);
  }
}
