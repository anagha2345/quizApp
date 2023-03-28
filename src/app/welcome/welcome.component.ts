import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  uname:any
  
   constructor(private router:Router ){}
   onSave(){
     localStorage.setItem('uname',this.uname)
     alert('starting the quiz')
     this.router.navigateByUrl('/questions')
   }
   ngOnInit(): void {
     
   }
  //  username(event:any){
  //        console.log(event.target.value);
  //       this.uname=event.target.value
  //  }
   
}
