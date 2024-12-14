import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://picsum.photos/v2/list';
  private nextPageUrl = 'https://picsum.photos/v2/list?page=3&limit=30';
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  addData(): Observable<any> {
    return this.http.get<any>(`${this.nextPageUrl}`);
  }
}
