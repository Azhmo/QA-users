import { Component, OnInit } from '@angular/core';
import {ResponseLibrary} from '../../core/service/response-library.service';
import {IQuestion} from '../../shared/models/IQuestion.model';
import {SurveyService} from '../service/survey.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {
  private desiredResponseCount: number;
  private questionResponses: IQuestion[];
  private desiredResponses: any[];
  constructor(
    private responselibrary: ResponseLibrary,
    private surveyService: SurveyService,
  ) { }

  ngOnInit() {

    this.desiredResponses = [0, 0];
    this.desiredResponseCount = 0;
    this.questionResponses = this.surveyService.getQuestions();
  }

  getDesiredResponseCount() {
    this.desiredResponseCount = this.responselibrary.getDesiredResponseCount(this.desiredResponses);
  }

}
