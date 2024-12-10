import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ImageModalComponent,MatIconModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: any = [];
  constructor(private apiService: ApiService,  public dialog: MatDialog) {}
  ngOnInit(): void {
    this.apiService.getData('end-specific').subscribe({
      next: (response) => {
        this.data = response;
        console.log(response);
        
        console.log('Received data', response);
      },
      error: (err) => {
        console.log('Error: ', err);
      },
    });
  }

  openImageDialog(url: string): void {
    this.apiService.openImageDialog(url);
  }
  addToFavorites(url: string):void{
   this.apiService.addToFavorites(url);
  }
  getResizedImageUrl(url:string):string{
    return this.apiService.getResizedImageUrl(url);
  }
}
