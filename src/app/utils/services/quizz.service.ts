import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Quizz} from "../../model/Quizz";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private apiURL = 'http://localhost:8080/v1/quizz';
  private selectedCategory: number = 1;

  constructor(private http: HttpClient) {
  }

  getRandom(): Observable<Quizz> {
    return this.http.get<Quizz>(`${this.apiURL}/${this.selectedCategory}`).pipe(
      catchError(error => {
        console.log(error.message);
        return of();
      })
    );
  }
}
