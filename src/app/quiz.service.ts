import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'https://raw.githubusercontent.com/ShaneWatson7961/quizData/main/quizInterview.json';

  constructor(private http: HttpClient) { }

  getQuizData() {
    return this.http.get(this.apiUrl);
  }
}
