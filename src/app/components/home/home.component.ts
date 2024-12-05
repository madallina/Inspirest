import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data:any=[];
  constructor(private apiService: ApiService){}
  ngOnInit(): void{
    this.apiService.getData('end-specific').subscribe({
      next:(response)=>{
        this.data=response;
        console.log('Received data',response);
      },
      error:(err)=>{
        console.log("Error: ", err);
      }
    });
  }

}
