import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {QuizzComponent} from "./pages/quizz/quizz.component";
import {QuestionComponent} from "./pages/question/question.component";
import {ResultComponent} from "./pages/result/result.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: ''},
  {path: 'quizz', component: QuizzComponent},
  //{path: 'questions', component: QuestionComponent},
  //{path: 'reponses', component: ResultComponent},
];
