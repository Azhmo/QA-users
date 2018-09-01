import {Injectable} from '@angular/core';
import {IResponse} from '../../shared/models/IResponse.model';

@Injectable()
export class ResponseLibrary {
  private responses: IResponse[] = [];
  private desiredResponsesUsers: any[];

  addResponse(response: IResponse) {
    this.responses.push(response);
  }

  getResponses(): IResponse[] {
    return this.responses;
  }

  // Iterate responses in pairs and compare their answers
  getDesiredResponseCount(responseArray: any[]) {
    const sortedResponses = this.sortResponsesByUserId();
    this.desiredResponsesUsers = [];
    for (let i = 0; i < sortedResponses.length; i += 2) {
      if (sortedResponses[i].getQuestionId() === '1' && sortedResponses[i].getAnsweredIndex() === responseArray[0]
          && sortedResponses[i + 1].getQuestionId() === '2' && sortedResponses[i + 1].getAnsweredIndex() === responseArray[1]) {
        this.desiredResponsesUsers.push(sortedResponses[i].getUserId());
      }
    }

    return this.desiredResponsesUsers.length;
  }

  // Sort responses by user ID so that I can iterate in pairs
  sortResponsesByUserId() {
    return this.responses.sort((resp1, resp2) => parseInt(resp1.getUserId(), 10) - parseInt(resp2.getUserId(), 10));
  }
}
