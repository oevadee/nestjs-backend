import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { users } from 'src/constants/users';

@Injectable()
export class UsersService {
  private readonly users: User[] =
    users;

  create(
    user: User,
  ) {
    const newUser =
      {
        ...user,
        id: uuidv4(),
      };
    this.users.push(
      newUser,
    );
  }

  findAll(): User[] {
    return this
      .users;
  }

  findOneUser(
    userId,
  ): User {
    return this.users.find(
      ({
        id,
      }) =>
        id ===
        userId,
    );
  }

  deleteUser(
    userId,
  ) {
    return this.users.filter(
      ({
        id,
      }) =>
        id !==
        userId,
    );
  }
}
