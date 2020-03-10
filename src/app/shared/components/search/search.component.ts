import { Component, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchCallback: string;
  @Input() resultsType: 'list' | 'table';

  searchModel: string;

  results$: Observable<any[]>;

  loading: boolean;

  constructor(private apiService: ApiService) {}

  search() {
    this.loading = true;
    this.results$ = this.apiService[this.searchCallback](this.searchModel)
      .pipe(
        map((res: any) => res.items),
        tap(() => this.loading = false)
      );
  }
}
