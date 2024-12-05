import { Component , Inject, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-image-modal',
  imports: [HomeComponent,MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,MatButtonModule,MatIconModule],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})
export class ImageModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('Received data:', this.data);
  }
}
