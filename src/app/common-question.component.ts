import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-question',
  templateUrl: './common-question.component.html',
  styleUrls: ['./common-question.component.css']
})
export class CommonQuestionComponent {
  @Input() question: any;

  isSubQuestionVisible(subQuestion: any): boolean {
    if (subQuestion.showIf && this.question.answer) {
      return subQuestion.showIf === this.question.answer;
    }
    return true;
  }
}
