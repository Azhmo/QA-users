import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {SurveyService} from '../service/survey.service';
import {IQuestion} from '../../shared/models/IQuestion.model';
import {UserService} from '../../shared/service/user.service';
import {IUser} from '../../shared/models/IUser.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  private group: FormGroup;
  private questions: IQuestion[];
  private users: IUser[];

  constructor(
    private surveyService: SurveyService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.questions = this.surveyService.getQuestions();
    this.group = this.formBuilder.group({
      userId: new FormControl(''),
      responses: this.formBuilder.array(this.surveyService.createSurveyResponses())
    });

    this.group.get('userId').valueChanges.subscribe((change) => {
      this.group.get('responses')['controls'].forEach((response) => {
        response.get('userId').setValue(change);
      });
    });
  }

  sendResponse() {
    this.surveyService.submitSurvey(this.group.value);
  }

}
