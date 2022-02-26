import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(
    @Body()
    CreateUserDto: CreateUserDto,
  ): void {
    this.usersService.create(CreateUserDto);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(
    @Param()
    params,
  ): User {
    return this.usersService.findOneUser(params.id);
  }

  @Delete(':id')
  remove(
    @Param()
    params,
  ) {
    return this.usersService.deleteUser(params.id);
  }
}
