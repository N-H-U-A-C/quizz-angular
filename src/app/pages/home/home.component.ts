import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../utils/service/category.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  categories : string[] = [];
  constructor(private categoryservice: CategoryService) {
  }

  playQuizz() {

  }

  selectcategory() {

  }

  ngOnInit(): void {
  }
}
