import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionRequest } from '../modal/question.request.modal';
import { CategoryModal } from '../modal/category.modal';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

    constructor(private baseService: BaseService<any>) {}

    getCategories() : Observable<CategoryModal> | any {
      const apiEndpoint = 'api_category.php';
      return this.baseService.get(apiEndpoint);
    }

    getQuestion(questionRequest : QuestionRequest) : any {
      var apiEndpoint = `api.php?amount=${questionRequest.amount}`;
      if(questionRequest.category){
        apiEndpoint = apiEndpoint.concat(`&category=${questionRequest.category}`)
      }
      if(questionRequest.difficulty){
        apiEndpoint = apiEndpoint.concat(`&difficulty=${questionRequest.difficulty}`)
      }
      if(questionRequest.type){
        apiEndpoint = apiEndpoint.concat(`&type=${questionRequest.type}`)
      }
      return this.baseService.get(`${apiEndpoint}`);
    }
}