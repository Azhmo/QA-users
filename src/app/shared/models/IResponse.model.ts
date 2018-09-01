import {a} from '../../../../node_modules/@angular/core/src/render3';

export class IResponse {
  constructor(
    private userId?: string,
    private questionId?: string,
    private answeredIndex?: number
  ) {
    this.userId = userId;
    this.questionId = questionId;
    this.answeredIndex = answeredIndex;
  }

  getUserId(): string {
    return this.userId;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  getQuestionId(): string {
    return this.questionId;
  }

  setQuestionId(questionId: string) {
    this.questionId = questionId;
  }

  getAnsweredIndex(): number {
    return this.answeredIndex;
  }

  setAnsweredIndex(answeredIndex: number) {
    this.answeredIndex = answeredIndex;
  }
}
