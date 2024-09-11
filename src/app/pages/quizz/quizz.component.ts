import { Component } from '@angular/core';
import {QuestionComponent} from "../question/question.component";


@Component({
  selector: 'app-quiz',
  templateUrl: './quizz.component.html',
  standalone: true,
  imports: [
    QuestionComponent

  ],
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {



}
