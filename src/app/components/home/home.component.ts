import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { fromEvent, throttleTime } from 'rxjs';
import { ScrollDetectorDirective } from '../../scroll-detector.directive';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ScrollDetectorDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: any = [];
  constructor(private apiService: ApiService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.apiService.getData('end-specific').subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.log('Error: ', err);
      },
    });
  }

  openImageDialog(url: string): void {
    this.apiService.openImageDialog(url);
  }
  addToFavorites(url: string): void {
    this.apiService.addToFavorites(url);
  }
  getResizedImageUrl(url: string): string {
    return this.apiService.getResizedImageUrl(url);
  }
  onScrollToBottom(): void {
    this.apiService.addData().subscribe(val => {
      this.data.push(...val)
    });
  }
}
