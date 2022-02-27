import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(
    @Body()
    input: CreateUserDto,
  ): void {
    this.usersService.create(input);
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
    userId,
  ) {
    return this.usersService.deleteUser(userId);
  }

  @Patch(':id')
  update(@Param() userId: string, @Body() input: UpdateUserDto) {
    return this.usersService.updateUser(userId, input);
  }
}
