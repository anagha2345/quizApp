import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  score:any
   constructor(){
    this.score=localStorage.getItem('point')
   }
   ngOnInit(): void {
     
   }
   
}
