import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quiz-section',
  templateUrl: './quiz-section.component.html',
  styleUrls: ['./quiz-section.component.css']
})
export class QuizSectionComponent implements OnInit{
 name1:any
 quesArray:any
 currentQues:any
 quesInter:any
 counter=60
 isCurrentAns:any
 selectedAns=[]
 points:any=0
 correctAns=0



     constructor(private router:Router){ 
      this.name1=localStorage.getItem('uname')
      this.currentQues=0
      this.isCurrentAns=false
      this.correctAns=0
      this.quesArray=[{
        "quesLabel":" In which HTML element, we put the JavaScript code?",
        "options":[{
          "label":"<script>...</script>",
          "correct":true},
          {
            "label":"<javascript>...</javascript>"
            
          },
          {
            "label":"<js>...</js>"
          },
          {
            "label":"<css>...</css>"
          }]
        },
          {
            "quesLabel":" Which property is used to define the HTML content to an HTML element with a specific id?",
            "options":[{
              "label":"innerContent"
              },
              {
                "label":"elementText"
                
              },
              {
                "label":"innerHTML",
                "correct":true
              },
              {
                "label":"innerContent"
              }]
          },
          {
            "quesLabel":"Which JavaScript method is used to access an HTML element by id",
            "options":[{
              "label":"getElementById(id)",
              "correct":true},
              {
                "label":"getElementById()"
                
              },
              {
                "label":"getElement(id)"
              },
              {
                "label":"elementById(id)"
              }]
          },
          {
            "quesLabel":" JavaScript code can be written in ____.",
            "options":[{
              "label":"HTML document directly"},
              {
                "label":"In style sheets (.css file)"
                
              },
              {
                "label":"JavaScript file (.js file)"
              },
              {
                "label":" JavaScript file and in HTML document directly",
              "correct":true
              }]
          },
          {
            "quesLabel":" Which JavaScript keyword is used to declare a variable?",
            "options":[{
              "label":"var",
              "correct":true},
              {
                "label":"Var"
                
              },
              {
                "label":"Let"
              },
              {
                "label":"All of the above"
              }]
          },
          {
            "quesLabel":" Which JavaScript keyword is used to declare a variable?",
            "options":[{
              "label":"var",
              "correct":true},
              {
                "label":"Var"
                
              },
              {
                "label":"Let"
              },
              {
                "label":"All of the above"
              }]
          },
          {
            "quesLabel":" Which JavaScript keyword is used to declare a variable?",
            "options":[{
              "label":"var",
              "correct":true},
              {
                "label":"Var"
                
              },
              {
                "label":"Let"
              },
              {
                "label":"All of the above"
              }]
          },
          {
            "quesLabel":" Which JavaScript keyword is used to declare a variable?",
            "options":[{
              "label":"var",
              "correct":true},
              {
                "label":"Var"
                
              },
              {
                "label":"Let"
              },
              {
                "label":"All of the above"
              }]
          },
          {
            "quesLabel":" Which JavaScript keyword is used to declare a variable?",
            "options":[{
              "label":"var",
              "correct":true},
              {
                "label":"Var"
                
              },
              {
                "label":"Let"
              },
              {
                "label":"All of the above"
              }]
          },
          {
            "quesLabel":"How many keywords are there in JavaScript to declare variables or constants?",
            "options":[{
              "label":"1"},
              {
                "label":"2"
                
              },
              {
                "label":"3",
              "correct":true
              },
              {
                "label":"4"
              }]
          }


      ]
    }
    

    
     ngOnInit(): void {
       this.startCount();
      // setTimeout((timer:any)=>{
      //   this.quesInter.unsubscribe();
      //   // this.router.navigateByUrl('/result')
      //  })
     }
     onSelect(question:any,options:any,option:any){
      // question.isAttempted=true;
      options.forEach((element:any)=>{
        element.isSelected=false;
      });
      this.isCurrentAns=true;
      if(option.correct){
        this.points=this.points+10;
         
        
        
      }
      else{
        this.points=this.points-10

      }
      localStorage.setItem('point',this.points)
      console.log(this.points);
     option.isSelected=true;
      
    }
    nextQues(){
      if(!(this.quesArray.length-1==this.currentQues)){
        this.currentQues++;
        this.startCount()
      }else{

      }
    }
     prevQues(){
    if(this.currentQues !==0){
      this.currentQues--;
    }
   }
   timeout(){
    if(this.currentQues==9 && this.counter==1){
     this.router.navigateByUrl('/result')
  } }
    startCount(){
      this.counter=60
      this.quesInter=interval(1300).subscribe(counter=>{
        this.counter--;
        if(this.counter==0){
          this.nextQues();
          
        }else 
        {
          this.timeout();
        }
      })
    }
   finish(){
    this.router.navigateByUrl('/result')
   }
     
}
