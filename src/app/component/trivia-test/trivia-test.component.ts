import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/modal/question.modal';

@Component({
  selector: 'app-trivia-test',
  templateUrl: './trivia-test.component.html',
  styleUrls: ['./trivia-test.component.scss']
})
export class TriviaTestComponent implements OnInit {
  
  triviaQuestions: Question[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('triviaQuestions')){
      this.triviaQuestions = JSON.parse(localStorage.getItem('triviaQuestions') || '');
    }
    else{
      this.router.navigate(['']);
    }
  }

  submitTrivia(){
    console.log(this.triviaQuestions);
  }

  resetTrivia(){
    localStorage.removeItem('triviaQuestions');
    this.router.navigate(['']);
  }
}
