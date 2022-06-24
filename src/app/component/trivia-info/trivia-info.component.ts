import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, CategoryModal } from 'src/app/modal/category.modal';
import { Question } from 'src/app/modal/question.modal';
import { QuestionRequest } from 'src/app/modal/question.request.modal';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trivia-info',
  templateUrl: './trivia-info.component.html',
  styleUrls: ['./trivia-info.component.scss']
})
export class TriviaInfoComponent implements OnInit {

  triviaFormGroup: FormGroup;  
  categories: Category[] = [];
  submitted : boolean = false;
  allQuestions : Question[] = [];
  constructor(private fb: FormBuilder,private apiService: ApiService, private router: Router) {
    this.triviaFormGroup = this.fb.group({  
      'amount' : [10, Validators.required],  
      'category' : ['0'], 
      'difficulty' :[''],
      'type':['multiple']
    });  
   }
   
   ngOnInit() {
    this.getCategories()
  }

   get triviaFormControl() {
    return this.triviaFormGroup.controls;
    }

   onFormSubmit(form: QuestionRequest){  
     this.getQuestion(form)  
   }  

  getCategories(){
    this.apiService.getCategories().subscribe((categorieResult: CategoryModal) => {
      this.categories = categorieResult.trivia_categories;
    },
    (error: any) => {
      console.log(error);
    });
  }

  getQuestion(questionRequest : QuestionRequest){
    this.apiService.getQuestion(questionRequest).subscribe((data: any) => {
    let questions : Question[] = data.results;
      questions.forEach(question => {
        const all_answers = question.incorrect_answers.concat(question.correct_answer);
        question.options = this.shuffle(all_answers);
      });
      this.allQuestions = questions;
      localStorage.setItem('triviaQuestions', JSON.stringify(this.allQuestions));
      this.router.navigate(['startTrivia']);
    });
  }

  shuffle(a : string[]){
    return a.sort(() => Math.random() - 0.5)
  }
}
