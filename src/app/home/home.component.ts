import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import {  Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Question } from '../quiz';
import { SAMPLE_QUESTIONS } from '../sample-questions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  questions: Question[] = SAMPLE_QUESTIONS;
  
}

