// src/app/quiz.ts

export interface SubQuestion {
  queType: 'Sub';
  showIf: string;
  type: 'dropdown' | 'textinput';
  question: string;
  options: string[];
}

export interface MainQuestion {
  queType: 'Main';
  type: 'dropdown' | 'textinput';
  question: string;
  options: string[];
  subQue?: SubQuestion[];
}

export type Question = MainQuestion | SubQuestion;
