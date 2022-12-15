import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CatsController, AppController],
  providers: [CatsService, AppService],
})
export class AppModule {}
