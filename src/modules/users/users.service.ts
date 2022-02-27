import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { users } from 'src/constants/users';
import { UpdateUser } from './types';

@Injectable()
export class UsersService {
  private readonly users: User[] = users;

  findAll(): User[] {
    return this.users;
  }

  findOneUser(userId: string): User {
    return this.findUser(userId).user;
  }

  create(user: User) {
    const newUser = {
      ...user,
      id: uuidv4(),
    };
    this.users.push(newUser);
  }

  deleteUser(userId: string) {
    this.users.filter(({ id }) => id !== userId);
  }

  updateUser(userId: string, { firstName, lastName, age }: UpdateUser) {
    const { user, userIndex } = this.findUser(userId);
    this.users[userIndex] = {
      ...user,
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(age && { age }),
    };
  }

  private findUser(userId: string): { user: User; userIndex: number } {
    const userIndex = this.users.findIndex(({ id }) => id === userId);
    const user = this.users[userIndex];
    if (!user) {
      throw new NotFoundException('Could not find user with that id');
    }
    return { user, userIndex };
  }
}