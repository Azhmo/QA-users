export class IUser {
  constructor(
    private id: string,
    private email: string // no id because email can be used as a unique key
  ) {
    this.id = id;
    this.email = email;
  }

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }
}
