import { Component , Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ImageService} from '../../image.service';



@Component({
  selector: 'app-image-modal',
  imports: [CommonModule ,MatDialogModule, MatDialogContent, MatDialogActions, MatDialogClose,MatButtonModule,MatIconModule],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})
export class ImageModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public apiService:ApiService,private router:Router,public imageService:ImageService) { 
  }
  checkRoute:boolean=false;
  ngOnInit(): void {
      if(this.router.url.includes('/favorites')){
        this.checkRoute=true;
      }

      this.data.url = this.imageService.getResizedImageUrl(this.data.url)
  }
  addToFavorites(url: string):void{
    this.imageService.addToFavorites(url);
  
   }

}
