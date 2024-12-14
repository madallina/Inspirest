import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-favorites',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favoritesImages: string[] = [];
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favoritesImages = JSON.parse(favorites);
    }
  }
  openImageDialog(url: string): void {
    this.apiService.openImageDialog(url);
  }

  deleteFavorite(urlToDelete: string): void {
    this.favoritesImages = this.apiService.deleteFavorite(urlToDelete);
  }
  getResizedImageUrl(url:string):string{
    return this.apiService.getResizedImageUrl(url);
  }
}
