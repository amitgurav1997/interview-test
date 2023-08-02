// src/app/question/question.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../quiz';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  a: any = {}; 
  @Input() parentAnswer: string;
  isSubQuestionVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
 this.a = this.question;

  }

  toggleSubQuestion() {
    // Check if the 'showIf' condition exists and matches the parentAnswer
    if (this.a.subQue[0].showIf && this.a.subQue[0].showIf === this.parentAnswer) {
      this.isSubQuestionVisible = !this.isSubQuestionVisible;
    } else {
      // If the 'showIf' condition is not met, hide the sub-question
      this.isSubQuestionVisible = false;
    }
  }

//   toggleSubQuestion() {
//     this.isSubQuestionVisible = !this.isSubQuestionVisible;


   
//   } 
}
