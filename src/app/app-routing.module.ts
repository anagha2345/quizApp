import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",redirectTo:"welcome",pathMatch:'full'},
  {path:"welcome",component:WelcomeComponent},
  {path:"questions",component:QuizSectionComponent},
  {path:"result",component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
