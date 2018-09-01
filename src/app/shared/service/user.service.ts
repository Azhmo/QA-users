import {Injectable} from '@angular/core';
import {IUser} from '../models/IUser.model';

@Injectable()

export class UserService {
  constructor(
  ) {}

  getUsers(): IUser[] {
    return [
      new IUser('1', 'Andrei'),
      new IUser('2', 'Oliver'),
      new IUser('3', 'Ben'),
      new IUser('4', 'Steve'),
      new IUser('5', 'John'),
    ];
  }
}
