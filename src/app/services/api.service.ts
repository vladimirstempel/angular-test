import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host: string = `${environment.githubApi.host}`;
  private paginationParams = {
    page: 1,
    per_page: 20
  };

  constructor(private http: HttpClient) {
  }

  getUrl(endpointName) {
    return `${this.host}${environment.githubApi.endpoints[endpointName]}`;
  }

  searchUsers(query): Observable<any> {
    console.log(query);
    return this.http
      .get(this.getUrl('search_users'), {
        params: this.buildQuery({
          q: query,
          ...this.paginationParams
        })
      });
  }

  getUserDetails(query) {
    return this.http
      .get(this.getUrl('user').replace('$user', query));
  }

  buildQuery(params): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(param => {
      if (param in params && params[param]) {
        httpParams = httpParams.set(param, params[param]);
      }
    });
    return httpParams;
  }
}
