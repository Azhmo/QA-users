import { Injectable } from '@angular/core';
import {ResponseLibrary} from '../../core/service/response-library.service';
import {IQuestion} from '../../shared/models/IQuestion.model';
import {IResponse} from '../../shared/models/IResponse.model';
import {FormBuilder, FormControl} from '@angular/forms';

@Injectable()
export class SurveyService {
  private questions: IQuestion[];
  constructor(
    private responseLibrary: ResponseLibrary,
    private formBuilder: FormBuilder
  ) {}

  getQuestions() {
    this.questions = [
      new IQuestion('1', 'Which smartphone do you own?', ['Android', 'iPhone', 'Windows', 'others']),
      new IQuestion('2', 'How do you travel most regularly?', ['By car', 'By public transport', 'others'])
    ];
    return this.questions;
  }

  addResponse(response: IResponse) {
    this.responseLibrary.addResponse(response);
  }

  submitSurvey(group: any) {
    group['responses'].forEach((response) => {
      this.addResponse(Object.assign(new IResponse(), response)); // Cast form object to IResponse
    });
  }

  // Build survey questions
  createSurveyResponses() {
    const responseForm = [];
    this.questions.forEach(response =>
      responseForm.push(
        this.formBuilder.group({
          userId: new FormControl(''),
          questionId: response.getId(),
          answeredIndex: new FormControl('')
        })
      )
    );
    return responseForm;
  }
}
