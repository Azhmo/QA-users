import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './component/survey.component';
import {SharedModule} from '../shared/shared.module';
import {SurveyService} from './service/survey.service';
import { ResponsesComponent } from './responses/responses.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  providers: [SurveyService],
  declarations: [SurveyComponent, ResponsesComponent]
})
export class SurveyModule { }
