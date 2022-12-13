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
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
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
