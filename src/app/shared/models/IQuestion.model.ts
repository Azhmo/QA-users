export class IQuestion {
  constructor(
    private id: string,
    private question: string,
    private answers: string[]
  ) {
    this.id = id;
    this.question = question;
    this.answers = answers;
}

getId(): string {
    return this.id;
}

setId(id: string) {
    this.id = id;
}

getQuestion(): string {
    return this.question;
}

setQuestion(question: string) {
    this.question = question;
}

getAnswers(): string[] {
    return this.answers;
}

setAnswers(answers: string[]) {
    this.answers = answers;
}


}
