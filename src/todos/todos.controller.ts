import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findMany() {
    return this.todosService.findMany();
  }

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todosService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTodoDto) {
    return this.todosService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todosService.delete(id);
  }


  

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.todosService.findOne(+id);
  // }

  

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.todosService.remove(+id);
  // }
}
