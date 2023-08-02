// src/app/sample-questions.ts

import { Question } from './quiz';

export const SAMPLE_QUESTIONS: Question[] = [
  {
    queType: 'Main',
    type: 'dropdown',
    question: 'Which company was established in 1976 by Steve Jobs ?',
    options: ['Apple', 'Microsoft', 'Atari'],
    subQue: [
      {
        queType: 'Sub',
        showIf: 'Apple',
        type: 'dropdown',
        question: 'What is the most common way to iterate through an array ?',
        options: ['For loop', 'If Statements'],
      },
      {
        queType: 'Sub',
        showIf: 'Apple',
        type: 'textinput',
        question: 'Which type of code is represented in 0 and 1 ?',
        options: [],
      },
    ],
  },
  {
    queType: 'Main',
    type: 'dropdown',
    question: 'What is use for CSS ?',
    options: ['Styling websites', 'JS logic', 'Database'],
  },
];
