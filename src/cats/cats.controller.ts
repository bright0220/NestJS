import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Query,
  Param,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Redirect } from '@nestjs/common/decorators/http/redirect.decorator';
import { Request, Response } from 'express';
import { version } from 'os';
import { Observable, of, retry } from 'rxjs';
import { CatsService } from './cats.service';
import {
  CreateCatDto,
  ListAllEntities,
  UpdateCatDto,
} from './dto/create-cat.dto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
