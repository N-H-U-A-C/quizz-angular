import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiURL = 'http://localhost:8080/v1/quizz/';


  constructor(private http: HttpClient) { }

  getCategory(): Observable<string[]>{
    return ;
  }
}
