import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from './components/image-modal/image-modal.component';

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

  openImageDialog(url: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { url },
    });
  }

  addToFavorites(url: string): void {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.includes(url)) {
      favorites.push(url);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
  deleteFavorite(urlToDelete: string) {
    const favoritesList = localStorage.getItem('favorites');
    if (favoritesList) {
      let updatedFavoritesList: string[] = JSON.parse(favoritesList);
      updatedFavoritesList = updatedFavoritesList.filter(
        (url) => url !== urlToDelete
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesList));

      return updatedFavoritesList;
    }
    return [];
  }
  getResizedImageUrl(url: string): string {
    const devidedUrl = url.split('/');
    devidedUrl[devidedUrl.length - 2] = '800';
    devidedUrl[devidedUrl.length - 1] = '550';
    return devidedUrl.join('/');
  }
}
