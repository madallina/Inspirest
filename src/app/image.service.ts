import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from './components/image-modal/image-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public dialog: MatDialog) { }

}
