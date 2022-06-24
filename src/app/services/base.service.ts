import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  public apiUrl: string = environment.API_BASE_URL;
  public httpOptions: any;
  public httpCustomOptions: any;

  constructor(private http: HttpClient) {  }

  get(url: any) {
    try {
      return this.http.get<T>(this.apiUrl + url, this.httpOptions).pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error) => this.handleErrors(error))
      );
    } catch (e) {
      return null;
    }
  }
  private handleErrors(error: HttpErrorResponse): any { }
}
