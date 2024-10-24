import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';


@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
}

    @Get()
    async findAll() {
    return this.userService.findAll();
}
}
