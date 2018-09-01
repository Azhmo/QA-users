import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/component/survey.component';
import {ResponsesComponent} from './survey/responses/responses.component';

export const appRoutes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'responses', component: ResponsesComponent },
  { path: '', redirectTo: 'survey', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
