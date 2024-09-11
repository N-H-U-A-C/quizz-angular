import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from "../question/question.component";
import {QuizzService} from "../../utils/services/quizz.service";
import {Quizz} from "../../model/Quizz";

@Component({
  selector: 'app-quiz',
  templateUrl: './quizz.component.html',
  standalone: true,
  imports: [QuestionComponent],
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  quizz?: Quizz;

  constructor(private quizzService: QuizzService) {
  }

  ngOnInit() {
    this.quizzService.getRandom().subscribe({
      next: result => {
        this.quizz = result;
      }
    });
  }
}
